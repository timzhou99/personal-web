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

                        <h1 class="text-center">here's who I am</h1>
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
                                    Tim is currently an Associate Product Manager at American Express working on the digital card acquisition experiences 
                                    for the United Kingdom and Norway, Consumer and Small Business markets. 
                                    Throughout his years of study and experiences, he has gained an understanding in a wide
                                    range of disciplines including entrepreneurship, software engineering, data analytics, financial modeling, and
                                    product development.
                                </p>
                                <p>
                                    As a former product lead, software engineer, project manager, and marketing analyst, he understands
                                    what it means to build products that are high-quality, cohesive, and scalable. He has built
                                    awareness for the small details, which is helpful for working through requirements, visualizations,
                                    models, and prototypes with cross-functional team members. Therefore, he feels at ease working with data analysts,
                                    software engineers, creatives, and other business-oriented individuals. Tim can appropriately approach problem-solving
                                    and actively maintain a holistic vision through various phases.
                                </p>
                                <p>
                                    These experiences have given him unique insights into the
                                    product lifecycle and have allowed him to think through the entire customer journey while
                                    challenging his own assumptions.
                                </p>

                                <br />

                            </Col>
                            <Col>
                                <br /> <br /> 
                                <Image src={timZhou} fluid></Image>
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
                                <SocialIcon className="" url="https://linkedin.com/in/tim-zhou" target="_blank"/>
                                <SocialIcon className="icons" url="https://github.com/timzhou99" target="_blank"/>
                                <SocialIcon className="icons" url="https://www.instagram.com/timzhou99" target="_blank"/>
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