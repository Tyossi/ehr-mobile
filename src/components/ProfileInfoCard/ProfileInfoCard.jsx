import React from "react";
import patientImg from "../../assets/images/patient-pp.png";
import "./profileInfoCard.css";
import PatientCardNum from "../PatientCardNum/PatientCardNum";

const ProfileInfoCard = () => {
  return (
    <div className="profile__info__card__container">
      <PatientCardNum />
      <div className="profile__info__card__content">
        <img
          src={patientImg}
          alt="patient profile pic"
          className="profile__info__img"
        />
        <div className="profile__info__texts">
          <p className="profile__info__patient__name">Ibrahim Uzoh Adewale</p>
          <p className="profile__info__text">My Information</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfoCard;
