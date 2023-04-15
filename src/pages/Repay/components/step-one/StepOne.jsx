import React from "react";
import "./StepOne.scss";
import { ReactComponent as ArrowRightSvg } from "../../../../assets/svg/ArrowRight.svg";
import { Link } from "react-router-dom";
const StepOne = () => {
  return (
    <div className="stepone">
      <div className="stepone__container">
        <div className="repay__form">
          <div className="repay__titleBlock">
            <div className="repay__title">
              <h3>Погашение займа</h3>
            </div>
            <div className="repay__subtitle">
              <p>
                В настоящий момент для принятия платежей осуществляется
                поддержка <br /> платежных систем{" "}
                <span>VISA, MasterCard, МИР.</span>
              </p>
            </div>
            <div className="repay__blue__card">
              <div className="repay__white__card">
                <div className="repay__white__card__inner">
                  <div className="agreement__summ">
                    <div className="summ__wrapper">
                      <div className="summ_left">
                        <p>Номер договора</p>

                        <input type="text" placeholder="Укажите номер" />
                      </div>
                      <div className="summ_right">
                        <p>Сумма платежа</p>
                        <input type="text" placeholder="500" />
                      </div>
                    </div>
                  </div>
                  <div className="agreement_card">
                    <div className="agreement__card_form">
                      <div className="cardform__group">
                        <p>Номер карты</p>
                        <input type="text" placeholder="**** **** **** ****" />
                      </div>
                      <div className="cardform__group">
                        <p>Владелец карты</p>
                        <input type="text" placeholder="Maria Ivanova" />
                      </div>
                      <div className="cardform__group-expire">
                        <div className="group_left">
                          <p>Срок действия </p>
                          <div className="month_day">
                            <select
                              name="month_expire"
                              id="month_expire"
                              className="month_expire">
                              <option value="1">3</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                            <select
                              name="day_expire"
                              id="day_expire"
                              className="day_expire">
                              <option value="1">27</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                            </select>
                          </div>
                        </div>
                        <div className="group_right">
                          <p>CVC</p>
                          <input type="text" placeholder="123" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="agreement_pay">
                    <Link className="pay" to="/">
                      <p>Оплатить</p>
                      <ArrowRightSvg />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="repay__contact">
              <div className="repay__contact-inner">
                <p>
                  Если Вы не помните номер договора, свяжитесь с нами по чату{" "}
                  <br />
                  поддержки или по телефону{" "}
                  <Link className="number"> 8 800 700 91 15</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
