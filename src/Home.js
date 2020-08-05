import React from 'react'
import styled from "styled-components";
import { Container, Image } from 'react-bootstrap';

const Styles = styled.div`
  html {
    height: 100%;
  }
  body {
    background-color: #f7eeef;
    min-height: 100%;
  }
  h2 {
    text-align: center;
    padding-top: 10%;
    font-family: 'Archivo';
  }
  h5 {
    text-align: center;
    padding-top: 2%;
    font-family: 'Archivo';
  }
  .container {
    background-color: white;
    min-width: 100%;
  }
`;

export const Home = () => (
    <Styles>
        <Container>
            <body>
            <h2>Cooking up something good, stay tuned!</h2>
            <h5>- Timothy Zhou</h5>
            <Image className="img-fluid rounded mx-auto d-block" src={require("./assets/img/cooking.gif")} fluid />
            </body>
        </Container>
    </Styles>

)