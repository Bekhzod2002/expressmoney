import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {MdExpandMore} from 'react-icons/md';

import frame from '../../assets/images/Frame 118.png';
import woman from '../../assets/images/womanworking.png';
import './Answers.scss';

const Answers = () => {
    return(
        <div className="Answers_page">
            <div className="Answers__container">
                <div className="answers__head">
                    <div className="answerhead__container">
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
                <div className="ans_ques">
                    <div className="ansques__container">
                        <div className="ans_head">Вопросы и ответы</div>
                        <img src={frame} alt="frame" />
                        <p>Мы собрали для Вас информацию по наиболее часто встречающимся вопросам</p>
                    </div>
                </div>
                <div className="womanworking">
                    <img src={woman} alt="" />
                </div>
                <div className="popularquestions">
                    <div className="popular__container">
                        <div className="popularhead">Популярные вопросы</div>
                        <img src={frame} alt="frame" />
                        <div className="accordion_part">
                            <div style={{width: '500px'}}>
                                <Accordion style={{width: '500px'}}>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                    >
                                    <Typography>Как получить займ?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Какие требования к заёмщику?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Какие условия выдачи займов?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Как проходит процесс оформления заявки?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Какие требования к заёмщику?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Какие требования к заёмщику?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Какие требования к заёмщику?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                    expandIcon={<MdExpandMore style={{ fontSize: "2.5rem" }} />}
                                    aria-controls="panel2a-content"
                                    id="panel2a-header"
                                    >
                                    <Typography>Какие требования к заёмщику?</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Typography>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                                    </Typography>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Answers