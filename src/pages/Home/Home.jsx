import React from "react";
import firstimg from '../../Assets/images/дополнительные.png';
import secondimg from '../../Assets/images/основные.png';
import thirdimg from '../../Assets/images/Группа 1 2.png';
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home"> 
        <div className="Home__container">
            <div className="first">
                <div className="expresscredit">
                  first
                </div>
                <div className="expressimages">
                  <img className="firstimg" src={firstimg} />
                  <img className="secondimg" src={secondimg} />
                  <img className="thirdimg" src={thirdimg} />
                </div>
            </div>
        </div>
    </div>
  )
};

export default Home;
