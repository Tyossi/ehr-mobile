import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import { useNavigate } from "react-router-dom";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import { api } from "../..";

const getMedicalHistory = async (patientID) => {
  const response = api.get(`/patient/health-condition/${patientID}`);
  return response;
};

const MedicalHistory = () => {
  const patientID = localStorage.getItem("userId");
  const [currentData, setCurrentData] = useState("ongoing");
  //   const { data, isLoading, error } = useQuery({
  //     queryKey: ["medicalHistory", patientID],
  //     queryFn: () => getMedicalHistory(patientID),
  //   });

  const navigate = useNavigate();
  //   if (isLoading) return <p>Loading</p>;

  //   if (error) return <p>{error.message}</p>;

  return (
    <div className="health__condition-container">
      <PageNav title="Medical History" />
      <div className="health__conditions">
        <div
          className="health__condition"
          onClick={() => navigate(`/panel/medical-history/${1}`)}
        >
          <p className="health__condition-label">Investigation Type</p>
          <p className="health__condition-text">Maleria & Typhoid</p>
          <div className="health__condition-date">
            <CalendarIcon />
            <p className="health__condition-date--text">Wed, 7 Feb 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistory;
