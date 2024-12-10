import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import { ReactComponent as ChatIcon } from "../../assets/icons/chat-icon.svg";
import { ReactComponent as CamIcon } from "../../assets/icons/cam-icon.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone-icon.svg";
import { ReactComponent as UpcomingIcon } from "../../assets/icons/upcoming-icon.svg";
import { ReactComponent as NoCommentIcon } from "../../assets/icons/no-comment-icon.svg";
import { ReactComponent as SuccessIcon } from "../../assets/icons/success-icon.svg";
import { ReactComponent as WarningIcon } from "../../assets/icons/warning-icon.svg";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import MoreInfoModal from "../MoreInfoModal/MoreInfoModal";
import { useParams } from "react-router-dom";
import "./appointmentDetails.css";
import { useQuery } from "@tanstack/react-query";
import { api } from "../..";
import Prescriptions from "../Admission/Prescriptions/Prescriptions";
import MoreAppointmentInfoModal from "../MoreInfoModal/MoreAppointmentInfo";

const getSingleAppointment = async (id) => {
  const response = api.get(`/patient/appointments/${id}`);
  return response;
};

const AppointmentDetails = () => {
  const [showCancel, setShowCancel] = useState(false);
  const [showCancelSuccess, setShowCancelSuccess] = useState(false);
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const { id } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: [id, "appointmentId"],
    queryFn: () => getSingleAppointment(id),
  });

  const toggleMoreInfo = () => {
    setShowMoreInfo(true);
  };

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;

  console.log({ data });

  // const status = "upcoming";
  const status = data.data.data.status;

  return (
    <div className="appointment__details__container">
      <PageNav
        title="Appointment Details"
        showInfoIcon={true}
        onClickFunction={toggleMoreInfo}
      />
      {showMoreInfo && (
        <MoreAppointmentInfoModal
          setShowMoreInfo={setShowMoreInfo}
          data={data}
        />
      )}
      <div className="appointment__details__content">
        <div
          className="appointment__status__and__icons"
          style={{ marginBottom: status === "completed" ? "5rem" : "15.2rem" }}
        >
          <span className="appointment__status__span">
            <p className="appointment__status__label">Status</p>
            <p
              className="appointment__status__text"
              style={{
                background: status === "completed" ? "#F6FEF9" : "#FFFAEB",
                color: status === "completed" ? "#027A48" : "#B54708",
              }}
            >
              {data.data.data.status}
            </p>
          </span>
          <span className="appointment__icons">
            <ChatIcon />
            <CamIcon />
            <PhoneIcon />
          </span>
        </div>
        {status === "upcoming" ? (
          <div className="appointment__status__icon__and__text">
            <div className="appointment__state__box">
              <UpcomingIcon />
              <p className="appointment__state__text">Appointment Begins in:</p>
              <p className="countdown__time">02 : 12 : 12</p>
              <button
                className="cancel__appointment__cta"
                onClick={() => setShowCancel(true)}
              >
                Cancel
              </button>
            </div>
            {/* <div className="appointment__state__box">
            <NoCommentIcon />
            <p className="appointment__state__text">
              No Comments from Your Health Practitioner Yet
            </p>
          </div> */}
          </div>
        ) : (
          ""
        )}
      </div>
      {status === "completed" ? (
        <Prescriptions
          prescriptions={data.data.data.prescriptions}
          investigations={data.data.data.examinations}
        />
      ) : (
        ""
      )}
      {showCancel && (
        <div className="appointment__booking__box__container">
          <div className="appointment__booking__form__box">
            <div className="cancel__appointment__containter">
              <WarningIcon />
              <p className="cancel__warning__text">
                You are about to cancel this appointment
              </p>
              <div className="cancel__window__ctas">
                <button
                  className="cancel__back__btn"
                  onClick={() => setShowCancel(false)}
                >
                  Back
                </button>
                <button
                  className="proceed__cancel__btn"
                  onClick={() => setShowCancelSuccess(true)}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showCancelSuccess && (
        <ActionSuccess
          url="/panel/appointment"
          text="Event Canceled successfully"
        />
      )}
    </div>
  );
};

export default AppointmentDetails;
