import React from "react";
import "./Loyalty.scss";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import { ReactComponent as ArrowRightSvg } from "../../assets/svg/ArrowRight.svg";

import loyalty1 from "../../assets/images/loyalty1.png";
import loyalty2 from "../../assets/images/loyalty2.png";
import grey_blue_black from "../../assets/images/grey_blue_black.png";
const Loyalty = () => {
  return (
    <div className="loyalty">
      <div className="loyalty__container">
        <div className="loyalty__container top-path">
          <div className="top_path_links">
            <Link className="top_path_links-first-step" to="/">
              Главная{" "}
            </Link>
            <span>
              <FaChevronRight />
            </span>
            <Link className="top_path_links-second-step" to="/repay">
              Программа лояльности{" "}
            </Link>
          </div>
        </div>
        {/* TOP PATH END */}
        <div className="loaylty__title">
          <div className="title__container">
            <div className="title_title">
              <h3>Программа лояльности</h3>
            </div>
            <div className="title_img">
              <img src={grey_blue_black} alt="Grey Blue Black line" />
            </div>
            <div className="title_subtitle">
              <p>Наши постоянные клиенты получают наилучшие условия</p>
            </div>
          </div>
        </div>
      </div>
      <div className="loyalty__content">
        <div className="loyalty__inner">
          <div className="inner__container">
            <div className="inner_left">
              <Link>
                {" "}
                <img src={loyalty1} alt="Loyalty" />
              </Link>
            </div>
            <div className="inner_right">
              <div className="inner_card">
                <div className="inner_wrapper">
                  <div className="inner_wrapper-top">
                    <p>
                      Чтобы воспользоваться партнерской программой Вам
                      необходимо перейти в личный кабинет
                    </p>
                  </div>
                  <div className="inner_wrapper-bottom">
                    <Link className="lichniy_kab" to="/">
                      <p>Перейти в личный кабинет</p>
                      <ArrowRightSvg />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Loyalty;
