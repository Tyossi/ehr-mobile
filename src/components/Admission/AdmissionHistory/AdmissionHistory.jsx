import React from "react";
import "./admissionHistory.css";

const AdmissionHistory = ({ setPrescriptionId, setShowPrescriptions }) => {
  return (
    <div className="admission__tabs">
      <div
        className="admission__tab"
        onClick={() => setShowPrescriptions(true)}
      >
        <div className="admission__diagnosis__and__status">
          <p className="admission__diagnosis">Malaria & Typhoid</p>
          <p className="admission__admitted__status">Admitted</p>
        </div>
        <div className="admission__date__and__ward">
          <div className="admission__detail__box">
            <p className="admission__detail__label">Admission Date</p>
            <p className="admission__detail__text">10/09/2024</p>
          </div>
          <div className="admission__detail__box">
            <p className="admission__detail__label">Ward</p>
            <p className="admission__detail__text">Medical Ward Room 3</p>
          </div>
        </div>
      </div>
      <div className="admission__tab">
        <div className="admission__diagnosis__and__status">
          <p className="admission__diagnosis">Malaria & Typhoid</p>
          <p className="admission__discharged__status">Discharged</p>
        </div>
        <div className="admission__date__and__ward">
          <div className="admission__detail__box">
            <p className="admission__detail__label">Admission Date</p>
            <p className="admission__detail__text">10/09/2024</p>
          </div>
          <div className="admission__detail__box">
            <p className="admission__detail__label">Ward</p>
            <p className="admission__detail__text">Medical Ward Room 3</p>
          </div>
        </div>
      </div>
      <div className="admission__tab">
        <div className="admission__diagnosis__and__status">
          <p className="admission__diagnosis">Malaria & Typhoid</p>
          <p className="admission__discharged__status">Discharged</p>
        </div>
        <div className="admission__date__and__ward">
          <div className="admission__detail__box">
            <p className="admission__detail__label">Admission Date</p>
            <p className="admission__detail__text">10/09/2024</p>
          </div>
          <div className="admission__detail__box">
            <p className="admission__detail__label">Ward</p>
            <p className="admission__detail__text">Medical Ward Room 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionHistory;
