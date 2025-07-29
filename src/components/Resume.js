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
import ncino from '../assets/img/ncino.png';
import amex from '../assets/img/amex.png';
import capone from '../assets/img/capital-one.png';

const Styles = styled.div`

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
    padding-top: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .arrow-down {
    color: aliceblue;
    font-size: 300%;
    text-align: center;
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
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={capone} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>Capital One</h4>
                            <h5>Senior Product Manager</h5>
                            <h6>New York, NY &nbsp; |  &nbsp; Mar 2025 - Present</h6>
                            <p>
                                Lead product strategy to accelerate customer growth across Capital One’s Retail Bank, with a focus on onboarding, funding, and engagement. 
                                Own end-to-end experiences across Web, iOS, and Android platforms, as well as the backend systems and APIs that support them. Currently leading 
                                onboarding initiatives for customers transitioning from a newly integrated external banking platform, ensuring a seamless and scalable experience 
                                that deepens product adoption and long-term engagement.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={amex} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>American Express</h4>
                            <h5>Senior Associate Product Manager</h5>
                            <h6>New York, NY &nbsp; |  &nbsp; Sep 2023 - Mar 2025</h6>
                            <p>
                                Led product strategy and execution for digital card acquisition and orchestration experiences across Canada, Mexico, and the Latin America & 
                                Caribbean regions. Owned a portfolio of 48+ card products across consumer and small business segments, including partner channels. 
                                Collaborated with cross-functional teams to prioritize initiatives that improved application decisioning, optimized user journeys, 
                                and scaled acquisition across diverse international markets.
                            </p>

                            <br />

                            <h5>Associate Product Manager</h5>
                            <h6>New York, NY &nbsp; |  &nbsp; Jun 2021 - Sep 2023</h6>
                            <p>
                                Served as Product Owner for digital acquisition experiences across the UK, Norway, Canada, and Mexico, supporting 77+ card products and 
                                partner channels. Defined and delivered customer-centric features to enhance acquisition funnels. Led an agile team of 11, using experimentation 
                                and data to drive continuous improvements in conversion and user experience.
                            </p>
                        </Col>
                        
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={ncino} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>nCino</h4>
                            <h5>Product Management Intern</h5>
                            <h6>Wilmington, NC &nbsp; |  &nbsp; Oct 2020 - Dec 2020</h6>
                            <p>
                                Supported roadmap planning and agile delivery for a high-impact platform feature managing $3.2T+ in assets across 290+ financial institutions. 
                                Defined epics and user stories for the Fall release, aligning closely with engineering and QA teams. Initiated the development of an internal 
                                testing framework that improved accessibility audit efficiency by 75%, enabling higher product quality and compliance readiness.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={nyuStern} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>Coronavirus Response Fellowship</h4>
                            <h5>Team Lead</h5>
                            <h6>New York, NY &nbsp; |  &nbsp; Jun 2020 - Aug 2020</h6>
                            <p>
                                Led a cross-functional team to design and prototype a student-focused job search platform during the COVID-19 pandemic. 
                                Spearheaded customer discovery, conducted market research with 150+ survey responses, and translated insights into MVP requirements. 
                                Oversaw product development from ideation through UX design, using lean startup methodologies to iterate quickly and validate user pain points.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={fhlHealth} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>FHL Health, LLC</h4>
                            <h5>Project Management Intern</h5>
                            <h6>Bethesda, MD &nbsp; |  &nbsp; May 2019 - Sep 2019</h6>
                            <p>
                                Managed two FDA-bound clinical studies and led the development of an internal automation tool.
                                Oversaw a team of programmers to deliver complete clinical trial submission packages on time and under budget. 
                                Directed the creation of an automated case report form generator, reducing generation time by 300%. Additionally, 
                                prepared and presented two RFQs that secured over $300K in new contracts by outlining pricing, scope, and phased delivery plans.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={essentialSoft} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>Essential Software, Inc.</h4>
                            <h5>Software Engineering Intern</h5>
                            <h6>Rockville, MD &nbsp; |  &nbsp; Jun 2018 - Aug 2018</h6>
                            <p>
                                Designed and implemented a database workflow platform to streamline access to 8,000+ research articles. 
                                Automated submission and approval flows using a mySQL database integrated with ServiceNow, reducing manual 
                                intervention and enabling more scalable knowledge sharing. Delivered an improved user experience for scientists 
                                through simplified data entry and publication processes.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={ipsos} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>Ipsos</h4>
                            <h5>Marketing Analyst Intern</h5>
                            <h6>Shanghai, CN &nbsp; |  &nbsp; Jun 2017 - Aug 2017</h6>
                            <p>
                                Conducted competitive feature analysis of telematics systems that led to client revisions across 10 product features. 
                                Delivered insights via a strategic research report comparing competitor offerings, user preferences, and pricing—enabling 
                                the client to better align their product roadmap with customer needs and market gaps.
                            </p>
                        </Col>
                    </Row>
                </Container>

                <Container id="" className="bg-light">
                    <Row>
                        <Col className="h-100 bg-light align-self-center">
                            <Image src={nih} fluid></Image>
                        </Col>
                        <Col sm={{ span: 8, offset: 1 }}>
                            <h4>National Institutes of Health</h4>
                            <h5>Database Administrator Intern</h5>
                            <h6>Bethesda, MD &nbsp; |  &nbsp; Jun 2016 - Aug 2016</h6>
                            <p>
                                Redesigned and implemented a genome browser to improve accessibility to critical genomic datasets. 
                                The new interface enabled enhanced customization and usability, resulting in a 250% increase in researcher 
                                productivity and data analysis efficiency.
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
                            <Col className="h-100 school align-self-center">
                                <Image src={nyuStern} fluid></Image>
                            </Col>
                            <Col sm={{ span: 8, offset: 1 }}>
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