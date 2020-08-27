import React, { Component } from 'react'
import Image from 'react-bootstrap/Image'
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
import {Jumbotron, Nav, NavLink, Container, Row, Col} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link, animateScroll as scroll } from "react-scroll";

import nyc from '../assets/img/nyc-wallpaper.jpg';
import nyuStern from '../assets/img/nyu-stern.png';
import fhlHealth from '../assets/img/fhl-health.png';
import essentialSoft from '../assets/img/essential-soft.png';
import ipsos from '../assets/img/ipsos.png';
import nih from '../assets/img/nih.png';

const Styles = styled.div`

    html {
      scroll-behavior: smooth;
    }

  .jumbotron {
    background-image: url(${nyc});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    text-align: center;
    height: 100vh;
    margin-bottom: 0;
  }
  
   h1 {
    font-family: 'Spartan';
    font-weight: bold;
    text-align: center;
    color: aliceblue;
    min-height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow-down {
    color: aliceblue;
    font-size: 300%;
    text-align: center;
    padding-top: -200vh;
  }
  
  .container {
    min-height: 10vh;
    padding-top: 10vh;
  }
  .row {
    min-height: 100px;
  }
  .col {
    align-items: center;
    justify-content: center;
  }
  
  .detail {
    padding-left: 10vh;
  }
  
  h4 {
    padding-bottom: 1.5vh;
  }
  
  .school {
    background-color: whitesmoke;
  }

`;

export default class Resume extends Component {

    componentDidMount() {
        document.title = 'Resume | Timothy Zhou';
    }

    render() {
        return (
            <Styles>

                <NavigationBar/>

                <Jumbotron className="jumbotron-fluid">

                    <Fade bottom>

                        <h1 class="text-center">here's what i've done so far</h1>
                        <Link class="arrow-down link" to="latest-experience" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>

                    </Fade>

                </Jumbotron>

                <body className="bg-light">

                    <Container id="latest-experience" className="bg-light">
                        <Row>
                            <Col sm={4} className="h-100 bg-light align-self-center">
                                <Image src={nyuStern} fluid></Image>
                            </Col>
                            <Col sm={8} className="my-auto detail">
                                <h4>Coronavirus Response Fellowship</h4>
                                <h5>Team Lead</h5>
                                <h6>New York, NY &nbsp; |  &nbsp; Jun 2020 - Aug 2020</h6>
                                <p>
                                    Amid the Coronavirus pandemic, I led a team of fellow NYU undergraduates to create
                                    an entrepreneurial venture to help solve an issue that the COVID-19 pandemic has
                                    brought onto society. As a team lead, I spear-headed and managed the concept-to-prototype of a job search
                                    platform that simplifies and personalizes the job application process for students.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="" className="bg-light">
                        <Row>
                            <Col sm={4} className="h-100 bg-light align-self-center">
                                <Image src={fhlHealth} fluid></Image>
                            </Col>
                            <Col sm={8} className="my-auto detail">
                                <h4>FHL Health, LLC</h4>
                                <h5>Project Management Intern</h5>
                                <h6>Bethesda, MD &nbsp; |  &nbsp; May 2019 - Sep 2019</h6>
                                <p>
                                    As a project management intern at FHL Health, I managed two biostatistical studies and the development of
                                    one internal product. For the two clinical studies, I managed a team of statistical programmers
                                    to develop and compile complete clinical trial submission packages for the FDA under budget.
                                    In addition, I coordinated and managed the development of an internal automated case report form generator
                                    that decreased generation times by 300%.

                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="" className="bg-light">
                        <Row>
                            <Col sm={4} className="h-100 bg-light align-self-center">
                                <Image src={essentialSoft} fluid></Image>
                            </Col>
                            <Col sm={8} className="my-auto detail">
                                <h4>Essential Software, Inc.</h4>
                                <h5>Software Engineering Intern</h5>
                                <h6>Rockville, MD &nbsp; |  &nbsp; Jun 2018 - Aug 2018</h6>
                                <p>
                                    As a software engineering intern at Essential Software, I developed a database management
                                    system that provides scientists with simple access to 8,000+ knowledge articles. I implemented
                                    a mySQL database with a ServiceNow instance that automates the workflow of each database submission
                                    to improve user communication and provide a straightforward process for scientists to review and
                                    publish various knowledge articles.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="" className="bg-light">
                        <Row>
                            <Col sm={4} className="h-100 bg-light align-self-center">
                                <Image src={ipsos} fluid></Image>
                            </Col>
                            <Col sm={8} className="my-auto detail">
                                <h4>Ipsos</h4>
                                <h5>Marketing Analyst Intern</h5>
                                <h6>Shanghai, CN &nbsp; |  &nbsp; Jun 2017 - Aug 2017</h6>
                                <p>
                                    As a marketing analyst intern at Ipsos, I collaborated alongside the automotive team on
                                    projects for multiple OEMs to help identify their market segments and value propositions.
                                    I also evaluated aspects of competing telematics systems in contrast to the client's system through
                                    user focus groups and market research in order to identify features for redesign and implementation.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="" className="bg-light">
                        <Row>
                            <Col sm={4} className="h-100 bg-light align-self-center">
                                <Image src={nih} fluid></Image>
                            </Col>
                            <Col sm={8} className="my-auto detail">
                                <h4>National Institutes of Health</h4>
                                <h5>Database Administrator Intern</h5>
                                <h6>Bethesda, MD &nbsp; |  &nbsp; Jun 2016 - Aug 2016</h6>
                                <p>
                                    As a database administrator intern at NIH, I transformed and implemented a user-friendly
                                    genome browser to facilitate efficient access to various genomic data sets, providing scientists
                                    with more features and customizations leading to a 250% increase in analysis capability and efficiency.
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container>

                    </Container>

                </body>

                <body class="school">

                    <Container className="school">
                        <Row>
                            <Col sm={4} className="h-100 school align-self-center">
                                <Image src={nyuStern} fluid></Image>
                            </Col>
                            <Col sm={8} className="my-auto detail">
                                <h4>New York University, Stern School of Business</h4>
                                <h6>New York, NY &nbsp; |  &nbsp; Class of 2021</h6>
                                <h7>Bachelor of Science in Business</h7>
                                <br /> <br />
                                <h7>Concentrations in Finance and Management & Organizations</h7>
                                <br />
                                <h7>Minor in Computer Science</h7>
                            </Col>
                        </Row>
                    </Container>

                    <Container>

                    </Container>

                </body>



            </Styles>
        )
    }

}