import React, { useState } from "react";
import "./medicalHistoryDetails.css";
import PageNav from "../PageNav/PageNav";
import MoreAppointmentInfoModal from "../MoreInfoModal/MoreAppointmentInfo";

const MedicalHistoryDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const toggleMoreInfo = () => {
    setShowMoreInfo(true);
  };

  return (
    <div
      className="
    medical__history__details__container"
    >
      <PageNav
        title="Medical History Details"
        showInfoIcon={true}
        onClickFunction={toggleMoreInfo}
      />
      <div className="medical__history__cards">
        <div className="medical__history__card__heading">
          <p className="medical__history__card__heading-and-CTAs">
            Investigation
          </p>
        </div>
        <div className="medical__history-card--details">
          <span className="investigation__type__span">
            <p className="investigation__type__label">Investigation Type:</p>
            <p className="investigation__type__text">Haematology Request</p>
          </span>
          <p className="investigation__result__tag">Investigation:</p>
          <div className="investigation__finding-and-result">
            <p className="investigation__finding">Malaria</p>
            <p className="investigation__result">Result</p>
          </div>
          <div className="investigation__finding-and-result">
            <p className="investigation__finding">Hypochromia </p>
            <p className="investigation__result">Result</p>
          </div>
          <div className="investigation__finding-and-result">
            <p className="investigation__finding">MCH</p>
            <p className="investigation__result">Result</p>
          </div>
        </div>
        <div className="medical__history-card--details">
          <span className="investigation__type__span">
            <p className="investigation__type__label">Investigation Type:</p>
            <p className="investigation__type__text">Haematology Request</p>
          </span>
          <p className="investigation__result__tag">Investigation:</p>
          <div className="investigation__finding-and-result">
            <p className="investigation__finding">Malaria</p>
            <p className="investigation__result">Result</p>
          </div>
        </div>
        <div className="medical__history-card--details">
          <span className="investigation__type__span">
            <p className="investigation__type__label">Investigation Type:</p>
            <p className="investigation__type__text">Haematology Request</p>
          </span>
          <p className="investigation__result__tag">Investigation:</p>
          <div className="investigation__finding-and-result">
            <p className="investigation__finding">Malaria</p>
            <p className="investigation__result">Result</p>
          </div>
        </div>
        <div className="prescription__doc__details">
          <p className="doctor__name">Dr. Usman Adeyemi</p>
          <p className="doctor__signature">Dr. Usman Adeyemi</p>
          <p className="doctor__sign__date">12/02/2024</p>
        </div>
      </div>
      {/* {showMoreInfo && (
        <MoreAppointmentInfoModal
          setShowMoreInfo={setShowMoreInfo}
          title="Mediical History Details"
          //   data={data}
        />
      )} */}
    </div>
  );
};

export default MedicalHistoryDetails;
