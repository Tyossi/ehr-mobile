import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import { useParams } from "react-router-dom";
import MoreAppointmentInfoModal from "../MoreInfoModal/MoreAppointmentInfo";
import { api } from "../..";
import "./healthConditionDetails.css";
import MoreInfoModal from "../MoreInfoModal/MoreInfoModal";

const getHealthConditionDetails = async (id) => {
  const response = api.get(`/patient/health-condition/${id}`);
  return response;
};

const HealthConditionDetails = () => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { id } = useParams();

  //   const { data, isLoading, error } = useQuery({
  //     queryKey: [id, "healthConditionId"],
  //     queryFn: () => getHealthConditionDetails(id),
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
        title="Health Condition Details"
        showInfoIcon={true}
        onClickFunction={toggleMoreInfo}
      />
      {showMoreInfo && (
        <MoreInfoModal
          isOpen={showMoreInfo}
          onClose={() => setShowMoreInfo(false)}
          title="Health Condition Details"
        >
          <MoreAppointmentInfoModal />
        </MoreInfoModal>
      )}
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
        <div className="health__condition__title__box">
          <p className="health__condition__title__label">Health Condition:</p>
          <p className="health__condition__title">Maleria & Typhoid</p>
        </div>
        <p className="prescription__note__tag">Note</p>
        <p className="prescription__note" style={{ marginBottom: "1.6rem" }}>
          In some cases, medical notes may be used to request accommodations at
          work or school due to a medical condition. For example, a medical note
          may recommend modified duties, workplace adjustments, or academic
          accommodations to support a patient's health and well-being.
        </p>
        <div className="prescription__doc__details">
          <p className="doctor__name">Dr. Usman Adeyemi</p>
          <p className="doctor__signature">Dr. Usman Adeyemi</p>
          <p className="doctor__sign__date">12/02/2024</p>
        </div>
      </div>
    </div>
  );
};

export default HealthConditionDetails;
