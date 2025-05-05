import React, { useMemo } from "react";
import { ReactComponent as EditIcon } from "../../assets/icons/edit-icon.svg";
import { ReactComponent as VerifiedIcon } from "../../assets/icons/verified-icon.svg";
import patientImg from "../../assets/images/patient-pp.png";
import PatientCardNum from "../PatientCardNum/PatientCardNum";
import PageNav from "../PageNav/PageNav";
import { useUserDatacontext } from "../../contexts/UserDataContent";
import { differenceInYears } from "date-fns";
import "./patientProfile.css";

const PatientProfile = () => {
  const { userData } = useUserDatacontext();

  // const birthDateString = userData?.dob?.substr(0, 10);

  // console.log({ userData });

  // const calculateAge = (birthDateString) => {
  //   return differenceInYears(new Date(), new Date(birthDateString));
  // };

  // const age = useMemo(() => calculateAge(birthDateString), [birthDateString]);

  return (
    <div className="patient__profile__container">
      <PageNav title="Profile" />
      <div className="patient__profile__content">
        {/* <PatientCardNum /> */}
        <div className="patient__bio__data">
          <div className="patient__pic__and__details">
            <div className="patient__img__circle">
              <img
                src={patientImg}
                alt="patient profile pic"
                className="patient__profile__pic"
              />
            </div>
            <div className="patient__card__no__and__name">
              <p className="patient__full__name">{userData?.full_name}</p>
              <p className="patient__card__num">Card No: {userData?.card_no}</p>
              <p className="patient__pic__upload__cta">Add Picture</p>
            </div>
          </div>
          <p className="patient__bio__data__label">Phone Number</p>
          <span className="patient__bio__data__span">
            <p className="patient__bio__text">{userData?.phone_no}</p>
            <VerifiedIcon />
          </span>
          <p className="patient__bio__data__label"> Email Address</p>
          <span className="patient__bio__data__span">
            <p className="patient__bio__text">{userData?.email}</p>
            {userData?.email && <VerifiedIcon />}
          </span>
          <p className="patient__bio__data__label"> DOB</p>

          <span
            className="patient__bio__data__span"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <p className="patient__bio__text">{userData.dob}</p>
            <p className="patient__bio__text">{userData.age} </p>
          </span>
          <div className="patient__blood__group__and__genotype">
            <div className="patient__bio__texts__box">
              <p className="patient__bio__data__label"> Blood Group</p>
              <span className="patient__bio__data__span">
                <p className="patient__data__text">O+</p>
              </span>
            </div>
            <div className="patient__bio__texts__box">
              <p className="patient__bio__data__label"> Genotype</p>
              <span className="patient__bio__data__span">
                <p className="patient__data__text">{userData?.genotype}</p>
              </span>
            </div>
          </div>
          <div className="patient__blood__group__and__genotype">
            <div className="patient__bio__texts__box">
              <p className="patient__bio__data__label"> Occupation</p>
              <span className="patient__bio__data__span">
                <p className="patient__data__text">{userData?.occupation}</p>
              </span>
            </div>
            <div className="patient__bio__texts__box">
              <p className="patient__bio__data__label"> Marital Status</p>
              <span className="patient__bio__data__span">
                <p className="patient__data__text">
                  {userData?.marital_status}
                </p>
              </span>
            </div>
          </div>
          <div className="patient__blood__group__and__genotype">
            <div className="patient__bio__texts__box">
              <p className="patient__bio__data__label"> Nationality</p>
              <span className="patient__bio__data__span">
                <p className="patient__data__text">{userData?.nationality}</p>
              </span>
            </div>
            <div className="patient__bio__texts__box">
              <p className="patient__bio__data__label"> State</p>
              <span className="patient__bio__data__span">
                <p className="patient__data__text">{userData?.state}</p>
              </span>
            </div>
          </div>
          <p className="patient__bio__data__label">L.G.A</p>
          <span className="patient__bio__data__span">
            <p className="patient__bio__text">{userData?.lga}</p>
          </span>
          <p className="patient__bio__data__label">Home Address</p>
          <span className="patient__bio__data__span">
            <p className="patient__bio__text">{userData?.address}</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
