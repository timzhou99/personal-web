import React, { Component } from 'react'
import styled from "styled-components";
import { Container, Image } from 'react-bootstrap';
import {NavigationBar} from "./NavigationBar";

const Styles = styled.div`
  body {
    background-color: #f7eeef;
    min-width: 100%;
  }
  h2 {
    text-align: center;
    padding-top: 10%;
    font-family: 'Spartan';
  }
  h5 {
    text-align: center;
    padding-top: 2%;
    font-family: 'Spartan';
  }
`;

export default class NoMatch extends Component {

    componentDidMount() {
        document.title = 'Timothy Zhou';
    }

    render() {
        return (
            <Styles>

                <NavigationBar />

                <body>
                    <h2>Cooking up something good, stay tuned!</h2>
                    <h5>- Timothy Zhou</h5>
                    <Image className="img-fluid rounded mx-auto d-block" src={require("../assets/img/cooking.gif")} fluid />
                </body>
            </Styles>
        )
    }

}