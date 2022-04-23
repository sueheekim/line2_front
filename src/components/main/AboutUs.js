import React from 'react';

function AboutUs() {
    return (
        <>
            <div className="header_section">
                <p className={'reservation_header'}>About Us</p>
            </div>

            <div className="container">
                <div className="about_container">
                    <div className="about_section">
                        <div className="about_title center">우리의 시작은 지하철로부터</div>
                    </div>
                    <div className="about_section">
                        <div className="center">
                            <img className="about_logo" src="./img/ansim_about_us.png" />
                        </div>
                    </div>
                    <div className="about_section">
                        <div className="about_text">해뜨는 집을 아는가?</div>
                        <div className="about_text">
                            해뜨는 집은 사회복지 법인 시설로 가출한 여자 청소년이나 미혼모들에게 의식주를 지원하는 쉼터
                            시설 이다.
                        </div>
                        <div className="about_text">
                            이렇듯 지하철 화장실에서 겨우 볼 수 있는 쉼터를 보호를 받아야 하는 대상이 잘 알고 있을까?
                            만약 이런 사회적 약자를 위한 보호 시설을 쉽게 검색하고 예약할 수 있다면 어떨까?
                        </div>
                        <div className="about_text">
                            그래서 우리의 프로젝트는 지하철을 이용하는 비주류들을 위해 시작 되었다.
                        </div>
                        <div className="about_text">
                            보호시설을 쉼게 찾아보고 예약 할 수 있는 서비스를 제공하고 보호시설 담당자와 입소하길
                            희망하는 사회적 약자들이 서로 소통 할 수 있는 보호 시설 맞춤형 예약 플랫폼을 제공하고자
                            한다.
                        </div>
                        <div className="about_text">
                            궁극적으로는 보호시설의 홍보를 돕고 쉽게 소통하고 예약 함으로써 시설을 홍보하고 더 나아가
                            사회적 약자들을 위험으로부터 보호 하고 자립을 돕는 서비스를 만드는 것이 목표이다.
                        </div>
                    </div>
                </div>

                <div className="about_section">
                    <div className="about_title center">안심 팀</div>
                </div>
                <div className="justify-content-space-around flex-wrap">
                    <div className="about_card">
                        <div className="about_card_img" style={{ backgroundImage: `url("./img/khd.jpg")` }}></div>
                        <div className="justify-content-space-between about_card_info_box_container">
                            <div className="about_card_info_box1">
                                <div className="about_card_info_text1">이름:</div>
                                <div className="about_card_info_text1">연락처:</div>
                                <div className="about_card_info_text1">메일:</div>
                                <div className="about_card_info_text1">역할:</div>
                            </div>
                            <div className="about_card_info_box2">
                                <div className="about_card_info_text2">김형동 (조장)</div>
                                <div className="about_card_info_text2">010-9911-2501</div>
                                <div className="about_card_info_text2">gudehdu10@gmail.com</div>
                                <div className="about_card_info_text2">Backend, DevOps</div>
                            </div>
                        </div>
                    </div>
                    <div className="about_card">
                        <div className="about_card_img" style={{ backgroundImage: `url("./img/jcb.jpg")` }}></div>
                        <div className="justify-content-space-between about_card_info_box_container">
                            <div className="about_card_info_box1">
                                <div className="about_card_info_text1">이름:</div>
                                <div className="about_card_info_text1">연락처:</div>
                                <div className="about_card_info_text1">메일:</div>
                                <div className="about_card_info_text1">역할:</div>
                            </div>
                            <div className="about_card_info_box2">
                                <div className="about_card_info_text2">전창배</div>
                                <div className="about_card_info_text2">010-5354-8577</div>
                                <div className="about_card_info_text2">avantgard7@gmail.com</div>
                                <div className="about_card_info_text2">FullStack</div>
                            </div>
                        </div>
                    </div>
                    <div className="about_card">
                        <div className="about_card_img" style={{ backgroundImage: `url("./img/ksh.jpg")` }}></div>
                        <div className="justify-content-space-between about_card_info_box_container">
                            <div className="about_card_info_box1">
                                <div className="about_card_info_text1">이름:</div>
                                <div className="about_card_info_text1">연락처:</div>
                                <div className="about_card_info_text1">메일:</div>
                                <div className="about_card_info_text1">역할:</div>
                            </div>
                            <div className="about_card_info_box2">
                                <div className="about_card_info_text2">김수희</div>
                                <div className="about_card_info_text2">010-3581-0317</div>
                                <div className="about_card_info_text2">tizmfk802@gmail.com</div>
                                <div className="about_card_info_text2">PM, Design</div>
                            </div>
                        </div>
                    </div>
                    <div className="about_card">
                        <div className="about_card_img" style={{ backgroundImage: `url("./img/wsy.jpg")` }}></div>
                        <div className="justify-content-space-between about_card_info_box_container">
                            <div className="about_card_info_box1">
                                <div className="about_card_info_text1">이름:</div>
                                <div className="about_card_info_text1">연락처:</div>
                                <div className="about_card_info_text1">메일:</div>
                                <div className="about_card_info_text1">역할:</div>
                            </div>
                            <div className="about_card_info_box2">
                                <div className="about_card_info_text2">왕서윤</div>
                                <div className="about_card_info_text2">010-5432-1426</div>
                                <div className="about_card_info_text2">wsy0912@gmail.com</div>
                                <div className="about_card_info_text2">Project Backup</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutUs;
