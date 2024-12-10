import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LinkTabImgOne } from "../../assets/icons/link-tab-img-1.svg";
import { ReactComponent as LinkTabImgTwo } from "../../assets/icons/link-tab-img-2.svg";
import { ReactComponent as LinkTabImgThree } from "../../assets/icons/link-tab-img-3.svg";
import { ReactComponent as LinkTabImgFour } from "../../assets/icons/link-tab-img-4.svg";
import { ReactComponent as LinkTabImgFive } from "../../assets/icons/link-tab-img-5.svg";
import { ReactComponent as LinkTabImgSix } from "../../assets/icons/link-tab-img-6.svg";
import { ReactComponent as LinkTabImgSeven } from "../../assets/icons/link-tab-img-7.svg";
import { ReactComponent as LinkTabImgEight } from "../../assets/icons/link-tab-img-8.svg";
import { ReactComponent as LinkTabImgNine } from "../../assets/icons/link-tab-img-9.svg";
import { ReactComponent as LinkTabImgTen } from "../../assets/icons/link-tab-img-10.svg";
import AppointmentCard from "../AppointmentCard/AppointmentCard";
import UserDetailsBar from "../UserDetailsBar/UserDetailsBar";
import { api } from "../..";
import { useUserDatacontext } from "../../contexts/UserDataContent";
import { useQuery } from "@tanstack/react-query";
import "./mainProfilePage.css";

const getPatientAppointments = async (patientId) => {
  const response = await api.get(
    `/patient/appointments?patient_id=${patientId}`
  );
  return response.data;
};

const MainProfilePage = () => {
  const { userData } = useUserDatacontext();

  const patientId = localStorage.getItem("userId");

  const { data, error, isLoading } = useQuery({
    queryKey: ["userId", patientId],
    queryFn: () => getPatientAppointments(patientId),
  });

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="main__profile__page__container">
      <UserDetailsBar />
      <div className="main__profile__content">
        <div className="next__appointment__container">
          <p className="next__appointment__text">Next Appointment</p>
        </div>
        {data.data.data
          .filter(
            (appointment, index) =>
              appointment.status === "upcoming" && index === 0
          )
          .map((appointment) => (
            <AppointmentCard key={appointment.id} appointment={appointment} />
          ))}
        <div className="link__tabs__container">
          <div className="link__tabs">
            <Link to="/panel/admission">
              <div className="link__tab">
                <LinkTabImgOne className="link__tab__img" />
                <p className="link__tab__text">Admission</p>
              </div>
            </Link>
            <Link to="/panel/appointment">
              <div className="link__tab">
                <LinkTabImgTwo className="link__tab__img" />
                <p className="link__tab__text">Appointment</p>
              </div>
            </Link>
            <Link to="/panel/health-condition">
              <div className="link__tab">
                <LinkTabImgThree className="link__tab__img" />
                <p className="link__tab__text">Health Condition</p>
              </div>
            </Link>
            <Link to="/panel/medical-history">
              <div className="link__tab">
                <LinkTabImgFour className="link__tab__img" />
                <p className="link__tab__text">Medical History</p>
              </div>
            </Link>
            <Link to="/panel/plan">
              <div className="link__tab">
                <LinkTabImgFive className="link__tab__img" />
                <p className="link__tab__text">Plan</p>
              </div>
            </Link>
            <Link to="/panel/insurance">
              <div className="link__tab">
                <LinkTabImgSix className="link__tab__img" />
                <p className="link__tab__text">Insurance</p>
              </div>
            </Link>
            <Link to="/panel/health-tracker">
              <div className="link__tab">
                <LinkTabImgSeven className="link__tab__img" />
                <p className="link__tab__text">Health Tracker</p>
              </div>
            </Link>
            <Link to="/panel/invoice">
              <div className="link__tab">
                <LinkTabImgEight className="link__tab__img" />
                <p className="link__tab__text">invoice</p>
              </div>
            </Link>
            <Link to="/panel/prescription">
              <div className="link__tab">
                <LinkTabImgNine className="link__tab__img" />
                <p className="link__tab__text">Prescription</p>
              </div>
            </Link>
            <Link to="/panel/investigation">
              <div className="link__tab">
                <LinkTabImgTen className="link__tab__img" />
                <p className="link__tab__text">Investigation</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainProfilePage;
