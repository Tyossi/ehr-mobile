/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { useQuery } from "@tanstack/react-query";
import { ReactComponent as HospitalIcon } from "../../assets/icons/home-icon.svg";
import { ReactComponent as HomeIcon } from "../../assets/icons/hospital-icon.svg";
import { ReactComponent as VirtualIcon } from "../../assets/icons/virtual-icon.svg";
import { ReactComponent as LeftIcon } from "../../assets/icons/left-btn.svg";
import { ReactComponent as RightIcon } from "../../assets/icons/right-btn.svg";
import SearchableSelect from "../SearchableSelect";
import { useUserDatacontext } from "../../contexts/UserDataContent";
import { api } from "../..";
import "./bookAppointment.css";

const getDoctors = async (facilityId) => {
  const response = await api.get(`/patient/doctors/?facility_id=${facilityId}`);
  return response.data;
};

const options = [
  { value: "General Checkup", label: "General Checkup" },
  { value: "Dental Checkup", label: "Dental Checkup" },
  { value: "Eye Checkup", label: "Eye Checkup" },
  { value: "Skin Checkup", label: "Skin Checkup" },
  { value: "Other", label: "Other" },
];

const timeSlots = [
  { value: "8:00 am", label: "8:00 am" },
  { value: "9:00 am", label: "9:00 am" },
  { value: "10:00 am", label: "10:00 am" },
  { value: "11:00 am", label: "11:00 am" },
  { value: "12:00 pm", label: "12:00 pm" },
  { value: "1:00 pm", label: "1:00 pm" },
  { value: "2:00 pm", label: "2:00 pm" },
  { value: "3:00 pm", label: "3:00 pm" },
];

