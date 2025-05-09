import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import { api } from "../..";
import { useQuery } from "@tanstack/react-query";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./appointment.css";
import MoreInfoModal from "../MoreInfoModal/MoreInfoModal";
import BookAppointment from "../BookAppointment/BookAppointment";

const getPatientAppointments = async (patientId) => {
  const response = await api.get(
    `/patient/appointments?patient_id=${patientId}&appointment_id=402`
  );
  return response.data;
};

const Appointment = () => {
  // const patientId = 352;
  const patientId = localStorage.getItem("userId");
  const [showBookAppointment, setShowBookAppointment] = useState(false);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [currentData, setCurrentData] = useState("pending");
  const [appointments, setAppointments] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["userId", patientId],
    queryFn: () => getPatientAppointments(patientId),
  });

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setShowBookingSuccess(true);
  // };

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;
  const toggleMoreInfo = () => {
    setShowBookAppointment(true);
  };
  return (
    <div className="appointment__container">
      <PageNav title="Appointment" onClickFunction={toggleMoreInfo} />
      <div className="appointment__content">
        <div className="content__switch__container">
          <div className="content__switches">
            <p
              className={
                currentData === "upcoming"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("upcoming")}
            >
              Upcoming
            </p>
            <p
              className={
                currentData === "pending"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("pending")}
            >
              Pending
            </p>
            <p
              className={
                currentData === "completed"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("completed")}
            >
              Completed
            </p>
            <p
              className={
                currentData === "canceled"
                  ? "content__switch content__switch__active"
                  : " content__switch content__switch__inactive"
              }
              onClick={() => setCurrentData("canceled")}
            >
              Canceled
            </p>
          </div>
        </div>
        {data.data.data
          .filter((appointment) => appointment.status === currentData)
          .map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
      </div>
      <div className="book__appointment__cta__box">
        <button
          className="book__appointment__cta"
          onClick={() => setShowBookAppointment(true)}
        >
          Book Appointment
        </button>
      </div>
      {/* {showBookAppointment && ( */}
      {/* <div className="appointment__booking__box__container">
          <div className="appointment__booking__form__box">
            <span className="appointment__form__title__and__close">
              <p className="appointment__form__title">Book Appointment</p>
              <CloseIcon onClick={() => setShowBookAppointment(false)} />
            </span> */}
      <MoreInfoModal
        isOpen={showBookAppointment}
        onClose={() => setShowBookAppointment(false)}
        title="Book Appointment"
        height="100%"
        noBorderRadius
      >
        <BookAppointment setShowBookingSuccess={setShowBookingSuccess} />
        {/* </div> */}
        {showBookingSuccess && (
          <ActionSuccess
            url="/panel/appointment"
            text="Appointment booked successfully kindly wait for approval"
          />
        )}
        {/* </div> */}
      </MoreInfoModal>

      {/* )} */}
    </div>
  );
};

export default Appointment;
