import React from "react";
import frame from '../../Assets/images/Frame 118.png';
import baseimg from '../../Assets/images/Frame 57.png';
import standardimg from '../../Assets/images/Frame 57 (2).png';
import premiumimg from '../../Assets/images/Frame 57 (1).png';
import like from '../../Assets/images/like.png';
import heart from '../../Assets/images/heart.png';
import shield from '../../Assets/images/shield.png';
import sber from '../../Assets/images/sber.png';
import rubl from '../../Assets/images/rubl.png';
import energy from '../../Assets/images/energy.png';
import "./Home.scss";
import Button from "../../components/Button/Button";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="first">
          <div className="expresscredit">
            <p className="instant">Моментальное одобрение</p>
            <p className="expressloan">Экспресс кредит</p>
            <p className="convenience" >Воспользуйтесь нашим сервисом и получите решение <br/> через <span style={{color: '#0000ff'}}>5 минут</span> после создания заявки</p>
            <div>
           <p className="whitepart">
                
            </p>
            </div>
 
          </div>
          <div className="expressimages">
            <div className="clients">
                <p className="quantity">3+ тыс. <br/><span className="satisfied">Довольных клиентов</span>
                </p>
            </div>
            <div className="approveapplication">
                <p className="approvetxt">
                  <span style={{fontWeight: '500', fontSize: '26px'}} >5 мин.</span><br/>
                  Для одобрения заявки
                </p>
            </div>
          </div>
        </div>
        <div className="ratespart"> 
          <div className="zagolovok">
            <h6 className="rates">Тарифы</h6>
              <img src={frame} alt="frame" />
              <p>Мы подобрали для Вас лучшие предложения</p>
          </div>

            <div className="options">
                <div className="base">
                  <h6 className="basehead">Базовый</h6>
                  <img className="baseimg" src={baseimg} alt="baseimg" />
                  <p className="basetxt">
                    <span style={{color: '#0000ff', fontSize: '30px'}}>5 000</span> Руб 
                    на <span style={{color: '#0000ff', fontSize: '30px'}}>7</span> Дней
                  </p>
                  <p className="toreturn">К возврату 5 350 руб.*</p>
                  <Button/>
                </div>
                <div className="standard">
                  <h6 className="standardhead" >Стандарт</h6>
                  <img className="standardimg" src={standardimg} alt="standardimg" />
                  <p className="standardtxt">
                    <span style={{color: '#FFFFFF', fontSize: '30px'}}>15 000</span> Руб 
                    на <span style={{color: '#FFFFFF', fontSize: '30px'}}>30</span> Дней
                  </p>
                  <p className="toreturn">К возврату 5 350 руб.*</p>
                </div>
                <div className="premium">
                  <h6 className="premiumhead">Премиум</h6>
                  <img className="premiumimg" src={premiumimg} alt="premiumimg" />
                  <p className="premiumtxt">
                    <span style={{color: '#0000ff', fontSize: '30px'}}>80 000</span> Руб 
                    на <span style={{color: '#0000ff', fontSize: '30px'}}>1</span> год
                  </p>
                  <p className="toreturn">К возврату 368 000 руб.*</p>
                </div>
            </div>
        </div>
        <div className="advantages ">
          <div className="advantzagalovka">
            <h6 className="advanthead">Преимущества</h6>
            <img src={frame} alt="frame" />
            <p>Наши продукты лучшие на рынке!</p>
          </div>




        </div>
        <div className="howitworks">

        </div>  
      </div>
    </div>
  );
};

export default Home;
