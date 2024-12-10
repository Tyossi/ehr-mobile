import React, { useState } from "react";
import { ReactComponent as ShareIcon } from "../../../assets/icons/prescription-share-icon.svg";
import "./prescriptions.css";
import MoreInfoModal from "../../MoreInfoModal/MoreInfoModal";
import PageNav from "../../PageNav/PageNav";

const Prescriptions = (props) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const { prescriptions, investigations } = props;

  console.log({ prescriptions });
  console.log({ investigations });

  const toggleMoreInfo = () => {
    setShowMoreInfo(true);
  };

  return (
    <div className="prescriptions__container">
      <PageNav
        title="Admission"
        showInfoIcon={true}
        onClickFunction={toggleMoreInfo}
      />
      {showMoreInfo && <MoreInfoModal setShowMoreInfo={setShowMoreInfo} />}

      {prescriptions.map((prescription) => (
        <div className="prescription__box">
          <div className="prescription__title__and__share">
            <p className="prescription__title">Prescription</p>
            <ShareIcon />
          </div>
          {prescription.prescription_items.map((prescription_item) => (
            <div className="prescription__text__content__box">
              <p className="medication__name__label">Medication Name</p>
              <p className="medication__name">{prescription_item.drug.name}</p>
              <span className="prescription__data__span">
                <p className="prescription__detail__data__label">
                  Method of intake:
                </p>
                <p className="prescription__detail__data__text">
                  {prescription_item.intake}
                </p>
              </span>
              <span className="prescription__data__span">
                <p className="prescription__detail__data__label">Dosage:</p>
                <p className="prescription__detail__data__text">
                  {prescription_item.dosage}
                </p>
              </span>
              <span className="prescription__data__span">
                <p className="prescription__detail__data__label">Frequency:</p>
                <p className="prescription__detail__data__text">
                  Morning & Night
                </p>
              </span>
              <span
                className="prescription__data__span"
                style={{ marginBottom: "1.6rem" }}
              >
                <p className="prescription__detail__data__label">Days:</p>
                <p className="prescription__detail__data__text">
                  {prescription_item.days}
                </p>
              </span>
              <p className="prescription__note__tag">Note</p>
              <p className="prescription__note">
                {/* In some cases, medical notes may be used to request
                accommodations at work or school due to a medical condition. For
                example, a medical note may recommend modified duties, workplace
                adjustments, or academic accommodations to support a patient's
                health and well-being. */}

                {prescription_item.note}
              </p>
            </div>
          ))}
          <div className="prescription__doc__details">
            <p className="doctor__name">Dr. Usman Adeyemi</p>
            <p className="doctor__signature">Dr. Usman Adeyemi</p>
            <p className="doctor__sign__date">12/02/2024</p>
          </div>
        </div>
      ))}
      <div className="prescription__box">
        <div className="prescription__title__and__share">
          <p className="prescription__title">Investigation</p>
          <ShareIcon />
        </div>
        <div className="prescription__text__content__box">
          <p className="medication__name__label">Investigation Type</p>
          <p className="medication__name">Haematology Request</p>
          <p className="medication__name__label">Investigation</p>
          <p className="medication__name">
            Malaria, MCHC, Hypochromia, Retic Index & Microcytosis
          </p>

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

export default Prescriptions;
