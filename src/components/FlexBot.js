import React, { Component } from 'react'
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import flexbot from "../assets/img/flexbot.png";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import wlb from "../assets/img/wlb.PNG";
import wlb2 from "../assets/img/wlb2.PNG";
import wlj from "../assets/img/wlj.PNG";
import wlr from "../assets/img/wlr.PNG";
import wll from "../assets/img/wll.PNG";
import wlw from "../assets/img/wlw.PNG";

const Styles = styled.div`

    .jumbotron {
        background-image: url(${flexbot});
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
        padding-top: 15vh;
        padding-bottom: 2.5vh;
        align-items: center;
        justify-content: center;
        font-size: 4.5vh;
    }
    
    h2 {
        font-family: 'Spartan';
        font-weight: normal;
        text-align: center;
        color: aliceblue;
        display: flex;
        padding-bottom: 3vh;
        align-items: center;
        justify-content: center;
        font-size: 2.5vh;
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
   
    
    .row {
      padding-bottom: 4vh;
    }
    
    h5 {
      padding-top: 2vh;
    }
    
    h3 {
      font-size: 3.5vh;
      padding-bottom: 1vh;
      border-bottom: 1px solid #D3D3D3;
      margin-bottom: 2vh;
    }
    
    p {}
    
    .icons {
      margin-left: 1vw;
    }
    
    .jumButton {
    
        margin-right: 1vw;
        margin-bottom: 20px;

    }
    
    .codeHead {
        font-weight: bold;
    }
    
    .code {
      background-color: whitesmoke;
    }
   
`;

export default class FlexBot extends Component {

    componentDidMount() {
        document.title = 'FreeTix | Timothy Zhou';
    }

    render() {
        return (
            <Styles>

                <NavigationBar/>

                <Jumbotron className="jumbotron-fluid">

                    <Fade bottom>

                        <div className="header">
                            <h1>FlexBot</h1>
                            <h2>A Queue Management Discord Bot</h2>

                            <Button className="jumButton" size="lg" variant="warning" href="https://github.com/timzhou99/flexbot" target="_blank">Source Code</Button>
                            <Button size="lg" variant="success" href="https://discord.com/oauth2/authorize?client_id=755262389728837633&scope=bot&permissions=2147483647" target="_blank" className="jumButton">Invite to Server</Button>
                        </div>

                        <Link class="arrow-down link" to="about" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>

                    </Fade>

                </Jumbotron>

                <body className="bg-light">

                <Container id="about" className="bg-light">

                    <Row>
                        <Col>
                            <h3>About FlexBot</h3>
                            <p>
                                The idea of having a queue management bot for Discord came from a problem a group of my friends and I faced
                                when hosting Among Us game sessions during the COVID-19 pandemic. Our group was usually more than 10 individuals
                                and we had no easy and efficient system to keep track on who RSVP'd first. Therefore, during a weekend, I crafted up FlexBot
                                to provide an efficient queue management system that can be used for any purpose!
                            </p>
                            <p>
                                FlexBot is a queue management bot designed as an addition to Discord servers that allows users to create, manage, and join
                                queues within a server.
                            </p>

                            <br />

                            <h3>Languages & Technologies Used</h3>
                            <ul>
                                <li>MongoDB</li>
                                <li>ExpressJS</li>
                                <li>NodeJS</li>
                                <li>DiscordJS</li>
                                <li>Heroku</li>
                                <li>GitHub</li>
                            </ul>

                            <br />

                            <h3>Data Models</h3>

                            <p>The application will store Waitlists</p>
                            <ul>
                                <li>users can manage multiple waitlists (each waitlist is tagged to the server by the guildID)</li>
                                <li>each waitlist can have multiple users (each user is linked to the waitlist by the userID)</li>
                                <li>users can be in multiple waitlists</li>
                            </ul>

                            <br />
                            <p className="codeHead">An Example Waitlist:</p>

                            <div className="code"><pre><code>{`
    {
      guildID: "341132801182737016",
      
      waitlistName: "amongus",
      waitlistMembers: ["195328212937605120", "92755446342885376"], 
      
      _id: //MongoDB generated ID
    }
    
`}</code></pre></div>

                            <br />

                        </Col>
                    </Row>


                    <Row>
                        <Col>
                            <h3>User Stories</h3>
                            <ol>
                                <li>as a user, I can create a waitlist</li>
                                <li>as a user, I can delete a waitlist</li>
                                <li>as a user, I can clear a waitlist</li>
                                <li>as a user, I can join a waitlist</li>
                                <li>as a user, I can 'pop' the user at the front of the waitlist</li>
                                <li>as a user, I can view the user at the front of the waitlist without removing them</li>
                                <li>as a user, I can remove a user from the waitlist</li>
                                <li>as a user, I can broadcast a message to all users on the waitlist</li>
                                <li>as a user, I can view all the waitlist commands available to me</li>
                            </ol>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>FlexBot in Action</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h6>!wlb - broadcasts a message to all users on the waitlist</h6>
                            <Image src={wlb} fluid></Image>
                        </Col>
                        <Col>
                            <h6>!wlb - broadcasts a message to all users on the waitlist</h6>
                            <Image src={wlb2} fluid></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>!wlr - removes the user from the waitlist</h6>
                            <Image src={wlr} fluid></Image>
                        </Col>
                        <Col>
                            <h6>!wlw - clears all users from the waitlist</h6>
                            <Image src={wlw} fluid></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>!wlj - adds the user to the waitlist with a reply of their current position</h6>
                            <Image src={wlj} fluid></Image>
                        </Col>
                        <Col>
                            <h6>!wll - lists all of the users currently on the waitlist and their positions</h6>
                            <Image src={wll} fluid></Image>
                        </Col>
                    </Row>

                </Container>

                </body>


            </Styles>
        )
    }

}