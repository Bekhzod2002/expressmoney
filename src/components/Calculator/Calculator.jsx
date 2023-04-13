import React from "react";
import { MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import Button from "../Button/Button";
import "./Calculator.scss";

const Calculator = () => {
  return (
    <div className="calculator">
      <div className="calculator__container">
        <div className="calculator__wrapper">
          <div className="title">
            <h3>Выберите сумму</h3>
          </div>
          <div className="choose_amount_day"></div>
          <div className="make_request">
            <Button />
          </div>
          <div className="check_loyalty_percentage">
            <p className="check_loyalnost">
              <MdOutlineCheckBoxOutlineBlank /> Карта лояльности
            </p>
            <p className="check_percentage">1% в сутки</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
