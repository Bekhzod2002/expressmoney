import React, { useRef }  from "react";
import blueimg from '../../assets/images/blueimg.png';
import blackimg from '../../assets/images/blackimg.png';
import phone from '../../assets/images/contact.png';
import maplocation from '../../assets/images/maplocation.png';
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Maps from "./map";
import Footer from "../../components/Footer/footer";
import { ReactComponent as ArrowRightSvg } from "../../assets/svg/ArrowRight.svg";
import './About.scss';

const About = () => {
    return(
        <div className="About__company">
            <div className="About_company__container">
                <div className="aboutwrap">
                    <div className="wrapper_head">
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
                </div>
                <div className="aboutus">
                    <div className="aboutus__container">
                        <div className="expressbox">
                            <div>
                                <img className="blueimg" src={blueimg} alt="" />
                            </div>
                            <div className="expresspart">
                                <h6 className="express">Expressmoney </h6>
                                <p className="expresstxt">
                                    Наша компания является одним из лидеров миктокредитования и работает на рынке уже более 10 лет. <br/>
                                    Деятельность компании регулируется Центральным банком Российской Федерации с предоставлением всей <br/>
                                    обязательной финансовой отчетности. Сервис нашей компании является эталоном для рынка минизаймов <br/>
                                    России. В своей работе мы используем лучшие отечественные и мировые финансовые практики. Пользуясь <br/> 
                                    кредитами нашей компании Вы получите самые выгодные условия.
                                </p>
                            </div>
                            <div>
                                <img className="blackimg" src={blackimg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Map_part">
                    <div className="mappart_container">
                        <div className="map">
                            <Maps className="mapimg" />
                        </div>
                        <div className="form">
                            <div className="form__container">
                                <div className="contacts_part"> 
                                    <div className="contacts__container">
                                        <div className="contacts">Контакты</div>
                                        <div className="other_info">
                                            <div className="phone_part">
                                                <img src={phone} alt="phone" />
                                                <p className="phonenumber"> 8 800 700 91 15</p>
                                            </div>
                                            <div className="location_part">
                                                <img src={maplocation} alt="map" />
                                                <p className="city">г. Москва</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="feedback_form">
                                    <div className="feedback_form__container">
                                        <div className="box">
                                            <div className="form_head">Форма обратной связи</div>
                                            <div className="form_inputs">
                                                <div className="name__input">
                                                    <div className="name__container">
                                                        <p>Имя</p>
                                                        <div className="inputbox">
                                                            <input
                                                                className="name" 
                                                                type="text" 
                                                                placeholder="Не указано"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="phone__input">
                                                    <div className="phone__container">
                                                        <p>Телефон</p>
                                                        <div className="inputbox">
                                                            <input
                                                                className="phone" 
                                                                type="phone" 
                                                                placeholder="+7(___) ___-__-__"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="message__input">
                                                    <div className="message__container">
                                                        <p>Сообщение</p>
                                                        <div className="inputbox">
                                                            <input
                                                                className="message" 
                                                                type="text" 
                                                                placeholder="Не указано"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sendbutton">
                                                    <div className="sendbutton__container">
                                                        <div className="send_info">
                                                            <Link className="send" to="/">
                                                            <p>Оплатить</p>
                                                            <ArrowRightSvg />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer/>
                </div>      
            </div>
        </div>
    )
}

export default About;