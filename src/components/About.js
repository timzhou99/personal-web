import React, { Component, useState } from 'react'
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";

import Fade from 'react-reveal/Fade';
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import { SocialIcon } from 'react-social-icons';

import mtnBKG from '../assets/img/about-bkg.jpg';
import timZhou from "../assets/img/Timothy_Zhou_Headshot.jpg";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Styles = styled.div`

    .jumbotron {
        background-image: url(${mtnBKG});
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
        display: flex;
        min-height: 30vh;
        align-items: center;
        justify-content: center;
        font-size: 4.5vh;
    }
    
    .arrow-down {
        color: aliceblue;
        font-size: 300%;
        text-align: center;
        margin-bottom: 10%;
    }

    .container {
      padding-top: 10vh;
    }
    
    br {
      padding-bottom: 20vh;
    }
    
    .header {
      padding-top: 15vh;
      margin-right: 30%;
      margin-left: 30%;
      padding-bottom: 5vh;
    }
    
    .col {
      padding-right: 5vw;
    }
    
    .row {
      padding-bottom: 4vh;
    }
    
    h5 {
      padding-top: 2vh;
    }
    
    h3 {
      font-size: 5vh;
      padding-bottom: 2vh;
    }
    
    .icons {
      margin-left: 1vw;
    }
    
    .connect {
      padding-bottom: 10vh;
    }
`;

export default class About extends Component {


    componentDidMount() {
        document.title = 'About | Timothy Zhou';
    }

    render() {

        return (


            <Styles>

                <NavigationBar/>

                <Jumbotron className="jumbotron-fluid">

                    <Fade bottom>

                        <div className="header">
                            <h1>Aspiring product manager who's Detail-Oriented, Tech-Savvy, & Analytically Focused</h1>
                        </div>

                        <Link class="arrow-down link" to="about-me" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>

                    </Fade>

                </Jumbotron>

                <body className="bg-light">

                    <Container id="about-me" className="bg-light">

                        <Row>
                            <Col className="text-left">
                                <h2>About Tim</h2>
                                <br />
                                <p>
                                    I am currently a senior at NYU Stern studying Finance and Management with a minor
                                    in Computer Science. Throughout my years of study and internships, I have gained experience in a wide
                                    range of disciplines including entrepreneurship, engineering, data analytics, financial modeling, and
                                    product development.
                                </p>
                                <p>
                                    As a former product lead, software engineer, project manager, and marketing analyst, I understand
                                    what it means to build products that are high-quality, cohesive, and scalable. I have built
                                    awareness for the small details, which is helpful for working through requirements, visualizations,
                                    models, and prototypes with cross-functional team members. Therefore, I feel at ease working with data analysts,
                                    software engineers, creatives, and other business-oriented individuals. I can appropriately approach problem-solving
                                    and actively maintain a holistic vision through various phases.
                                </p>
                                <p>
                                    These experiences have given me unique insights into the
                                    product lifecycle and have allowed me to think through the entire customer journey while
                                    challenging my own assumptions.
                                </p>

                                <br />

                            </Col>
                            <Col>
                                <Image src={timZhou} fluid></Image>
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <h2>Skills</h2>
                                <h5>Notable Competencies</h5>
                                <Button className="mr-1 mb-1" variant="primary">Problem Solving</Button>
                                <Button className="mr-1 mb-1" variant="primary">Product Lifecycle</Button>
                                <Button className="mr-1 mb-1" variant="primary">Analytics & Business Intelligence</Button>
                                <Button className="mr-1 mb-1" variant="primary">Data Analysis</Button>
                                <Button className="mr-1 mb-1" variant="primary">Data Visualization</Button>
                                <Button className="mr-1 mb-1" variant="primary">Market Research</Button>
                                <Button className="mr-1 mb-1" variant="primary">Engineering Principles</Button>
                                <Button className="mr-1 mb-1" variant="primary">Digital Marketing</Button>
                                <Button className="mr-1 mb-1" variant="primary">Design & UX Principles</Button>
                                <Button className="mr-1 mb-1" variant="primary">SaaS Principles</Button>

                                <h5>Analytics & Data Tools</h5>
                                <Button className="mr-1 mb-1" variant="primary">Python</Button>
                                <Button className="mr-1 mb-1" variant="primary">Excel</Button>
                                <Button className="mr-1 mb-1" variant="primary">Google Sheets</Button>
                                <Button className="mr-1 mb-1" variant="primary">SAS</Button>
                                <Button className="mr-1 mb-1" variant="primary">Google Analytics</Button>

                                <h5>Product & Creative Tools</h5>
                                <Button className="mr-1 mb-1" variant="primary">Adobe XD</Button>
                                <Button className="mr-1 mb-1" variant="primary">Adobe Photoshop</Button>
                                <Button className="mr-1 mb-1" variant="primary">Adobe Illustrator</Button>
                                <Button className="mr-1 mb-1" variant="primary">Adobe Premiere Pro</Button>
                                <Button className="mr-1 mb-1" variant="primary">Adobe After Effects</Button>
                                <Button className="mr-1 mb-1" variant="primary">Canva</Button>

                                <h5>Marketing & Organizational Tools</h5>
                                <Button className="mr-1 mb-1" variant="primary">G Suite</Button>
                                <Button className="mr-1 mb-1" variant="primary">Slack</Button>
                                <Button className="mr-1 mb-1" variant="primary">Discord</Button>
                                <Button className="mr-1 mb-1" variant="primary">ServiceNow</Button>
                                <Button className="mr-1 mb-1" variant="primary">SCRUM & Agile Methodology</Button>

                                <h5>Languages & Syntax</h5>
                                <Button className="mr-1 mb-1" variant="primary">SQL (MySQL)</Button>
                                <Button className="mr-1 mb-1" variant="primary">MongoDB</Button>
                                <Button className="mr-1 mb-1" variant="primary">Python</Button>
                                <Button className="mr-1 mb-1" variant="primary">Javascript</Button>
                                <Button className="mr-1 mb-1" variant="primary">Java</Button>
                                <Button className="mr-1 mb-1" variant="primary">HTML/CSS</Button>
                                <Button className="mr-1 mb-1" variant="primary">ReactJS</Button>
                                <Button className="mr-1 mb-1" variant="primary">NodeJS</Button>
                                <Button className="mr-1 mb-1" variant="primary">ExpressJS</Button>
                                <Button className="mr-1 mb-1" variant="primary">Git</Button>
                                <Button className="mr-1 mb-1" variant="primary">RegEx</Button>
                                <Button className="mr-1 mb-1" variant="primary">JSON</Button>

                            </Col>
                        </Row>

                    </Container>

                </body>

                <body className="bg-light">

                    <Container className="connect">
                        <Row>
                            <Col className="text-center">
                                <h3>Let's Connect</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col className="text-center">
                                <SocialIcon className="" url="https://linkedin.com/in/tim-zhou" />
                                <SocialIcon className="icons" url="https://github.com/timzhou99" />
                                <SocialIcon className="icons" url="https://www.instagram.com/timzhou99" />
                            </Col>
                        </Row>

                        <Row>
                            <Col className="text-center">
                                <Button size="lg" href="mailto:tim@timothyzhou.com" variant="info">Email Me</Button>
                            </Col>
                        </Row>

                    </Container>

                </body>




            </Styles>

        )
    }

}