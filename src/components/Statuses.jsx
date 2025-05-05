import React from "react";

const Statuses = () => {
  const status = "completed";

  return (
    <div
      className="appointment__status__and__icons"
      style={{ marginBottom: status === "completed" ? "2rem" : "15.2rem" }}
    >
      <span className="appointment__status__span">
        <p className="appointment__status__label">Status</p>
        <p
          className="appointment__status__text"
          style={{
            background: status === "treated" ? "#F6FEF9" : "#FFFAEB",
            color: status === "treated" ? "#027A48" : "#B54708",
          }}
        >
          {/* {data.data.data.status} */}
          Ongoing
        </p>
      </span>
    </div>
  );
};

export default Statuses;
