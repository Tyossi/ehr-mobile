import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/icons/ehr-down-arrrow.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/ehr-up-arrow.svg";
import "./accordion.css";

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion__container">
      <div
        className="accordion__closed__box"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="accordion__label">Bill from:</div>
        <ArrowDown
          className={`accordion__arrow ${
            isOpen ? "accordion__arrow__open" : ""
          }`}
        />
      </div>
      {isOpen && (
        <div className="accordion__open__details">
          <div className="open__details">
            <p className="open__details__label">Department: </p>
            <p className="open__details__value">Pharmacy</p>
          </div>
          <div className="open__details">
            <p className="open__details__label">Email: </p>
            <p className="open__details__value">pharmacy@gmail.com</p>
          </div>
          <div className="open__details">
            <p className="open__details__label">Phone No: </p>
            <p className="open__details__value">09038475647</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;
