import React, { Component } from 'react'
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";
import {Jumbotron} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import Button from "react-bootstrap/Button";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import flexbot from "../assets/img/flexbot.png";
import freeTix from "../assets/img/freetix-mockup.png";
import projects from "../assets/img/projects.jpg";

const Styles = styled.div`

    .jumbotron {
        background-image: url(${projects});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        text-align: center;
        height: 100vh;
        margin-bottom: 0;
    }
    
    .freetix {
        background-image: url(${freeTix});
    }
    
    .flexbot {
        background-image: url(${flexbot});
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
    
    h2 {
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
    
    h3 {
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
    }

    .container {
        min-height: 10vh;
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
    
    p {}
    
    .icons {
      margin-left: 1vw;
    }
    
    .jumButton {
        margin-right: 1vw;
        margin-bottom: 20px;
    }
   
`;

export default class Projects extends Component {

    componentDidMount() {
        document.title = 'Projects | Timothy Zhou';
    }

    render() {
        return (
            <Styles>

                <NavigationBar/>

                <Jumbotron className="jumbotron-fluid">

                    <Fade bottom>

                        <h1 class="text-center">here's what i've been up to</h1>

                        <Link class="arrow-down link" to="most-recent" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>

                    </Fade>

                </Jumbotron>

                <Jumbotron id="most-recent" className="jumbotron-fluid flexbot">

                    <Fade bottom>

                        <div className="header">
                            <h2>FlexBot</h2>
                            <h3>A Queue Management Discord Bot</h3>

                            <Button className="" size="lg" variant="primary" href="/flexbot">View Project Page</Button>
                        </div>

                        {/*<Link class="arrow-down link" to="about" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>*/}

                    </Fade>

                </Jumbotron>

                <Jumbotron id="" className="jumbotron-fluid freetix">

                    <Fade bottom>

                        <div className="header">
                            <h2>FreeTix</h2>
                            <h3>An Event Management and Ticketing Platform</h3>

                            <Button className="" size="lg" variant="primary" href="/freetix">View Project Page</Button>
                        </div>

                        {/*<Link class="arrow-down link" to="about" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>*/}

                    </Fade>

                </Jumbotron>

            </Styles>
        )
    }

}