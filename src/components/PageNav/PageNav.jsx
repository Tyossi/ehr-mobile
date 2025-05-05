import React from "react";
import { ReactComponent as BackArrow } from "../../assets/icons/back-arrow.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info-icon.svg";
import { useNavigate } from "react-router-dom";
import "./pageNav.css";

const PageNav = (props) => {
  const { title, showInfoIcon, onClickFunction } = props;

  const navigate = useNavigate();
  return (
    <div className="page__nav__container">
      <span className="page__nav__content">
        <BackArrow
          className="page__nav__back__arrow"
          onClick={() => navigate(-1)}
        />
        <p className="page__nav__title">{title}</p>
        {showInfoIcon && (
          <InfoIcon
            style={{ marginRight: ".6rem" }}
            onClick={onClickFunction}
          />
        )}
      </span>
    </div>
  );
};

export default PageNav;
