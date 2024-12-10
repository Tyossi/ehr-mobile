import React from "react";
import patientImg from "../../assets/images/patient-pp.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell-icon.svg";
import { ReactComponent as CalendarIcon } from "../../assets/icons/calendar-icon.svg";
import { ReactComponent as TimeIcon } from "../../assets/icons/time-icon.svg";
import { Link } from "react-router-dom";
import "./appointmentCard.css";

const AppointmentCard = ({ appointment }) => {
  console.log({ appointment });

  const date = new Date(appointment.date);
  const options = {
    weekday: "short",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = date.toLocaleDateString("en-NG", options);

  const time = appointment.time; // 24-hour format
  // Parse the time as a Date object assuming it's in UTC
  const dateTwo = new Date(`1970-01-01T${time}Z`); // Append 'Z' to indicate UTC time

  // Format the time in Nigerian timezone (Africa/Lagos)
  const optionsTwo = {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
    timeZone: "Africa/Lagos",
  };

  const formattedTime = new Intl.DateTimeFormat("en-NG", optionsTwo).format(
    dateTwo
  );

  return (
    <Link to={`/panel/appointment-details/${appointment.id}`}>
      <div className="next__appointment__box">
        <p className="next__appointment__reason">Reason: Malaria & Typhoid</p>
        <div className="appointment__doc__and__date">
          <img
            src={patientImg}
            alt="patient's avatar"
            className="profile__img"
          />
          <div className="appointment__name__and__date">
            <p className="appointment__doc__name">
              {" "}
              {appointment.staff.job_title.name === "Doctor" ? "Dr." : " "}{" "}
              {appointment.staff.full_name}
            </p>
            <div className="appointment__date__and__time">
              <span style={{ display: "flex", gap: ".5rem" }}>
                <CalendarIcon />
                <p className="appointment__date">{formattedDate}</p>
              </span>
              <span style={{ display: "flex", gap: ".5rem" }}>
                {" "}
                <TimeIcon />
                <p className="appointment__time">{formattedTime}</p>
              </span>
            </div>
          </div>
        </div>
        <span className="appointment__type__span">
          <p className="appointment__type__label">Appointment Type:</p>
          <p className="appointment__type__text">In Office</p>
        </span>
      </div>
    </Link>
  );
};

export default AppointmentCard;
