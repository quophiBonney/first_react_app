import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";
import { Button, Paper } from "@mui/material";
import Programming from "../../assets/image.jpg";
import Email from "../../assets/email.png";
import Blue from "../../assets/pic.jpeg";
import ArrowForward from "@mui/icons-material/ArrowForward";
import CategoryDesign from "./Categories.css";
function Categories() {
  return (
    <Container className="categories">
      <Row>
        <Col sm={12} md={6} lg={4}>
          <Paper className="paper-bg">
            <img src={Programming} className="img-fluid" alt="" />
            <p className="heading">
              <strong>Image Background Remover</strong>
            </p>
            <p>
              Have been wondering about removing or changing the background of a
              certain image to give it a solid color or image to suit your
              design?
            </p>
            <Button
              startIcon={<ArrowForward />}
              className="bg-primary text-light buttons mb-2"
            >
              Read More
            </Button>
          </Paper>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Paper className="paper-bg">
            <img src={Programming} className="img-fluid" alt="" />
            <p className="heading">
              <strong>Image Background Remover</strong>
            </p>
            <p>
              Have been wondering about removing or changing the background of a
              certain image to give it a solid color or image to suit your
              design?
            </p>
            <Button
              startIcon={<ArrowForward />}
              className="bg-primary text-light buttons mb-2"
            >
              Read More
            </Button>
          </Paper>
        </Col>
        <Col sm={12} md={6} lg={4}>
          <Paper className="paper-bg">
            <img src={Programming} className="img-fluid" alt="" />
            <p className="heading">
              <strong>Image Background Remover</strong>
            </p>
            <p>
              Have been wondering about removing or changing the background of a
              certain image to give it a solid color or image to suit your
              design?
            </p>
            <Button
              startIcon={<ArrowForward />}
              className="bg-primary text-light buttons mb-2"
            >
              Read More
            </Button>
          </Paper>
        </Col>
        <Col sm={12} md={6} lg={12}>
        <Paper className="paper-bg">
          <img src={Programming} className="img-fluid" alt="" />
          <p className="heading">
            <strong>Image Background Remover</strong>
          </p>
          <p>
            Have been wondering about removing or changing the background of a
            certain image to give it a solid color or image to suit your
            design?
          </p>
          <Button
            startIcon={<ArrowForward />}
            className="bg-primary text-light buttons mb-2"
          >
            Read More
          </Button>
        </Paper>
      </Col>
      </Row>
    </Container>
  );
}

export default Categories;
