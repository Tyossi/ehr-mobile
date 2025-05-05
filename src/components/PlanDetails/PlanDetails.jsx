import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import { useParams } from "react-router-dom";
import MoreAppointmentInfoModal from "../MoreInfoModal/MoreAppointmentInfo";
import { api } from "../..";
// import "./healthConditionDetails.css";

const getPlan = async (id) => {
  const response = api.get(`/patient/health-condition/${id}`);
  return response;
};

const PlanDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { id } = useParams();

  //   const { data, isLoading, error } = useQuery({
  //     queryKey: [id, "planId"],
  //     queryFn: () => getPlan(id),
  //   });

  //   if (isLoading) return <p>Loading</p>;

  //   if (error) return <p>Error: {error.message}</p>;

  const toggleMoreInfo = () => {
    setShowMoreInfo(true);
  };

  const status = "completed";
  //   const status = data.data.data.status;

  return (
    <div className="health__condition__details__container">
      {" "}
      <PageNav
        title="Plan Details"
        showInfoIcon={true}
        onClickFunction={toggleMoreInfo}
      />
      {/* {showMoreInfo && (
        <MoreAppointmentInfoModal
          setShowMoreInfo={setShowMoreInfo}
          title="Health Condition Details"
          //   data={data}
        />
      )} */}
      <div
        className="appointment__status__and__icons"
        style={{ marginBottom: status === "completed" ? "2rem" : "15.2rem" }}
      >
        <span className="appointment__status__span">
          <p className="appointment__status__label">Status</p>
          <p
            className="appointment__status__text"
            style={{
              background: status === "treated" ? "#F6FEF9" : "#FFFAEB",
              color: status === "treated" ? "#027A48" : "#B54708",
            }}
          >
            {/* {data.data.data.status} */}
            Ongoing
          </p>
        </span>
      </div>
      <div className="health__condition-details">
        {/* <div className="health__condition__title__box">
          <p className="health__condition__title__label">Health Condition:</p>
          <p className="health__condition__title">Maleria & Typhoid</p>
        </div> */}
        <p className="health__condition-label" style={{ marginBottom: "1rem" }}>
          Plan Name
        </p>

        <p
          className="investigation__type__text"
          style={{ marginBottom: "1rem" }}
        >
          Weight Loss
        </p>

        <p className="prescription__note__tag">Description</p>
        <p className="prescription__note" style={{ marginBottom: "1.6rem" }}>
          In some cases, medical notes may be used to request accommodations at
          work or school due to a medical condition. For example, a medical note
          may recommend modified duties, workplace adjustments, or academic
          accommodations to support a patient's health and well-being.
        </p>
        <div className="prescription__text__content__box">
          <p className="health__condition-label">Prescription </p>
          <p className="medication__name">Augmentin 625 Duo Tablet</p>
          {/* <span className="prescription__data__span"> */}
          <p className="health__condition-label">Start Date</p>
          <p
            className="prescription__detail__data__text"
            style={{ marginBottom: ".8rem" }}
          >
            Wed, 7 Feb 2024
          </p>
          {/* </span> */}
          <p className="health__condition-label">Start Date</p>
          <p
            className="prescription__detail__data__text"
            style={{ marginBottom: ".8rem" }}
          >
            Wed, 7 Feb 2024{" "}
          </p>
          <span className="prescription__data__span">
            <p className="health__condition-label">Frequency</p>
            <p className="prescription__detail__data__text">Morning & Night</p>
          </span>
          <span
            className="prescription__data__span"
            style={{ marginBottom: "1.6rem" }}
          >
            {/* <p className="prescription__detail__data__label">Days:</p>
            <p className="prescription__detail__data__text">dnskjd </p> */}
          </span>
          <p className="prescription__note__tag">Note</p>
          <p className="prescription__note">
            In some cases, medical notes may be used to request accommodations
            at work or school due to a medical condition. For example, a medical
            note may recommend modified duties, workplace adjustments, or
            academic accommodations to support a patient's health and
            well-being.
          </p>
        </div>
        <div className="prescription__doc__details">
          <p className="doctor__name">Dr. Usman Adeyemi</p>
          <p className="doctor__signature">Dr. Usman Adeyemi</p>
          <p className="doctor__sign__date">12/02/2024</p>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
