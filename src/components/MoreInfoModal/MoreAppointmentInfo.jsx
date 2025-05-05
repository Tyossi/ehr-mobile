import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import "./moreInfoModal.css";
const MoreAppointmentInfoModal = ({ data }) => {
  const status = data?.data?.data?.status;

  return (
    <div className="info__content__box">
      <span className="info__content__span">
        <p className="info__label">Medical Condition</p>
        <p className="info__text">Malaria & Typhoid</p>
      </span>
      {/* <span className="info__content__span">
            <p className="info__label">Ward</p>
            <p className="info__text">Medical Ward ~ Room 8</p>
          </span> */}
      <span className="info__content__span">
        <p className="info__label">Medical Staff In Charge</p>
        <p className="info__text">Dr. {data?.data?.data?.staff.full_name}</p>
      </span>
      <span className="info__content__span">
        <p className="info__label">Date</p>
        <p className="info__text">{data?.data?.data?.date}</p>
      </span>
      <span className="info__content__span">
        <p className="info__label">Time</p>
        <p className="info__text">{data?.data?.data?.time}</p>
      </span>
      <span className="info__status__span">
        <p className="info__status__label">Status</p>
        <p
          className="info__status"
          style={{
            background: status === "completed" ? "#F6FEF9" : "#FFFAEB",
            color: status === "completed" ? "#027A48" : "#B54708",
          }}
        >
          {data?.data?.data?.status}
        </p>
      </span>
    </div>
  );
};

export default MoreAppointmentInfoModal;
