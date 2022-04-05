/*global kakao*/
import React, { useEffect, useState } from 'react';
import './EditHome.css'
import axios from "axios";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useParams } from "react-router-dom";

function EditHome(props) {
	// const homeCategoriesUrl = "http://localhost:8080/home/v1/home_category/list";
	// const homeFacilitiesUrl = "http://localhost:8080/home/v1/home_facility/list";
	// const homeUrl = "http://localhost:8080/home/v1/home";
	// const checkInPoliciesUrl = "http://localhost:8080/home/v1/home_policy/check_in";
	// const checkOutPoliciesUrl = "http://localhost:8080/home/v1/home_policy/check_out";
	// const isEnableDeleteRoomUrl = "http://localhost:8080/book/v1/reservation/delete_room/";
	const homeCategoriesUrl = "/home/v1/home_category/list";
	const homeFacilitiesUrl = "/home/v1/home_facility/list";
	const homeUrl = "/home/v1/home";
	const checkInPoliciesUrl = "/home/v1/home_policy/check_in";
	const checkOutPoliciesUrl = "/home/v1/home_policy/check_out";
	const isEnableDeleteRoomUrl = "/book/v1/reservation/delete_room/"
	const [categories, setCategories] = useState([]);
	const [facilities, setFacilities] = useState([]);
	const [checkInPolicies, setCheckInPolicies] = useState([]);
	const [checkOutPolicies, setCheckOutPolicies] = useState([]);
	const [home, setHome] = useState({});
	const [rooms, setRooms] = useState([]);
	const [images, setImages] = useState([]);
	const [location, setLocation] = useState({});
	const { id } = useParams();

	useEffect(() => {
		axios.get(homeCategoriesUrl).then(res => {
			setCategories(res.data);
		});

		axios.get(homeFacilitiesUrl).then(res => {
			setFacilities(res.data);
		});

		axios.get(checkInPoliciesUrl).then(res => {
			setCheckInPolicies(res.data);
		});

		axios.get(checkOutPoliciesUrl).then(res => {
			setCheckOutPolicies(res.data);
		});

		axios.get(homeUrl + "/" + id).then(res => {
			setHome(res.data);
			setRooms(res.data.rooms);
			setImages(res.data.images);
			document.getElementById("homeName").value = res.data.homeName;
			document.getElementById("homeAddress").value = res.data.homeAddress;
			document.getElementById("homeZipCode").value = res.data.homeZipCode;
			document.getElementById(`homeCategory${res.data.homeCategoryId}`).selected = true;
			document.getElementById("homePolicyCustom").value = res.data.homePolicyCustom;
			document.getElementById("homeInformation").value = res.data.homeInformation;
			res.data.homeFacilities && res.data.homeFacilities.map(homeFacility => {
				document.getElementById(`homeFacility${homeFacility}`).checked = true;
			});
			res.data.homePolicies && res.data.homePolicies.map(homePolicy => {
				document.getElementById(`homePolicy${homePolicy}`).checked = true;
			});
			res.data.rooms && res.data.rooms.map((room, index) => {
				document.getElementById(`home_edit_room_name${index}`).value = room.roomName;
				document.getElementById(`home_edit_room_gender${index}`).value = room.gender;
				document.getElementById(`home_edit_room_single_bed${index}`).value = room.singleBed;
				document.getElementById(`home_edit_room_double_bed${index}`).value = room.doubleBed;
				document.getElementById(`home_edit_room_bedding${index}`).value = room.bedding;
			});
		});
	}, [])

	useEffect(() => {
		if (rooms.length !== 0) {
			let roomIndex = rooms.length - 1;
			document.getElementById(`home_edit_room_name${roomIndex}`).value = rooms[roomIndex].roomName;
			document.getElementById(`home_edit_room_gender${roomIndex}`).value = rooms[roomIndex].gender;
			document.getElementById(`home_edit_room_single_bed${roomIndex}`).value = rooms[roomIndex].singleBed;
			document.getElementById(`home_edit_room_double_bed${roomIndex}`).value = rooms[roomIndex].doubleBed;
			document.getElementById(`home_edit_room_bedding${roomIndex}`).value = rooms[roomIndex].bedding;
		}
	}, [rooms])

	useEffect(() => {
		var mapContainer = document.getElementById('map'),
			mapOption = {
				center: new kakao.maps.LatLng(home.coordinateX, home.coordinateY),
				level: 3
			};
		var map = new kakao.maps.Map(mapContainer, mapOption);
		var marker = new kakao.maps.Marker({
			position: map.getCenter()
		});
		marker.setMap(map);
		kakao.maps.event.addListener(map, 'click', function (mouseEvent) {
			var latlng = mouseEvent.latLng;
			marker.setPosition(latlng);
			setLocation({
				coordinateX: latlng.getLat(),
				coordinateY: latlng.getLng()
			});
		});
	}, [home])

	const decreaseButton = (id) => {
		if (document.getElementById(id).value > 0) {
			document.getElementById(id).value = document.getElementById(id).value - 1;
		}

	}
	const increaseButton = (id) => {
		document.getElementById(id).value = parseInt(document.getElementById(id).value) + 1;

	}
	const addRoomButton = () => {
		setRooms([
			...rooms,
			{
				roomName: "NoName",
				gender: "male",
				singleBed: 0,
				doubleBed: 0,
				bedding: 0,
				maxHeadCount: 0
			}
		]);

	}

	const deleteHomeButton = () => {
		if (window.confirm("정말 숙소를 삭제하시겠습니까? (관련 예약도 모두 삭제됨)")) {
			axios.delete(homeUrl + "/" + id).then(res => {
				console.log(res.data);
			})
		}
	}
	const deleteRoomButton = (index) => {
		if (window.confirm("정말 삭제하시겠습니까?")) {
			if (rooms[index].id !== undefined) {
				axios.get(isEnableDeleteRoomUrl + rooms[index].id).then(res => {
					if (res.data.code === 1) {
						setRooms(
							rooms.slice(0, index).concat(rooms.slice(index + 1, rooms.length))
						);
					} else if (res.data.code === 3) {
						alert(res.data.message);
					}
				})
			} else {
				setRooms(
					rooms.slice(0, index).concat(rooms.slice(index + 1, rooms.length))
				);
			}
		}
	}

	const deleteImageButton = (index) => {
		if (window.confirm("정말 삭제하시겠습니까?")) {
			setImages(
				images.slice(0, index).concat(images.slice(index + 1, images.length))
			);
		}
	}

	const addImageButton = () => {
		setImages([...images, document.getElementById("edit_home_add_image").files[0].name]);
	}

	const editHomeButton = async () => {
		if (window.confirm("숙소 정보 변경을 적용하시겠습니까?")) {
			axios.put(homeUrl, {
				homeId: home.homeId,
				homeName: document.getElementById("homeName").value,
				homeAddress: document.getElementById("homeAddress").value,
				coordinateX: location.coordinateX,
				coordinateY: location.coordinateY,
				homeCategoryId: document.getElementById("homeCategory").value,
				homeInformation: document.getElementById("homeInformation").value,
				userId: 1,
				homeZipCode: document.getElementById("homeZipCode").value,
				images: images,
				homePolicies: checkPolicy(),
				homeFacilities: checkFacility(),
				homePolicyCustom: document.getElementById("homePolicyCustom").value,
				rooms: checkRoom()
			}).then(res => {
				console.log(res.data);
			});
		}
	}

	const checkFacility = () => {
		let checkFacilities = [];
		facilities.map(facility => {
			if (document.getElementById(`homeFacility${facility.id}`).checked) {
				checkFacilities.push(facility.id);
			}
		});
		return checkFacilities;
	}

	const checkPolicy = () => {
		let checkPolicies = [];
		checkInPolicies.map(policy => {
			if (document.getElementById(`homePolicy${policy.id}`).checked) {
				checkPolicies.push(policy.id);
			}
		});
		checkOutPolicies.map(policy => {
			if (document.getElementById(`homePolicy${policy.id}`).checked) {
				checkPolicies.push(policy.id);
			}
		});
		return checkPolicies;
	}

	const checkRoom = () => {
		let roomsTmp = [];
		rooms.map((room, index) => {
			roomsTmp.push({
				id: room.id,
				roomName: document.getElementById(`home_edit_room_name${index}`).value,
				gender: document.getElementById(`home_edit_room_gender${index}`).value,
				singleBed: document.getElementById(`home_edit_room_single_bed${index}`).value,
				doubleBed: document.getElementById(`home_edit_room_double_bed${index}`).value,
				bedding: document.getElementById(`home_edit_room_bedding${index}`).value,
				maxHeadCount: parseInt(document.getElementById(`home_edit_room_single_bed${index}`).value) + parseInt(document.getElementById(`home_edit_room_double_bed${index}`).value) * 2 + parseInt(document.getElementById(`home_edit_room_bedding${index}`).value)
			});
		})
		return roomsTmp;
	}

	return (
		<>
			<div className='header_section'>
				<p className={"reservation_header"}> 숙소 정보 변경</p>
			</div>

			<div className={"container"}>
				<p className={"title"}>숙소 열기 닫기</p>
				<div className={"contents_container"}>
					<p className={"home_status_title"}>숙소 상태</p>
					<div className={"home_status"}>
						<div>
							<input type={"radio"} name={"home_status"} value={"open"} />
							<span>열기</span>
							<p>숙소 열기를 하시면 게스트가 숙소를 검색하고 예약 할 수 있습니다.</p>
						</div>
						<div>
							<input type={"radio"} name={"home_status"} value={"close"} />
							<span>닫기</span>
							<p>숙소 닫기를 하시면 열기를 하기 전까지 예약이 불가능 합니다.</p>
						</div>
						<div className={"home_status_button_box"}>
							<button>저장하기</button>
						</div>
					</div>
				</div>

				<p className={"title"}>숙소 정보 변경</p>
				<div className={"contents_container"}>
					<div className={"row"}>
						<div className={"edit_home_small_title"}>숙소 유형</div>
						<div className={"edit_home_small_content"}>
							<select id={"homeCategory"} className={"home_edit_select"}>
								{
									categories && categories.map(homeCategory => (
										<option id={`homeCategory${homeCategory.id}`} key={homeCategory.id}
											value={homeCategory.id}>{homeCategory.homeCategoryName}</option>
									))
								}
							</select>
						</div>
					</div>

					<div className={"row"}>
						<div className={"edit_home_small_title"}>숙소 이름</div>
						<div className={"edit_home_small_content"}>
							<input id={"homeName"} className={"home_edit_input"} type="text" />
						</div>
					</div>

					<hr />

					<div className={"row"}>
						<div className={"edit_home_small_title"}>숙소 주소</div>
						<div className={"edit_home_small_content"}>
							<input id={"homeAddress"} className={"home_edit_input"} type="text" />
							<input id={"homeZipCode"} className={"home_edit_input"} type="text" />
						</div>
					</div>

					<div className={"row"}>
						<div className={"edit_home_small_title"}>숙소 위치</div>
						<div className={"edit_home_small_content"}>
							<div className="center">
								<div id="map" className="map_box"></div>
								<p>지도를 클릭하여 위치 변경</p>
							</div>
						</div>
					</div>

					<hr />

					<div className={"row"}>
						<div className={"edit_home_small_title"}>숙소 시설</div>
						<div className={"edit_home_small_content"}>
							{
								facilities && facilities.map(homeFacility => (
									<div key={homeFacility.id}>
										<input id={`homeFacility${homeFacility.id}`} type="checkbox"
											value={homeFacility.id} /> {homeFacility.homeFacilityName}
									</div>
								))
							}
						</div>
					</div>

					<hr />

					<div className={"row"}>
						<div className={"edit_home_small_title"}>객실 정보</div>
						<div className={"edit_home_small_content"}>
							{
								rooms && rooms.map((room, index) => (
									<div key={index}>
										<div>
											<div className={"home_edit_room"}>
												<span>객실 이름</span>
												<button className={"home_edit_delete_button"}
													onClick={() => deleteRoomButton(index)}>객실 삭제
												</button>
											</div>
											<input id={`home_edit_room_name${index}`} className={"home_edit_input"}
												type="text" />
										</div>
										<div>
											<p>숙박 가능한 성별</p>
											<select id={`home_edit_room_gender${index}`} className={"home_edit_select"}>
												<option value="male">남자</option>
												<option value="female">여자</option>
											</select>
										</div>
										<div className={"row"}>
											<div>
												<span>싱글 침대</span>
												<div>
													<RemoveCircleOutlineIcon name="dec"
														onClick={() => decreaseButton(`home_edit_room_single_bed${index}`)} />
													<input id={`home_edit_room_single_bed${index}`} className="inputNumber"
														type="number" />
													<AddCircleOutlineIcon name="inc"
														onClick={() => increaseButton(`home_edit_room_single_bed${index}`)} />
												</div>
											</div>

											<div>
												<span>2층 침대</span>
												<div>
													<RemoveCircleOutlineIcon name="dec"
														onClick={() => decreaseButton(`home_edit_room_double_bed${index}`)} />
													<input id={`home_edit_room_double_bed${index}`} className="inputNumber"
														type="number" />
													<AddCircleOutlineIcon name="inc"
														onClick={() => increaseButton(`home_edit_room_double_bed${index}`)} />
												</div>
											</div>

											<div>
												<span>이불 지원</span>
												<div>
													<RemoveCircleOutlineIcon name="dec"
														onClick={() => decreaseButton(`home_edit_room_bedding${index}`)} />
													<input id={`home_edit_room_bedding${index}`} className="inputNumber"
														type="number" />
													<AddCircleOutlineIcon name="inc"
														onClick={() => increaseButton(`home_edit_room_bedding${index}`)} />
												</div>
											</div>
										</div>
									</div>
								))
							}
							<div className={"center"}>
								<button className={"reservation_room_button"} onClick={() => addRoomButton()}>객실 추가
								</button>
							</div>
						</div>
					</div>

					<hr />

					<div className={"row"}>
						<div className={"edit_home_small_title"}>체크인 정책</div>
						<div className={"edit_home_small_content"}>
							<div>
								{
									checkInPolicies && checkInPolicies.map(checkInPolicy => (
										<div key={checkInPolicy.id}>
											<input id={`homePolicy${checkInPolicy.id}`}
												className={"home_edit_check_box"}
												type="checkbox"
												value={checkInPolicy.id} /> {checkInPolicy.homePolicy}
										</div>
									))
								}
							</div>
						</div>
					</div>

					<div className={"row"}>
						<div className={"edit_home_small_title"}>체크아웃 정책</div>
						<div className={"edit_home_small_content"}>
							<div>
								{
									checkOutPolicies && checkOutPolicies.map(checkOutPolicy => (
										<div key={checkOutPolicy.id}>
											<input id={`homePolicy${checkOutPolicy.id}`}
												className={"home_edit_check_box"}
												type="checkbox"
												value={checkOutPolicy.id} /> {checkOutPolicy.homePolicy}
										</div>
									))
								}
							</div>
						</div>
					</div>

					<hr />

					<div className={"row"}>
						<div className={"edit_home_small_title"}>쉼터 생활 수칙</div>
						<div className={"edit_home_small_content"}>
							<textarea id={"homePolicyCustom"} className={"home_edit_textarea"} />
						</div>
					</div>

					<div className={"row"}>
						<div className={"edit_home_small_title"}>간단한 쉼터 소개</div>
						<div className={"edit_home_small_content"}>
							<textarea id={"homeInformation"} className={"home_edit_textarea"} />
						</div>
					</div>

					<hr />

					<div className={"row"}>
						<div className={"edit_home_small_title"}>숙소 사진 변경</div>
						<div className={"edit_home_small_content"}>
							<input id={"edit_home_add_image"} type="file" />
							<button onClick={() => addImageButton()}>업로드</button>
							<div className={"row"}>
								{
									images && images.map((image, index) => (
										<div className={"edit_home_images_box"} key={index}>
											<img className={"edit_home_image"} src={`/img/${image}`}
												alt={image} />
											<button className={"edit_home_image_delete_button"}
												onClick={() => deleteImageButton(index)}>삭제
											</button>
										</div>
									))
								}
							</div>
						</div>
					</div>
				</div>
				<div className={"row"}>
					<button className={"home_edit_delete_home_button"} onClick={() => deleteHomeButton()}>숙소 삭제</button>
					<button className={"home_edit_edit_home_button"} onClick={() => editHomeButton()}>정보 수정 완료</button>
				</div>
			</div>

		</>
	);
}

export default EditHome;