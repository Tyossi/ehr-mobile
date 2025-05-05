import React from "react";

const AdmissionModal = (props) => {
  const { data } = props;

  const status = data?.data?.data?.status;

  return (
    <>
      <div className="info__content__box">
        <span className="info__content__span">
          <p className="info__label">Medical Condition</p>
          {data.data.data.health_conditions.map((condition) => {
            return <p className="info__text">{condition.condition}</p>;
          })}
        </span>
        <span className="info__content__span">
          <p className="info__label">Ward</p>
          <p className="info__text">{data.data.data.ward.name}</p>
        </span>
        <span className="info__content__span">
          <p className="info__label">Medical Staff In Charge</p>
          <p className="info__text">Dr. {data.data.data.staff.full_name}</p>
        </span>
        <span className="info__content__span">
          <p className="info__label">Admission Date</p>
          <p className="info__text">{data.data.data.admission_date}</p>
        </span>
        <span className="info__content__span">
          <p className="info__label">Discharge Date</p>
          <p className="info__text">12/12/2024</p>
        </span>
        <span className="info__status__span">
          <p className="info__status__label">Status</p>
          <p
            className="info__status"
            style={{
              background: status === "Admitted" ? "#F2F4F7" : "#F6FEF9",
              color: status === "Admitted" ? "#344054" : "#027A48",
            }}
          >
            {data?.data?.data?.status}
          </p>
        </span>
      </div>
    </>
  );
};

export default AdmissionModal;
