import React, { useState } from "react";
import ProfileInfoCard from "../ProfileInfoCard/ProfileInfoCard";
import "./controlDashboard.css";
import Appointment from "../Appointment/Appointment";

const ControlDashboard = () => {
  const [activeTab, setActiveTab] = useState("");

  return (
    <div className="control__dashboard__container">
      <ProfileInfoCard />
      <div className="content__switch__container">
        <div className="content__switches">
          <p className="content__switch__active">Admission</p>
          <p className="content__switch__inactive">Appointment</p>
          <p className="content__switch__inactive">Medical History</p>
          <p className="content__switch__inactive">Insurance</p>
          <p className="content__switch__inactive">Health Tracker</p>
        </div>
      </div>
      <Appointment />
    </div>
  );
};

export default ControlDashboard;
