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
import { set } from "date-fns";

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

// const timeSlots = [
//   { value: "8:00 am", label: "8:00 am" },
//   { value: "9:00 am", label: "9:00 am" },
//   { value: "10:00 am", label: "10:00 am" },
//   { value: "11:00 am", label: "11:00 am" },
//   { value: "12:00 pm", label: "12:00 pm" },
//   { value: "1:00 pm", label: "1:00 pm" },
//   { value: "2:00 pm", label: "2:00 pm" },
//   { value: "3:00 pm", label: "3:00 pm" },
// ];

const BookAppointment = ({ setShowBookingSuccess }) => {
  const [selectedType, setSelectedType] = useState("");
  const [sepcialists, setSpecialists] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);
  const [availabilities, setAvailabilities] = useState([]);
  const [departmentId, setDepartmentId] = useState(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
  const [dateSlots, setDateSlots] = useState([]);
  const [selectedDateId, setSelectedDateId] = useState(null);
  const { userData } = useUserDatacontext();
  const facilityId = userData?.facility_id;
  const { data, error, isLoading } = useQuery({
    queryKey: ["getSpecialists", facilityId],
    queryFn: () => getDoctors(facilityId),
  });

  console.log({ data });

  console.log({ userData });

  const validationSchema = yup.object().shape({
    // reasonForAppointment: yup.string().required("This field is required"),
    date: yup.date().required("Required. Please select a date"),
    staff: yup.string().required("Required"),
    type: yup.string().required("Required"),
    time: yup.string().required("Required. Please select a time"),
    description: yup.string().required("Required"),
    // description: yup.string().required("Required"),
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
      department_id: departmentId,
      patient_id: userData?.id,
      facility_id: facilityId,
      // reasonForAppointment: "",
      staff: null,
      type: "",
      date: "",
      time: "",
      description: "",
    },
    onSubmit: (values) => {
      console.log(values);
      makeAppointment(values);
      // window.alert("Booking Successful");
    },
  });

  const makeAppointment = async (values) => {
    try {
      const response = await api.post("/staff/appointments", values);
      setShowBookingSuccess(true);
      console.log("Booking Successful", response);
      window.alert("Booking Successful");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  // const handleCustomSubmit = (e) => {
  //   e.preventDefault();
  //   handleSubmit(); // call Formik's submit
  // };

  useEffect(() => {
    if (data) {
      // setDoctors(data.data);
      const options = data.data?.map((doctor) => ({
        value: doctor.id,
        label: `${doctor.first_name} ${doctor.last_name}`,
        availabilities: doctor.availabilities,
        department_id: doctor.department_id,
      }));
      // setFieldValue("specialist", options);
      setSpecialists(options);
    }
  }, [data]);

  // useEffect(() => {
  //   // const selectedSpecialist = doctors?.find(
  //   //   (doctor) => doctor.id === values.staff
  //   // );
  //   // const availabilities = selectedSpecialist?.availabilities;
  //   // setDepartmentId(selectedSpecialist?.department_id);
  //   if (availabilities) {
  //     const dateSlots = availabilities?.map((dateSlot) => ({
  //       id: dateSlot?.id,
  //       value: dateSlot?.date,
  //     }));
  //     setDateSlots(dateSlots);
  //     // setAvailableTimeSlots(timeSlots);
  //   }
  // }, [availabilities]);

  useEffect(() => {
    if (selectedDateId) {
      console.log("selectedDateId", selectedDateId);
      console.log("availabilities", availabilities);
      const selectedDate = availabilities?.find(
        (date) => date.id === selectedDateId
      );

      console.log("selectedDate", selectedDate);
      const timeSlots = selectedDate?.available_times?.map(
        (timeSlot) => timeSlot
      );

      console.log("timeSlots", timeSlots);
      setAvailableTimeSlots(timeSlots);
    }

    console.log("availableTimeSlots", availableTimeSlots);
  }, [availabilities, selectedDateId]);

  // useEffect(() => {
  //   setFieldValue("type", selectedType);
  // }, [selectedType, setFieldValue]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);

    const weekday = date.toLocaleDateString("en-US", { weekday: "short" });
    const day = date.toLocaleDateString("en-US", { day: "2-digit" });
    const year = date.getFullYear();

    return (
      <>
        <p className="date__slot__day">{weekday}</p>
        <p className="date__slot__num">{day}</p>
        <p className="date__slot__num">{year}</p>
      </>
    );
  };

  // useEffect(() => {
  //   setAvailableTimeSlots(selectedSpecialist.availabilities);
  // }, [selectedSpecialist]);
  useEffect(() => {
    setFieldValue("staff", selectedSpecialist?.value);
    setFieldValue("department_id", selectedSpecialist?.department_id);
    const availabilities = selectedSpecialist?.availabilities;
    setAvailabilities(availabilities);
    console.log("availabilities", availabilities);

    if (availabilities) {
      const dateSlots = availabilities?.map((dateSlot) => ({
        id: dateSlot?.id,
        value: dateSlot?.date,
      }));
      setDateSlots(dateSlots);
      // setAvailableTimeSlots(timeSlots);
    }
  }, [selectedSpecialist]);

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;
  console.log({ values });

  return (
    <form className="appointment__booking__form" onSubmit={handleSubmit}>
      <label
        htmlFor="type"
        className="appointment__input__label"
        style={{ marginBottom: "1rem" }}
      >
        Appointment Type:
      </label>
      <div className="appointment__options">
        <div
          className={`appointment__option ${
            selectedType === "inHospital" ? "slot__active" : ""
          }`}
          onClick={() => {
            setSelectedType("inHospital");
            setFieldValue("type", "inHospital");
          }}
        >
          <HospitalIcon />{" "}
          <p className="appointment__option__text">In-Hospital</p>
        </div>
        <div
          className={`appointment__option ${
            selectedType === "virtual" ? "slot__active" : ""
          }`}
          onClick={() => {
            setSelectedType("virtual");
            setFieldValue("type", "virtual");
          }}
        >
          <VirtualIcon /> <p className="appointment__option__text">Virtual</p>
        </div>
        <div
          className={`appointment__option ${
            selectedType === "homeVisits" ? "slot__active" : ""
          }`}
          onClick={() => {
            setSelectedType("homeVisits");
            setFieldValue("type", "homeVisits");
          }}
        >
          <HomeIcon /> <p className="appointment__option__text">Home Visits</p>
        </div>
      </div>
      {touched.type && errors.type && (
        <p className="form__error">{errors.type}</p>
      )}

      {/* <label
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
        <p className="form__error">{errors.reasonForAppointment}</p>
      )} */}

      <label htmlFor="staff" className="appointment__input__label">
        Find the right speciialist
      </label>
      <SearchableSelect
        name="staff"
        options={sepcialists}
        value={values.staff}
        // onChange={(value) => setFieldValue("staff", value)}
        onChange={(value) => setSelectedSpecialist(value)}
        handleBlur={handleBlur}
        classNamePrefix="select"
        setAvailabilities={setAvailabilities}
        setDepartmentId={setDepartmentId}
      />
      {touched.staff && errors.staff && (
        <p className="form__error">{errors.staff}</p>
      )}

      <div className="available__date__container">
        <div className="date__slot__control">
          <p className="available__date__text">Date</p>
          {/* <div className="date__selection__ctas">
            <LeftIcon />
            <p className="date__month">Mar</p>
            <RightIcon />
          </div> */}
        </div>
        <div className="date__slots__container">
          <div className="date__slots">
            {dateSlots?.map((slot) => {
              if (slot.value === null) return null;
              return (
                <div
                  className={`date__slot ${
                    selectedDateId === slot.id ? "slot__active" : ""
                  }`}
                  onClick={() => {
                    setSelectedDateId(slot.id);
                    setFieldValue("date", slot.value?.substr(0, 10));
                  }}
                >
                  {/* <p className="date__slot__day">Today</p> */}
                  {/* <p className="date__slot__num">{slot.value?.substr(0, 10)}</p> */}
                  {slot.value ? formatDate(slot.value) : "No Date"}
                </div>
              );
            })}
            {/* <div className="date__slot">
              <p className="date__slot__day">Tue</p>
              <p className="date__slot__num">12</p>
            </div>
        
            */}
          </div>
        </div>
      </div>
      {touched.date && errors.date && (
        <p className="form__error">{errors.date}</p>
      )}

      <div className="available__date__container">
        <div className="date__slot__control">
          <p className="available__date__text">Time</p>
          {/* <div className="date__selection__ctas">
            <LeftIcon />
            <p className="date__month">Morning</p>
            <RightIcon />
          </div> */}
        </div>
        <div className="date__slots__container">
          <div className="date__slots">
            {availableTimeSlots?.map((slot) => (
              <div
                className={`time__slot ${
                  selectedTime === slot ? "slot__active" : ""
                }`}
                key={slot.value}
                onClick={() => {
                  setSelectedTime(slot);
                  setFieldValue("time", slot);
                }}
              >
                <p className="time__slot__text">{slot}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <label htmlFor="description" className="appointment__input__label">
        Note
      </label>
      <textarea
        name="description"
        id="description"
        className="appointment__note__input"
        value={values.description}
        onChange={handleChange}
        handleBlur={handleBlur}
      ></textarea>
      {touched.description && errors.description && (
        <p className="form__error">{errors.description}</p>
      )}

      <button className="book__appointment__cta" type="submit">
        Book Appointment
      </button>
    </form>
  );
};

export default BookAppointment;
