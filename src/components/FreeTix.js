import React, { Component } from 'react'
import styled from "styled-components";
import {NavigationBar} from "./NavigationBar";
import {Col, Container, Jumbotron, Row} from "react-bootstrap";
import Fade from "react-reveal/Fade";
import {Link} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowCircleDown} from "@fortawesome/free-solid-svg-icons";

import freeTix from "../assets/img/freetix-mockup.png";
import eventsCreate from "../assets/img/events-create.PNG";
import eventsManage from "../assets/img/events-manage.PNG";
import eventsHosting from "../assets/img/events-hosting.PNG";
import eventsEventID from "../assets/img/events-eventID.PNG";
import events from "../assets/img/events.PNG";
import ticketsTicketID from "../assets/img/tickets-ticketID.PNG";
import tickets from "../assets/img/tickets.PNG";
import sitemap from "../assets/img/sitemap.PNG";

import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";



const Styles = styled.div`

    .jumbotron {
        background-image: url(${freeTix});
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

export default class FreeTix extends Component {

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
                            <h1>FreeTix</h1>
                            <h2>An Event Management and Ticketing Platform</h2>

                            <Button className="jumButton" size="lg" variant="warning" href="https://github.com/timzhou99/freetix-app" target="_blank">Source Code</Button>
                            <Button size="lg" variant="success" href="https://freetix.herokuapp.com/" target="_blank" className="jumButton">Live Demo</Button>
                        </div>

                        <Link class="arrow-down link" to="about" smooth={true}><FontAwesomeIcon icon={faArrowCircleDown}/></Link>

                    </Fade>

                </Jumbotron>

                <body className="bg-light">

                <Container id="about" className="bg-light">

                    <Row>
                        <Col>
                            <h3>About FreeTix</h3>
                            <p>
                                Tired of paying fees when buying tickets for your favorite concert or event? Look no
                                further because FreeTix is here for you!
                            </p>
                            <p>
                                FreeTix is a commission-free event management and ticketing web platform that is designed
                                for both event planners and event go-ers that allow users to plan events, sell and buy tickets,
                                as well as search for events in their cities. Each user (through registration and login authentication)
                                is able to manage their own events and view all the tickets they have purchased.
                            </p>
                            <p>
                                This web application was my final project for the Applied Internet Technology course at New York University.
                            </p>

                            <br />

                            <h3>Languages & Technologies Used</h3>
                            <ul>
                                <li>MongoDB</li>
                                <li>ExpressJS</li>
                                <li>NodeJS</li>
                                <li>EJS (Embedded JavaScript templates)</li>
                                <li>Passport.js</li>
                                <li>bcrypt</li>
                            </ul>

                            <h3>Data Models</h3>

                            <p>The application will store Users, Events, and Tickets</p>
                            <ul>
                                <li>users can manage multiple events (each event tagged to the user by a reference)</li>
                                <li>each event can have multiple tickets (each ticket tagged to an event by a reference)</li>
                                <li>users can have multiple tickets (each ticket is tagged to a user by a reference)</li>
                            </ul>

                            <br />
                            <p className="codeHead">An Example User:</p>

<div className="code"><pre><code>{`
    {
      email: "tim@gmail.com",
      password: // a password hash,
      
      name: "Timothy Zhou",
      
      events: // an array of references to Event documents
      tickets: //an array of references to Ticket documents
      
      userCity: "New York",
      userState: "New York"
      
      _id: //MongoDB generated ID
    }
    
`}</code></pre></div>

                            <br />

                            <p className="codeHead">An Example Event with a List of Ticket IDs:</p>

<div className="code"><pre><code>{`
    {
      eventManager: // a reference to a User object
      
      eventName: "Travis Scott Concert",
      eventDescription: "The best event of the month!",
      eventPicture: "link.to.image.com",
      eventActive: true,
      
      eventStart: //datetime the event starts
      eventEnd: //datetime the event ends
      
      eventAddress: "40 W 4th Street",
      eventCity: "New York",
      eventState: "New York",
    
      maxQuantity: 500,
      currentQuantity: 346,
      tickets: [
        { ticketID: "UNIQUE KEY", ticketType: "General Admission", ticketValue: 150.00},
        { ticketID: "UNIQUE KEY", ticketType: "VIP Admission", ticketValue: 350.00},
      ],
      
      _id: //MongoDB generated ID
    }
    
`}</code></pre></div>

                            <br />

                            <p className="codeHead">An Example Ticket</p>

<div className="code"><pre><code>{`
{
  ticketHolder: // a reference to a User object
  eventID: "key that references the ticket to an Event",
  
  ticketType: "General Admission",
  ticketValue: 150.00,
  ticketStatus: "Cancelled",

  _id: //MongoDB generated ID
}

`}</code></pre></div>

                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Wireframes</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h6>/events/create - page for creating a new event</h6>
                            <Image src={eventsCreate} fluid></Image>
                        </Col>
                        <Col>
                            <h6>/events/eventID/manage - page for managing an existing event</h6>
                            <Image src={eventsManage} fluid></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>/events/hosting - page to view and manage all events the user is hosting</h6>
                            <Image src={eventsHosting} fluid></Image>
                        </Col>
                        <Col>
                            <h6>/events/eventID - page to view details of an event & option to buy tickets</h6>
                            <Image src={eventsEventID} fluid></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>/events - page to view all the events in the state and ability to filter them</h6>
                            <Image src={events} fluid></Image>
                        </Col>
                        <Col>
                            <h6>/tickets/ticketID - page to view details of a ticket and option to cancel</h6>
                            <Image src={ticketsTicketID} fluid></Image>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h6>/tickets - page to view all tickets purchased</h6>
                            <Image src={tickets} fluid></Image>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Sitemap</h3>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Image src={sitemap} fluid></Image>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>User Stories</h3>
                            <ol>
                                <li>as non-registered user, I can register for a new account on the site</li>
                                <li>as a user, I can log in to the site</li>
                                <li>as a user, I can create a new event</li>
                                <li>as a user, I can modify an existing event</li>
                                <li>as a user, I can view all of the events I've created in a single list</li>
                                <li>as a user, I can view all of the tickets I've purchased in a single list</li>
                                <li>as a user, I can view all of the events in my area or in the United States</li>
                                <li>as a user, I can filter events based off of keywords in the event title</li>
                                <li>as a user, I can view the details of an event</li>
                                <li>as a user, I can purchase a ticket</li>
                                <li>as a user, I can cancel my ticket</li>
                                <li>as a user, I can view my ticket</li>
                            </ol>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <h3>Research Topics</h3>
                            <ol>
                                <li>Integrate user authentication</li>
                                <ul>
                                    <li>I'm going to be using PassportJS and bcrypt for user authentication</li>
                                    <li>It's a middleware for NodeJS so it is very flexible to be used in an Express-based app</li>
                                </ul>
                                <li>Automated ESLint with gulp</li>
                                <ul>
                                    <li>Will be using gulp to automate work tests</li>
                                    <li>ESLint will run everytime a file change is detected in the directory</li>
                                </ul>
                                <li>Implement a QR Code module for server side functions</li>
                                <ul>
                                    <li>Will generate a QR code image for every ticket created (associated with the ticketID)</li>
                                    <li>This will be helpful in future releases of the application to 'check people into an event'</li>
                                </ul>
                            </ol>
                        </Col>
                    </Row>

                </Container>

                </body>


            </Styles>
        )
    }

}