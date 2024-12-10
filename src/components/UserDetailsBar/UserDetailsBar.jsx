import React from "react";
import patientImg from "../../assets/images/patient-pp.png";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell-icon.svg";
import { Link } from "react-router-dom";
import "./userDetailsBar.css";
import { useUserDatacontext } from "../../contexts/UserDataContent";

const UserDetailsBar = () => {
  const { userData } = useUserDatacontext();

  return (
    <div className="profile__name__and__icons">
      <div className="user__details__content">
        <div className="profile__img__and__name">
          <Link to="/panel/profile">
            <img
              src={patientImg}
              alt="patient's avatar"
              className="profile__img"
            />
          </Link>
          <div className="profile__name__and__hi">
            <p className="profile__hi">Hi,</p>
            <p className="profile__name">
              {userData?.first_name} {userData?.last_name}
            </p>
          </div>
        </div>
        <div className="profile__icons">
          <SearchIcon />
          <BellIcon />
        </div>
      </div>
    </div>
  );
};

export default UserDetailsBar;
