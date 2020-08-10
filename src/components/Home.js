import React, { Component } from 'react'
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Fade from 'react-reveal/Fade';

import { Nav, Row, Col } from 'react-bootstrap';

import homeBkgImg from '../assets/img/home-bkg.JPG';
import {NavigationBar} from "./NavigationBar";

const Styles = styled.div`
  .main-header {
    background-image: url(${homeBkgImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width: 100%;
    height:100vh;  /* responsive height */
  }
  h1 {
    padding-top: 40%;
    font-family: 'Spartan';
    font-weight: bold;
    text-align: center;
    color: aliceblue;
  }
  h5 {
    text-align: center;
    padding-top: 5%;
    font-family: 'Spartan';
    color: aliceblue;
  }
  .nav {
    padding-top: 5%;
    font-family: 'Spartan';
  }
  
  @media only screen and (min-width: 768px) {
    h1, .nav, h5 {
      padding-left: 20%;
    }
  }
  
`;

export default class NoMatch extends Component {

    componentDidMount() {
        document.title = 'Timothy Zhou';
    }

    render() {
        return (
            <Styles>

                <div className='main-header'>

                    <NavigationBar/>

                    <Row className="h-50 align-items-center mx-auto">
                        <Col className="col-sm-4">
                            <Fade left>
                                <h1>Timothy Zhou</h1>
                                <h5>"All our dreams can come true, if we have the courage to pursue them." - Walt Disney</h5>
                            </Fade>
                            <Fade bottom>
                                <Nav className="justify-content-center" activeKey="/home">
                                    <Nav.Item>
                                        <Nav.Link href="/resume">My Experiences &nbsp;<FontAwesomeIcon icon={faChevronRight}/></Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link href="/about">About Me &nbsp;<FontAwesomeIcon icon={faChevronRight}/></Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Fade>
                        </Col>
                    </Row>

                </div>
            </Styles>
        )
    }

}
