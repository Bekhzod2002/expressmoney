import React from "react";
import './footer.scss';
import {CiSearch} from 'react-icons/ci'
import { Link } from "react-router-dom";
const Footer = () => {
    return(
        <div className="footer">
            <div className="footer__container">
                <div className="menufoot">
                    <div className="menufoot__container">
                        <div className="contactus" >
                            <div className="contact_container">
                                <p className="phonenumber">8 800 700 91 15</p>
                                <hr className="line" />
                                <p className="freecall">Телефон для звонков по России</p>
                            </div>
                        </div>
                        <div className="search">
                            <div className="search__container">
                                <div className="searchbar">
                                    <div className="searchpart">
                                        <CiSearch style={{fontSize: '1.5rem'}} />
                                        <input type={Text} className="searchinput" placeholder="Поиск по сайту"/>
                                    </div>
                                    <button className="searchbtn">Найти</button> 
                                </div>
                                <div className="menu__footer">
                                    <div className="menufooter__container">
                                        <div className="borrowers">
                                            <Link className="headitem" >Заемщикам</Link> <br/>
                                            <Link className="item" >Получение займа</Link> <br/>
                                            <Link className="item">Погашение займа</Link> <br/>
                                            <Link className="item">Партнерская программа</Link> <br/>
                                            <Link className="item">Программа лояльности</Link> <br/>
                                            <Link className="item">Мобильное приложение</Link> <br/>
                                            <Link className="item">Вопросы и ответы</Link> <br/>
                                            <Link className="item">Личный кабинет</Link> <br/>
                                            <Link className="item">Карта сайта</Link>
                                        </div>
                                        <div className="infocenter">
                                            <Link className="headitem">Информационный центр</Link><br/>
                                            <Link className="item">О компании</Link><br/>
                                            <Link className="item">Контакты</Link><br/>
                                            <Link className="item">Новости и акции</Link><br/>
                                            <Link className="item">Органы управления</Link><br/>
                                            <Link className="item">Раскрытие информации</Link><br/>
                                            <Link className="item">Документы</Link><br/>
                                            <Link className="item">Политика конфиденциальности</Link><br/>
                                            <Link className="item">Финансовая отчетность</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr style={{marginTop: '40px'}} />
                    <div className="moreinfo">
                            <div className="firstinfo">
                                
                                    ООО МФК «ЭкспрессДеньги» является <br/> 
                                    членом СРО «МиР» с 29 декабря 2021 <br/> 
                                    года <br/>
                                    <br/>
                                    <Link className="item">https://npmir.ru</Link><br/>
                                    <br/>
                                    107078, г. Москва, Орликов переулок, д.5, <br/> 
                                    стр.1, этаж 2, пом.11 <br/>
                                    <br/>
                                    ООО МФК «ЭкспрессДеньги»являлось <br/> 
                                    членом СРО «Единство»Дата <br/> 
                                    прекращения членства14 декабря 2021 <br/> 
                                    года <br/>
                                    <br/>
                                    <br/>
                                    <span className="item">© 2013–2023, ООО МФК <br/> «ЭкспрессДеньги». Все права защищены.</span>
                                
                            </div>
                            <div className="second">
                                    Банк России <br/>
                                    <br/>
                                    <Link className="item"> https://cbr.ru</Link> <br/>
                                    <br/>
                                    Интернет-приемная Банка России<br/>
                                    <br/>
                                    <Link className="item">https://cbr.ru/Reception</Link> <br/>
                                    <br/>
                                    Реестр микрофинансовых организаций <br/>
                                    <br/>
                                    <Link className="item">https://cbr.ru/microfinance/registry</Link> <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    «Expressmoney» является торговой <br/> маркой ООО МФК «ЭкспрессДеньги»
                            </div>
                            <div className="third">
                                Потребитель финансовых услуг вправе <br/> 
                                направить обращение в Службу <br/> 
                                финансового уполномоченного <br/>
                                <br/>
                               <Link className="item">https://finombudsman.ru</Link> <br/>
                               <br/>
                                119017, г. Москва, Старомонетный пер., <br/> 
                                дом 3 <br/>
                                <br/>
                                8 (800) 200-00-10понедельник - пятница <br/>
                                с 08:00 до 20:00 (МСК), кроме нерабочих <br/> 
                                праздничных дней <br/>
                                <br/>
                                <br/>
                                Общество с ограниченной <br/> 
                                ответственностью микрофинансовая <br/> 
                                компания "ЭкспрессДеньги" (ОГРН <br/> 
                                1101215004593, ИНН 1215150103), адрес <br/>
                                места нахождения: 424000, Республика <br/> 
                                Марий Эл, г. Йошкар-Ола, бульвар <br/> 
                                Чавайна, д. 12, корпус А, <br/> 
                                регистрационный номер записи в <br/> 
                                государственном реестре <br/>
                                микрофинансовых организаций за <br/> 
                                номером 2120512002049.Дата внесения в <br/> 
                                реестр 06 сентября 2012 года.
                            </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;