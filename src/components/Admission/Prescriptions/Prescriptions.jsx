import React, { useState } from "react";
import { ReactComponent as ShareIcon } from "../../../assets/icons/prescription-share-icon.svg";
import "./prescriptions.css";
import MoreInfoModal from "../../MoreInfoModal/MoreInfoModal";
import PageNav from "../../PageNav/PageNav";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../..";
import { useParams } from "react-router-dom";
import MoreAppointmentInfoModal from "../../MoreInfoModal/MoreAppointmentInfo";
import AdmissionModal from "../../InfoModals/AdmissionModal";

const getSingleAdminssion = async (id) => {
  const response = api.get(`/patient/hospitalizations/${id}`);
  return response;
};

const Prescriptions = ({ admissionId }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);
  const [animationType, setAnimationType] = useState("ease");

  // const { prescriptions, investigations } = props;

  const id = admissionId;
  // const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: [id, "admissionId"],
    queryFn: () => getSingleAdminssion(id),
  });

  const toggleMoreInfo = () => {
    setShowMoreInfo(true);
  };

  if (isLoading) return <p> Loading... </p>;

  if (error) return <p>Error:{error.message}</p>;

  const openDrawer = () => setShowMoreInfo(true);
  const closeDrawer = () => setShowMoreInfo(!showMoreInfo);

  return (
    <div className="prescriptions__container">
      <PageNav
        title="Admission"
        showInfoIcon={true}
        onClickFunction={toggleMoreInfo}
      />
      <MoreInfoModal
        isOpen={showMoreInfo}
        onClose={closeDrawer}
        title="More Information"
      >
        <AdmissionModal data={data} />
      </MoreInfoModal>

      {data?.data?.data?.prescriptions?.map((prescription) => (
        <div className="prescription__box">
          <div className="prescription__title__and__share">
            <p className="prescription__title">Prescription</p>
            <ShareIcon />
          </div>
          {prescription.prescription_items?.map((prescription_item) => (
            <div className="prescription__text__content__box">
              <p className="medication__name__label">Medication Name</p>
              <p className="medication__name">
                {/* {prescription_item.drug.name || ""} */}
              </p>
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
              {prescription_item.notes && (
                <>
                  <p className="prescription__note__tag">Note</p>

                  <p className="prescription__note">
                    {/* In some cases, medical notes may be used to request
                accommodations at work or school due to a medical condition. For
                example, a medical note may recommend modified duties, workplace
                adjustments, or academic accommodations to support a patient's
                health and well-being. */}

                    {prescription_item.notes || ""}
                  </p>
                </>
              )}
            </div>
          ))}
          <div className="prescription__doc__details">
            <p className="doctor__name"></p>
            <p className="doctor__signature">
              {data.data.data.staff.job_title.name === "Doctor" ? "Dr" : ""}.{" "}
              {data.data.data.staff.full_name}
            </p>
            <p className="doctor__sign__date">
              {data.data.data.created_at.substr(0, 10)}
            </p>
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
