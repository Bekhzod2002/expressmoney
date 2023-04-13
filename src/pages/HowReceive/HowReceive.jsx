import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./HowReceive.scss";
import Calculator from "../../components/Calculator/Calculator";

const HowReceive = () => {
  return (
    <div className="howreceive">
      <div className="howreceive__container">
        <div className="howreceive__wrapper">
          <div className="howreceive__wrapper top-path">
            <div className="top_path_links">
              <Link className="top_path_links-first-step" to="/">
                Главная{" "}
              </Link>
              <span>
                <FaChevronRight />
              </span>
              <Link className="top_path_links-second-step" to="/how-to-receive">
                Как получить{" "}
              </Link>
            </div>
          </div>
          {/* Top-Path End */}
          <div className="howreceive__content">
            <div className="description"></div>
            <div className="select__amount_comp">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowReceive;
