import React from "react";
import UserDetailsBar from "../UserDetailsBar/UserDetailsBar";
import { Outlet } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dahboard__container">
      {/* <UserDetailsBar /> */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
