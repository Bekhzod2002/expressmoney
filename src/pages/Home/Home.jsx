import React from "react";
import frame from "../../assets/images/Frame 118.png";
import baseimg from "../../assets/images/Frame 57.png";
import standardimg from "../../assets/images/Frame 57 (2).png";
import premiumimg from "../../assets/images/Frame 57 (1).png";
import like from "../../assets/images/like.png";
import heart from "../../assets/images/heart.png";
import shield from "../../assets/images/shield.png";
import sber from "../../assets/images/sber.png";
import rubl from "../../assets/images/rubl.png";
import energy from "../../assets/images/energy.png";
import how_it_works_1 from "../../assets/images/how_it_works_1.png";
import how_it_works_2 from "../../assets/images/how_it_works_2.png";
import how_it_works_3 from "../../assets/images/how_it_works_3.png";
import carts from "../../assets/images/carts.png";
import arrow from "../../assets/images/double_arrow.png";
import "./Home.scss";
import Button from "../../components/Button/Button";
import Footer from "../../components/Footer/footer";

const Home = () => {
  return (
    <div className="Home">
      <div className="Home__container">
        <div className="first">
          <div className="expresscredit">
            <p className="instant">Моментальное одобрение</p>
            <p className="expressloan">Экспресс кредит</p>
            <p className="convenience">
              Воспользуйтесь нашим сервисом и получите решение <br /> через{" "}
              <span style={{ color: "#0000ff" }}>5 минут</span> после создания
              заявки
            </p>
            <div>
              <p className="whitepart"></p>
            </div>
          </div>
          <div className="expressimages">
            <div className="clients">
              <p className="quantity">
                3+ тыс. <br />
                <span className="satisfied">Довольных клиентов</span>
              </p>
            </div>
            <div className="approveapplication">
              <p className="approvetxt">
                <span style={{ fontWeight: "500", fontSize: "26px" }}>
                  5 мин.
                </span>
                <br />
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
                <span style={{ color: "#0000ff", fontSize: "30px" }}>
                  5 000
                </span>{" "}
                Руб на{" "}
                <span style={{ color: "#0000ff", fontSize: "30px" }}>7</span>{" "}
                Дней
              </p>
              <p className="toreturn">К возврату 5 350 руб.*</p>
              <Button />
            </div>
            <div className="standard">
              <h6 className="standardhead">Стандарт</h6>
              <img
                className="standardimg"
                src={standardimg}
                alt="standardimg"
              />
              <p className="standardtxt">
                <span style={{ color: "#FFFFFF", fontSize: "30px" }}>
                  15 000
                </span>{" "}
                Руб на{" "}
                <span style={{ color: "#FFFFFF", fontSize: "30px" }}>30</span>{" "}
                Дней
              </p>
              <p className="toreturn">К возврату 5 350 руб.*</p>
            </div>
            <div className="premium">
              <h6 className="premiumhead">Премиум</h6>
              <img className="premiumimg" src={premiumimg} alt="premiumimg" />
              <p className="premiumtxt">
                <span style={{ color: "#0000ff", fontSize: "30px" }}>
                  80 000
                </span>{" "}
                Руб на{" "}
                <span style={{ color: "#0000ff", fontSize: "30px" }}>1</span>{" "}
                год
              </p>
              <p className="toreturn">К возврату 368 000 руб.*</p>
            </div>
          </div>
        </div>
        <div className="advantages ">
          <div className="advantzagalovka">
            <h6 className="advanthead">Преимущества</h6>
            <img src={frame} alt="frame" />
            <p className="ourproducts">Наши продукты лучшие на рынке!</p>
          </div>
          <div className="tags">
            <div className="momentalno">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={energy} alt="energy" />
                <span style={{ fontSize: "30px", color: "#000000" }}>
                  Моментально <br />{" "}
                </span>
              </div>
              <p className="energytxt">
                {" "}
                Деньги за 5 минут <br /> после одобрения{" "}
              </p>
            </div>
            <div className="shield">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={shield} alt="shield" />
                <span style={{ fontSize: "30px", color: "#000000" }}>
                  Без страховки
                </span>
              </div>
              <p className="shieldtxt">
                Без доп платежей <br /> к выданной сумме
              </p>
            </div>
            <div className="sber">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={sber} alt="sber" />
                <span style={{ fontSize: "30px", color: "#000000" }}>
                  Одобрение 99%
                </span>
              </div>
              <p className="sbertxt">
                Безопасность персональных <br /> данных
              </p>
            </div>
          </div>
          <div className="tags2">
            <div className="rubl">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={rubl} alt="rubl" />
                <span style={{ fontSize: "30px", color: "#000000" }}>
                  Без переплат
                </span>
              </div>
              <p className="rubltxt">
                Погашение займа за 24 часа <br /> без комиссии
              </p>
            </div>
            <div className="heart">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={heart} alt="heart" />
                <span style={{ fontSize: "30px", color: "#000000" }}>
                  Любим клиентов
                </span>
              </div>
              <p className="hearttxt">
                Премиум услуги для постоянных <br /> клиентов компании
              </p>
            </div>
            <div className="like">
              <div style={{ display: "flex", gap: "10px" }}>
                <img src={like} alt="like" />
                <span style={{ fontSize: "30px", color: "#000000" }}>
                  Работаем честно
                </span>
              </div>
              <p className="liketxt">
                Улучшение Вашей <br /> кредитной истории
              </p>
            </div>
          </div>
        </div>
        <div className="howitworks">
          <div className="howitworks_container">
            <div className="howitworkzagolovka">
              <p className="_head">Как это работает</p>
              <img src={frame} alt="frame" />
              <p className="getmoney">Получите деньги в считанные минуты</p>
            </div>
          </div>
          <div className="sequence">
            <div className="applied">
              <div className="appliedimg">
                <img src={how_it_works_1} alt="/" />
              </div>
              <div className="decor">
                <p className="makerequest">Оформите заявку</p>
                <p className="instantly">
                  Это делается <br />{" "}
                  <span style={{ color: "#0000ff" }}>моментально</span>
                </p>
              </div>
            </div>
            <div className="arrow">
              <div className="arrowcontainer">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="applied">
              <div className="appliedimg">
                <img src={how_it_works_2} alt="/" />
              </div>
              <div className="decor">
                <p className="makerequest">Дождитесь ответа</p>
                <p className="instantly">
                  Мы дадим ответ в течении <br />{" "}
                  <span style={{ color: "#0000ff" }}>5 минут</span>
                </p>
              </div>
            </div>
            <div className="arrow">
              <div className="arrowcontainer">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
            <div className="applied">
              <div className="appliedimg">
                <img src={how_it_works_3} alt="/" />
              </div>
              <div className="decor">
                <p className="makerequest">Получите деньги</p>
                <p className="instantly">
                  Средства поступят на Вашу карту
                  <br /> <span style={{ color: "#0000ff" }}>сразу</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="convenient_way">
          <div className="convenientway__container">
            <div className="way_left">
              <div className="left_container">
                <h6 className="getwayhead">
                  Удобный способ <br /> получения
                </h6>
                <img style={{ marginTop: "20px" }} src={frame} alt="frame" />
                <p className="aboutcarts">
                  Мы работаем со всеми основными карточными <br />
                  системами Росиии и мира. <br />
                  <br />
                  Карточные платежи в нашей компании, <br /> обрабатываются с
                  использованием наиболее <br /> безопастных технологий
                  основанных на <br /> стандартах PCI DSS
                </p>
              </div>
            </div>
            <div className="way_right">
              <div className="right_container">
                <img src={carts} alt="carts" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
