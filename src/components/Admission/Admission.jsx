import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import AdmissionHistory from "./AdmissionHistory/AdmissionHistory";
import Prescriptions from "./Prescriptions/Prescriptions";
import { useQuery } from "@tanstack/react-query";
import { api } from "../..";
import "./admission.css";

const getAdmissions = async (patientId) => {
  const response = await api.get(
    `/patient/hospitalizations?patient_id=${patientId}`
  );

  return response.data;
};

const Admission = () => {
  const patiientId = localStorage.getItem("userId");
  const { data, error, isLoading } = useQuery({
    queryKey: ["admissions", patiientId],
    queryFn: () => getAdmissions(patiientId),
  });

  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [admissionId, setAdmissionId] = useState("");
  // const [showMoreInfo, setShowMoreInfo] = useState(false);

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;

  console.log({ data });

  console.log({ admissionId });

  return (
    <div className="admission__container">
      <PageNav title="Admission" />
      <div className="admission__content">
        {showPrescriptions ? (
          <Prescriptions
            setShowPrescriptions={setShowPrescriptions}
            admissionId={admissionId}
            // setShowMoreInfo={setShowMoreInfo}
          />
        ) : (
          <AdmissionHistory
            data={data?.data}
            // setPrescriptionId={setPrescriptionId}
            setShowPrescriptions={setShowPrescriptions}
            setAdmissionId={setAdmissionId}
          />
        )}
      </div>
    </div>
  );
};

export default Admission;
