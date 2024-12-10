import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import "./moreInfoModal.css";
const MoreAppointmentInfoModal = (props) => {
  const { setShowMoreInfo, data } = props;

  const status = data.data.data.status;

  return (
    <div className="more__info__modal__container">
      <div className="info__modal__content">
        <div className="info__modal__title__and__close">
          <p className="info__title">Admission Details</p>
          <CloseIcon onClick={() => setShowMoreInfo(false)} />
        </div>
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
            <p className="info__text">Dr. {data.data.data.staff.full_name}</p>
          </span>
          <span className="info__content__span">
            <p className="info__label">Date</p>
            <p className="info__text">{data.data.data.date}</p>
          </span>
          <span className="info__content__span">
            <p className="info__label">Time</p>
            <p className="info__text">{data.data.data.time}</p>
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
              {data.data.data.status}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoreAppointmentInfoModal;
