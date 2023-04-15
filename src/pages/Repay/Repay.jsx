import React from "react";
import "./Repay.scss";
import Footer from "../../components/Footer/footer";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import StepOne from "./components/step-one/StepOne";

const Repay = () => {
  return (
    <div className="repay">
      <div className="repay__container">
        <div className="repay__container top-path">
          <div className="top_path_links">
            <Link className="top_path_links-first-step" to="/">
              Главная{" "}
            </Link>
            <span>
              <FaChevronRight />
            </span>
            <Link className="top_path_links-second-step" to="/repay">
              Как погасить{" "}
            </Link>
          </div>
        </div>
        {/* TOP PATH END */}
        <StepOne />
      </div>
      <Footer />
    </div>
  );
};

export default Repay;
