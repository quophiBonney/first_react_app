import React, { Component } from "react";
import Styling from "./Home.css";
import { Container, Col, Row, Form } from "react-bootstrap";
import { ButtonGroup, Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import Programming from '../../assets/image.jpg'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Categories from "./Categories";
export default class Home extends Component {
  render() {
    // const typed = new Typed(".auto-type", {
    //   strings: ["Coding", "Sleeping", "Eating"], 
    //   typeSpeed: 150,
    //   backSpeed: 150, 
    //   loop: true
    // })
    return (
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="text-center text-light">
            <h1 className="main-text">Welcome To <span class="my-name">Dev Bonney</span> Platform</h1>
            <p>A place where you can easily change image background, get weather forecast and many others. We designed this platform developers, designers, photographers and photo vixions.</p>
            <ButtonGroup className="main-btn">
              <Button className="bg-light text-primary" startIcon={<ArrowForward />}>Get Started For Free</Button>
              <Button className="bg-light text-primary" startIcon={<ArrowForward />}>View Docs</Button>
            </ButtonGroup>
          </Col>
          <Col sm={12} md={12} lg={6}>
            <img src={Programming} className="img-fluid main-img" alt="Programming" />
          </Col>
          <Categories />
        </Row>
      </Container>
    );
  }
}
