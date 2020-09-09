import React from 'react';
import {Image, Nav, Navbar} from 'react-bootstrap';
import styled from 'styled-components';


const Styles = styled.div`
  .navbar {
    opacity: 0.85;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    font-family: Spartan;
    margin-right: 30px;
    
    &:hover {
      color: white;
    }
  }
  .navbar-brand {
    font-size: 25px;
    font-family: Cantarell;
    padding-left: 2.5vh;
    
  }
  .image {
    padding-left: 10%;
  }
  
 
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar fixed="top" bg="dark" expand="lg" >
            <Navbar.Brand href="/">TIMOTHY ZHOU</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item class="px-auto"><Nav.Link href="/resume">Resume</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href="/projects">Projects</Nav.Link></Nav.Item>
                    {/*<Nav.Link href="/films">Films</Nav.Link></Nav.Item>*/}
                    {/*<Nav.Item><Nav.Link href="/photography">Photography</Nav.Link></Nav.Item>*/}
                    <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
)