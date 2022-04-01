import React, { useState, useEffect } from "react";

import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
import HostProfile from "./HostProfile";

function HostReservationList() {
    // const reservationUrl = "http://localhost:8080/book/v1/reservation/user/before_check_in/1"
    const reservationUrl = "/book/v1/reservation/user/before_check/1"
    const [reservation, setReservation] = useState([]);

    useEffect(()=>{
        axios.get(reservationUrl).then((res)=>{
            setReservation(res.data);
            console.log(res.data)
        })
    },[])
    

    return ( 
        <>
            <Card sx={{ maxWidth: 1000 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <div className="guest_reservation_profile">
                        {
                            reservation.map((reservation)=>(
                                <HostProfile 
                                    guest={reservation.user} 
                                    home={reservation.home} 
                                    reservation={reservation} 
                                    setReservation={setReservation}
                                />
                            ))
                        }

                </div>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    </Typography>
                </CardContent>

            </Card>
            </>
     );
}

export default HostReservationList;