import React, { useState } from "react";
import "./HostReservation.css";
import {Tabs, Tab} from 'react-bootstrap'
import HostReservationList from "./HostReservationList";
import HostCheckInCard from "./HostCheckInCard";
import HostCheckOutCard from "./HostCheckOutCard";

function HostReservation() {
    const [key, setKey] = useState('home');

    return (
        <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <Tab eventKey="reservationlist" title="예약목록">
        <HostReservationList />
      </Tab>
      <Tab eventKey="checkin" title="체크인">
        <HostCheckInCard  />
      </Tab>
      <Tab eventKey="checkout" title="체크아웃" >
        <HostCheckOutCard />
      </Tab>
    </Tabs>
    );
}

export default HostReservation;
