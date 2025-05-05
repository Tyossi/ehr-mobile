import React from "react";
import { ReactComponent as RightIcon } from "../../assets/icons/right-arrow.svg";
import PageNav from "../PageNav/PageNav";
import { useNavigate } from "react-router-dom";
import "./healthTracker.css";

const HealthTracker = () => {
  const navigate = useNavigate();

  return (
    <div className="health__condition-container">
      <PageNav title="Health Tracker" />
      <div className="health__tracker__tabs">
        <div
          className="health__tracker__tab"
          onClick={() => navigate("/panel/health-tracker-details/1")}
        >
          <div className="tracker__tab__texts">
            <span className="weight__span">
              <p className="prescription__note__tag">Weight</p>
              <p className="tracking__weight">70kg</p>
            </span>
            <span className="last__updated__span">
              <p className="last__updated__label">Last Updated:</p>
              <p className="last__updated__date">10/09/2024</p>
            </span>
          </div>
          <RightIcon />
        </div>
      </div>
    </div>
  );
};

export default HealthTracker;
