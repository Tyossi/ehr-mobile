import React from "react";
import { useQuery } from "@tanstack/react-query";
import { api } from "../../..";
import { useNavigate } from "react-router-dom";
import "./admissionHistory.css";

// const getSingleAdminssion = async (id) => {
//   const response = api.get(`/patient/hospitalizations/${id}`);
//   return response;
// };

const AdmissionHistory = ({ data, setShowPrescriptions, setAdmissionId }) => {
  // const { data, isLoading, error } = useQuery({
  //   queryKey: [id, "appointmentId"],
  //   queryFn: () => getSingleAppointment(id),
  // });

  // const { id } = useParams();

  const navigate = useNavigate();

  console.log({ data });

  const handleAdmissionClick = (id) => {
    setAdmissionId(id);
    // navigate(`/panel/prescriptions/${id}`);
    // setTimeout(() => {}, 1000);
    setShowPrescriptions(true);
  };
  return (
    <div className="admission__tabs">
      {data?.data?.map((data) => {
        return (
          <div
            className="admission__tab"
            // onClick={() => setShowPrescriptions(true)}
            // onClick={() => navigate(`/panel/prescriptions/${data.id}`)}
            onClick={() => handleAdmissionClick(data.id)}
          >
            <div className="admission__diagnosis__and__status">
              <p className="admission__diagnosis">{data?.notes}</p>
              <p className="admission__admitted__status">{data?.status}</p>
            </div>
            <div className="admission__date__and__ward">
              <div className="admission__detail__box">
                <p className="admission__detail__label"> Date</p>
                <p className="admission__detail__text">
                  {data?.admission_date}
                </p>
              </div>
              <div className="admission__detail__box">
                <p className="admission__detail__label">Ward</p>
                <p className="admission__detail__text">{data?.ward?.name}</p>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className="admission__tab">
        <div className="admission__diagnosis__and__status">
          <p className="admission__diagnosis">Malaria & Typhoid</p>
          <p className="admission__discharged__status">Discharged</p>
        </div>
        <div className="admission__date__and__ward">
          <div className="admission__detail__box">
            <p className="admission__detail__label">Admission Date</p>
            <p className="admission__detail__text">10/09/2024</p>
          </div>
          <div className="admission__detail__box">
            <p className="admission__detail__label">Ward</p>
            <p className="admission__detail__text">Medical Ward Room 3</p>
          </div>
        </div>
      </div>
      <div className="admission__tab">
        <div className="admission__diagnosis__and__status">
          <p className="admission__diagnosis">Malaria & Typhoid</p>
          <p className="admission__discharged__status">Discharged</p>
        </div>
        <div className="admission__date__and__ward">
          <div className="admission__detail__box">
            <p className="admission__detail__label">Admission Date</p>
            <p className="admission__detail__text">10/09/2024</p>
          </div>
          <div className="admission__detail__box">
            <p className="admission__detail__label">Ward</p>
            <p className="admission__detail__text">Medical Ward Room 3</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdmissionHistory;
