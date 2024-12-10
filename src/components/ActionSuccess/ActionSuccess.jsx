import React from "react";
import { ReactComponent as SuccessIcon } from "../../assets/icons/success-icon.svg";
import { useNavigate } from "react-router-dom";
import "./actionSuccess.css";

const ActionSuccess = ({ url, text }) => {
  const navigate = useNavigate();

  return (
    <div className="action__success__container">
      <SuccessIcon />
      <p className="action__success__icon">{text}</p>
      <button className="action__success__cta" onClick={() => navigate(url)}>
        Okay
      </button>
    </div>
  );
};

export default ActionSuccess;
