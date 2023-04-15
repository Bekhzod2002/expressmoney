import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import "./HowReceive.scss";
import frame88 from "../../assets/images/frame88.png";
import Calculator from "../../components/Calculator/Calculator";

import arrow from "../../assets/images/double_arrow.png";
import how_it_works_1 from "../../assets/images/how_it_works_1.png";
import how_it_works_2 from "../../assets/images/how_it_works_2.png";
import how_it_works_3 from "../../assets/images/how_it_works_3.png";
import frame_881 from "../../assets/images/881.png";
import frame_882 from "../../assets/images/882.png";
import frame_883 from "../../assets/images/883.png";
import frame_884 from "../../assets/images/884.png";
import dottedLine from "../../assets/images/dot_green_line.png";
import smile_man from "../../assets/images/smile_man.png";
import range_blue_dot from "../../assets/images/range_blue_dot.png";
import { ReactComponent as ArrowRightSvg } from "../../assets/svg/ArrowRight.svg";

import Footer from "../../components/Footer/footer";


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
            <div className="description">
              <div className="desc_first">
                <h3>
                  Получение займа <br /> на банковскую карту
                </h3>
                <p>
                  Самый быстрый выход из ситуации, когда необходимо срочно
                  получить <br />
                  деньги — микрозайм. С помощью онлайн-сервиса Expressmoney это{" "}
                  <br />
                  можно сделать моментально.
                </p>
              </div>
              <div className="desc_second">
                <div className="desc_second_title">
                  <h3>Условия предоставления займа на карту</h3>
                </div>
                <div className="desc_second_content">
                  <p>
                    Моментальный займ на карту — это краткосрочный кредит,{" "}
                    <br />
                    предоставляемый посредством направления денег на счет
                    банковской <br /> карты. Все оформление такой услуги
                    занимает не более 5 минут.
                  </p>
                </div>
              </div>
              <div className="desc_third">
                <div className="desc_third_title">
                  <h3>Требования к заемщикам</h3>
                </div>
                <div className="desc_third_subtitle_1">
                  <p>
                    Предоставляемый займ может быть использован
                    совершеннолетними <br /> дееспособными гражданами Российской
                    Федерации:
                  </p>
                </div>
                <div className="desc_third_block">
                  <div className="desc_third_block-inner">
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Возраст: от 18 лет</p>
                      </div>
                    </div>
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Гражданство: РФ</p>
                      </div>
                    </div>
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Необходимые документы: паспорт гражданина РФ</p>
                      </div>
                    </div>
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Наличие доступа в интернет и мобильного телефона</p>
                      </div>
                    </div>
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Пенсионеры</p>
                      </div>
                    </div>
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Безработные</p>
                      </div>
                    </div>
                    <div className="inner_item">
                      <div className="item_img">
                        <img src={frame88} alt="Frame 88" />
                      </div>
                      <div className="item_text">
                        <p>Лица, недавно получившие российское гражданство.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="desc_third_subtitle_2">
                  <p>
                    Микрозаймы предоставляют отличную возможность
                    профинансировать <br />
                    любые свои финансовые потребности, в максимально короткий
                    срок.
                  </p>
                </div>
              </div>
            </div>
            <div className="select__amount_comp">
              <Calculator />
            </div>
          </div>
        </div>
      </div>
      <div className="how_this_works">
        <div className="how_this_works_container">
          <div className="how_this_works_container-left">
            <div className="left_title">
              <h3>Как это работает</h3>
            </div>
            <div className="left_content">
              <div className="left_content-item">
                <div className="card">
                  <div className="card_top">
                    <img src={how_it_works_1} alt="How 1" />
                  </div>
                  <div className="card_bottom">
                    <div className="card_bottom_desc">
                      <h3 className="title">Оформите заявку</h3>
                      <p className="process"> Это делается</p>
                      <h3 className="time">моментально</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left_content-item">
                <div className="arrow">
                  <img src={arrow} alt="Arrow" />
                </div>
              </div>
              <div className="left_content-item">
                <div className="card">
                  <div className="card_top">
                    <img src={how_it_works_2} alt="How 2" />
                  </div>
                  <div className="card_bottom">
                    <div className="card_bottom_desc">
                      <h3 className="title">Дождитесь ответа</h3>
                      <p className="process"> Мы дадим ответ в течении </p>
                      <h3 className="time">5 минут</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="left_content-item">
                <div className="arrow">
                  {" "}
                  <img src={arrow} alt="Arrow" />
                </div>
              </div>
              <div className="left_content-item">
                <div className="card">
                  <div className="card_top">
                    <img src={how_it_works_3} alt="How 3" />
                  </div>
                  <div className="card_bottom">
                    <div className="card_bottom_desc">
                      <h3 className="title">Получите деньги</h3>
                      <p className="process">
                        {" "}
                        Средства поступят на вашу карту
                      </p>
                      <h3 className="time">сразу</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fourth_step">
        <div className="fourth_step_container">
          <div className="fourth_step_inner">
            <div className="inner_title">
              <h3>Четыре простых шага чтобы получить деньги</h3>
            </div>
            <div className="inner_card">
              <div className="inner_item">
                <img src={frame_881} alt="Frame_881" />
                <p>Зарегестрироваться </p>
              </div>
              <div className="inner_item">
                <div className="inner_item_line">
                  <img src={dottedLine} alt="Dotted Line" />
                </div>
              </div>
              <div className="inner_item">
                <img src={frame_882} alt="Frame_881" />
                <p>Указать личные данные </p>
              </div>
              <div className="inner_item">
                <div className="inner_item_line">
                  <img src={dottedLine} alt="Dotted Line" />
                </div>
              </div>
              <div className="inner_item">
                <img src={frame_883} alt="Frame_881" />
                <p>Выбрать пакет услуг </p>
              </div>
              <div className="inner_item">
                <div className="inner_item_line">
                  <img src={dottedLine} alt="Dotted Line" />
                </div>
              </div>
              <div className="inner_item">
                <img src={frame_884} alt="Frame_881" />
                <p>Подписать договор, введя код из СМС </p>
              </div>
            </div>
            <div className="inner_subtitle">
              <p>
                Для тех кто обращается к нам первый раз, займ предоставляется в
                размере от 1 000 до 15 000 рублей сроком от 3 до 5 дней. Для
                новых клиентов периодически действует акция (уточнять при взятии
                кредита) процентная ставка при которой 0% — к возврату только
                сумма основного долга, погашаемая единовременно. Решение по
                заявке будет предоставлено в течение 5 минут, деньги будут
                направлены на вашу банковскую карту. Для предворительного
                расчета параметров займа можно воспользоваться нашим
                калькулятором на главной странице. Кроме этого, в нашей компании
                действует программа лояльности для наших постоянных клиентов.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="fifth_step">
        <div className="fifth_container">
          <div className="fifth_inner">
            <div className="range">
              <div className="range_left">
                <div className="left_item">
                  <img src={range_blue_dot} alt="Range blue dot" />
                  <h3>
                    Минимальная ставка <br />
                    займа на карту 0%
                  </h3>
                </div>
                <div className="left_item">
                  <img src={range_blue_dot} alt="Range blue dot" />
                  <h3>
                    Максимальная сумма <br />
                    займа 100 000 ₽
                  </h3>
                </div>
              </div>
              <div className="range_right">
                <div className="right_item">
                  <img src={range_blue_dot} alt="Range blue dot" />
                  <h3>
                    Максимальная сумма <br />
                    займа 1 000 ₽
                  </h3>
                </div>
                <div className="right_item">
                  <img src={range_blue_dot} alt="Range blue dot" />
                  <h3>
                    Максимальный срок <br />
                    займа 360 дней
                  </h3>
                </div>
              </div>
            </div>
            <div className="loan">
              <div className="loan_inner">
                <div className="inner_wrapper">
                  <div className="inner_left">
                    <h3>Первый заём</h3>
                    <p>
                      от 1 % на срок до 30 дней <br />
                      на сумму до 15 000 ₽
                    </p>
                    <div className="send_request">
                      <Link to="/" className="send">
                        Оформить заявку
                        <ArrowRightSvg />
                      </Link>
                    </div>
                  </div>
                  <div className="inner_right">
                    <img src={smile_man} alt="Smile man" />
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

export default HowReceive;
