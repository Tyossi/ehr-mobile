import React, { useState } from "react";
import PageNav from "../PageNav/PageNav";
import AdmissionHistory from "./AdmissionHistory/AdmissionHistory";
import Prescriptions from "./Prescriptions/Prescriptions";
import "./admission.css";

const Admission = () => {
  const [showPrescriptions, setShowPrescriptions] = useState(false);
  const [prescriptionId, setPrescriptionId] = useState("");
  return (
    <div className="admission__container">
      <PageNav title="Admission" />
      <div className="admission__content">
        {showPrescriptions ? (
          <Prescriptions setShowPrescriptions={setShowPrescriptions} />
        ) : (
          <AdmissionHistory
            setPrescriptionId={setPrescriptionId}
            setShowPrescriptions={setShowPrescriptions}
          />
        )}
      </div>
    </div>
  );
};

export default Admission;
