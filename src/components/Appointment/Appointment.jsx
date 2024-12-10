import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import ActionSuccess from "../ActionSuccess/ActionSuccess";
import { api } from "../..";
import { useQuery } from "@tanstack/react-query";
import "./appointment.css";

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
  const [showBookingSuccess, setShowBookinSuccess] = useState(false);
  const [currentData, setCurrentData] = useState("completed");
  const [appointments, setAppointments] = useState([]);

  const { data, error, isLoading } = useQuery({
    queryKey: ["userId", patientId],
    queryFn: () => getPatientAppointments(patientId),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowBookinSuccess(true);
  };

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;

  console.log({ data });

  return (
    <div className="appointment__container">
      <PageNav title="Appointment" />
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
      {showBookAppointment && (
        <div className="appointment__booking__box__container">
          <div className="appointment__booking__form__box">
            <span className="appointment__form__title__and__close">
              <p className="appointment__form__title">Book Appointment</p>
              <CloseIcon onClick={() => setShowBookAppointment(false)} />
            </span>
            <form
              action="submit"
              className="appointment__booking__form"
              onSubmit={handleSubmit}
            >
              <label
                htmlFor="reasonForAppointment"
                className="appointment__input__label"
              >
                Reason For Appointment
              </label>
              <select
                type="text"
                className="appointment__booking__input"
                id="reasonForAppointment"
              >
                <option value="Select" className="appointment__booking__option">
                  Select
                </option>
              </select>

              <label
                htmlFor="appointmentDate"
                className="appointment__input__label"
              >
                Scheduled
              </label>
              <input
                type="date"
                className="appointment__booking__input"
                id="appointmentDate"
              />

              <label
                htmlFor="appointmentTime"
                className="appointment__input__label"
              >
                Time
              </label>
              <select
                type="time"
                className="appointment__booking__input"
                id="time"
              >
                <option
                  value="00:00 AM-00:00 AM"
                  className="appointment__booking__option"
                >
                  00:00 AM-00:00 AM
                </option>
              </select>
              <span className="appointment__type__span">
                <label
                  htmlFor="appointmentType"
                  className="appointment__input__label"
                  style={{ marginBottom: "0rem" }}
                >
                  Appointment Type:
                </label>
                <input
                  type="radio"
                  id="office"
                  name="office"
                  value="office"
                  className="appointment__check__box"
                />
                <label
                  htmlFor="office"
                  className="appointment__input__label"
                  style={{ marginBottom: "0rem" }}
                >
                  Office
                </label>
                <input
                  type="radio"
                  value="virtual"
                  name="virtual"
                  id="virtual"
                  className="appointment__check__box"
                />
                <label
                  htmlFor="virtual"
                  className="appointment__input__label"
                  style={{ marginBottom: "0rem" }}
                >
                  Virtual
                </label>
              </span>
              <label
                htmlFor="appointmentNote"
                className="appointment__input__label"
              >
                Note
              </label>
              <textarea
                name="note"
                id="appointmentNote"
                className="appointment__note__input"
              ></textarea>

              <button className="book__appointment__cta">
                Book Appointment
              </button>
            </form>
          </div>
          {showBookingSuccess && (
            <ActionSuccess
              url="/panel/appointment"
              text="Appointment booked successfully kindly wait for approval"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Appointment;
