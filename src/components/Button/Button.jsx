import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRightCircle } from "react-icons/bs";
import "./Button.scss";
const Button = () => {
  const default__btn__content = "Оформить заявку";
  return (
    <Link className="default__btn-container">
      <button className="default__btn">
        {default__btn__content}
        <BsArrowRightCircle />
        {/* <span className="default__btn-icon"></span> */}
      </button>
    </Link>
  );
};

export default Button;
