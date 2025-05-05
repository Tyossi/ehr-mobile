import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import { useQuery } from "@tanstack/react-query";
import { api } from "../..";
import { useNavigate } from "react-router-dom";
import "./plan.css";

const getUserPlans = async (patientID) => {
  const response = api.get(`/patient/health-condition/${patientID}`);
  return response;
};

const Plan = () => {
  const patientID = localStorage.getItem("userId");
  const [currentData, setCurrentData] = useState("ongoing");
  //   const { data, isLoading, error } = useQuery({
  //     queryKey: ["plans", patientID],
  //     queryFn: () => getUserPlans(patientID),
  //   });

  const navigate = useNavigate();
  //   if (isLoading) return <p>Loading</p>;

  //   if (error) return <p>{error.message}</p>;

  return (
    <div className="health__condition-container">
      <PageNav title="Plan" />
      <div
        className="content__switch__container"
        style={{ width: "fit-content" }}
      >
        <div className="health__condition-content">
          <div className="content__switches">
            <p
              className={
                currentData === "ongoing"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("ongoing")}
            >
              Ongoing
            </p>
            <p
              className={
                currentData === "treated"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("treated")}
            >
              Completed
            </p>
            <p
              className={
                currentData === "treated"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("treated")}
            >
              Ended
            </p>
          </div>
        </div>
      </div>
      <div className="health__conditions">
        <div
          className="health__condition"
          onClick={() => navigate(`/panel/plan-details/${1}`)}
        >
          <p className="health__condition-label">Health Condition</p>
          <p className="health__condition-text">Maleria & Typhoid</p>
          <div className="health__condition-date">
            <CalendarIcon />
            <p className="health__condition-date--text">Wed, 7 Feb 2024</p> -
            <p className="health__condition-date--text">Wed, 7 Feb 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plan;
