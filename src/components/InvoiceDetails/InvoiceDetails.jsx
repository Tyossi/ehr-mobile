import React from "react";
import Statuses from "../Statuses";
import PageNav from "../PageNav/PageNav";
import Accordion from "../Accordion/Accordion";
import "../Invoice/invoice.css";

const InvoiceDetails = () => {
  return (
    <div className="health__condition__details__container">
      <PageNav
        title="Invoice Details"
        showInfoIcon={true}
        // onClickFunction={toggleMoreInfo}
      />
      <Statuses />

      <div className="invoice__details__content">
        <div className="invoice__details__texts">
          <p className="invoice__details__label">Invoice NO:</p>
          <p className="invoice__details__value">INV103994</p>
        </div>
        <div className="invoice__details__texts">
          <p className="invoice__details__label">Issued Date:</p>
          <p className="invoice__details__value">Jun 25, 2025</p>
        </div>
        <div className="invoice__details__texts">
          <p className="invoice__details__label">Date Due:</p>
          <p className="invoice__details__value">Sept 4, 2025</p>
        </div>
      </div>
      <div className="invoice__accordion">
        <Accordion />
        <Accordion />
      </div>
      <div className="book__appointment__cta__box">
        <button
          className="book__appointment__cta"
          // onClick={() => setShowBookAppointment(true)}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default InvoiceDetails;
