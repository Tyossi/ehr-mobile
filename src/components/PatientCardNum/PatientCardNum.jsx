import React from "react";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-icon.svg";
import "../PatientProfile/patientProfile.css";

const PatientCardNum = () => {
  return (
    <div className="patient__card__no__and__edit__icon">
      <p className="patient__card__no">Card No:123</p>
      <EditIcon />
    </div>
  );
};

export default PatientCardNum;