const BookAppointment = (setShowBookinSuccess) => {
  const [selectedAppointmentType, setSelectedAppointmentType] =
    useState("inHospital");
  const [sepcialists, setSpecialists] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [availableDateSlots, setAvailableDateSlots] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const { userData } = useUserDatacontext();
  const facilityId = userData?.facility_id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["getSpecialists", facilityId],
    queryFn: () => getDoctors(facilityId),
  });

  console.log({ data });

  const validationSchema = yup.object().shape({
    reasonForAppointment: yup.string().required("This field is required"),
    // appointmentDate: yup.date().required("Required"),
    specialist: yup.string().required("Required"),
    appointmentType: yup.string().required("Required"),
    // appointmentNote: yup.string().required("Required"),
    // appointmentTime: yup.string().required("Required"),
    // appointmentNote: yup.string().required("Required"),
  });

  const {
    values,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    setFieldValue,
  } = useFormik({
    validationSchema,
    enableReinitialize: true,
    initialValues: {
      reasonForAppointment: "",
      specialist: "",
      appointmentType: "",
    },
    onSubmit: (values) => {
      console.log(values);
      window.alert("Booking Successful");
      //   setShowBookinSuccess(true);
    },
  });

  useEffect(() => {
    if (data) {
      const options = data.data.map((doctor) => ({
        value: doctor.id,
        label: `${doctor.first_name} ${doctor.last_name}`,
      }));
      // setFieldValue("specialist", options);
      setSpecialists(options);
    }
  }, [data]);

  // useEffect(() => {
  //   setAvailableTimeSlots(selectedSpecialist.availabilities);
  // }, [selectedSpecialist]);

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;
  console.log({ values });
  console.log({ data });

  return (
    <form
      action="submit"
      className="appointment__booking__form"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor="appointmentType"
        className="appointment__input__label"
        style={{ marginBottom: "1rem" }}
      >
        Appointment Type:
      </label>
      <div className="appointment__options">
        <div
          className={`appointment__option ${
            selectedAppointmentType === "inHospital" ? "slot__active" : ""
          }`}
          onClick={() => {
            setSelectedAppointmentType("inHospital");
          }}
        >
          <HospitalIcon />{" "}
          <p className="appointment__option__text">In-Hospital</p>
        </div>
        <div
          className={`appointment__option ${
            selectedAppointmentType === "virtual" ? "slot__active" : ""
          }`}
          onClick={() => {
            setSelectedAppointmentType("virtual");
          }}
        >
          <VirtualIcon /> <p className="appointment__option__text">Virtual</p>
        </div>
        <div
          className={`appointment__option ${
            selectedAppointmentType === "homeVisits" ? "slot__active" : ""
          }`}
          onClick={() => {
            setSelectedAppointmentType("homeVisits");
          }}
        >
          <HomeIcon /> <p className="appointment__option__text">Home Visits</p>
        </div>
      </div>

      <label
        htmlFor="reasonForAppointment"
        className="appointment__input__label"
      >
        Reason For Appointment
      </label>
      <SearchableSelect
        name="reasonForAppointment"
        options={options}
        value={values.reasonForAppointment}
        onChange={(value) => setFieldValue("reasonForAppointment", value)}
        handleBlur={handleBlur}
        classNamePrefix="select"
      />
      {touched.reasonForAppointment && errors.reasonForAppointment && (
        <div className="text-red-600 text-sm mt-1">
          {errors.reasonForAppointment}
        </div>
      )}
      {/* <select
        type="text"
        className="appointment__booking__input"
        id="reasonForAppointment"
      >
        <option value="Select" className="appointment__booking__option">
          Select
        </option>
      </select> */}

      <label htmlFor="appointmentDate" className="appointment__input__label">
        Find the right speciialist
      </label>
      <SearchableSelect
        name="reasonForAppointment"
        options={sepcialists}
        value={values.specialist}
        onChange={(value) => setFieldValue("specialist", value)}
        handleBlur={handleBlur}
        classNamePrefix="select"
      />
      {touched.specialist && errors.specialist && (
        <div className="text-red-600 text-sm mt-1">{errors.specialist}</div>
      )}

      <div className="available__date__container">
        <div className="date__slot__control">
          <p className="available__date__text">Date</p>
          <div className="date__selection__ctas">
            <LeftIcon />
            <p className="date__month">Mar</p>
            <RightIcon />
          </div>
        </div>
        <div className="date__slots__container">
          <div className="date__slots">
            <div className="date__slot slot__active">
              <p className="date__slot__day">Today</p>
              <p className="date__slot__num">12</p>
            </div>
            <div className="date__slot">
              <p className="date__slot__day">Tue</p>
              <p className="date__slot__num">12</p>
            </div>
            <div className="date__slot">
              <p className="date__slot__day">Wed</p>
              <p className="date__slot__num">12</p>
            </div>
            <div className="date__slot">
              <p className="date__slot__day">Thu</p>
              <p className="date__slot__num">12</p>
            </div>
            <div className="date__slot">
              <p className="date__slot__day">Fri</p>
              <p className="date__slot__num">12</p>
            </div>
            <div className="date__slot">
              <p className="date__slot__day">Sat</p>
              <p className="date__slot__num">12</p>
            </div>
          </div>
        </div>
      </div>

      <div className="available__date__container">
        <div className="date__slot__control">
          <p className="available__date__text">Time</p>
          <div className="date__selection__ctas">
            <LeftIcon />
            <p className="date__month">Morning</p>
            <RightIcon />
          </div>
        </div>
        <div className="date__slots__container">
          <div className="date__slots">
            {timeSlots.map((slot) => (
              <div
                className={`time__slot ${
                  selectedTime === slot.value ? "slot__active" : ""
                }`}
                key={slot.value}
                onClick={() => setSelectedTime(slot.value)}
              >
                <p className="time__slot__text">{slot.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <label htmlFor="appointmentNote" className="appointment__input__label">
        Note
      </label>
      <textarea
        name="note"
        id="appointmentNote"
        className="appointment__note__input"
      ></textarea>

      <button className="book__appointment__cta" type="submit">
        Book Appointment
      </button>
    </form>
  );
};

export default BookAppointment;
