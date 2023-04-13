import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightSvg } from "../../assets/svg/ArrowRight.svg";
import "./Button.scss";
const Button = () => {
  const default__btn__content = "Оформить заявку";
  return (
    <Link className="default__btn-container">
      <button className="default__btn">
        {default__btn__content}
        <ArrowRightSvg />
      </button>
    </Link>
  );
};

export default Button;
