import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import "./moreInfoModal.css";
const MoreInfoModal = (props) => {
  const { setShowMoreInfo, data } = props;

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
          <span className="info__content__span">
            <p className="info__label">Ward</p>
            <p className="info__text">Medical Ward ~ Room 8</p>
          </span>
          <span className="info__content__span">
            <p className="info__label">Medical Staff In Charge</p>
            <p className="info__text">Dr. {data.data.data.staff.full_name}</p>
          </span>
          <span className="info__content__span">
            <p className="info__label">Admission Date</p>
            <p className="info__text">10/09/2024</p>
          </span>
          <span className="info__content__span">
            <p className="info__label">Discharge Date</p>
            <p className="info__text">12/12/2024</p>
          </span>
          <span className="info__status__span">
            <p className="info__status__label">Status</p>
            <p className="info__status">Admitted</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MoreInfoModal;
