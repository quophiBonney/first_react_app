import React, { Component } from 'react'
import { Container, Col, Row, Form } from "react-bootstrap";
import { Button, TextField, FormControlLabel, Checkbox } from "@mui/material";
import User from "@mui/icons-material/VerifiedUser";

function Signup() {
  return (
    <Container>
    <Row>
      <Col sm={12} md={12} lg={6} className="text-center">
        <Form className="mt-5">
          <h3 class="signup-text">
            Signup For <span className="dev-bonney">Dev Bonney</span>
          </h3>
          <div className="d-flex firstLast">
            <TextField
              variant="filled"
              color="primary"
              type="text"
              placeholder="First Name *"
              label="First Name *"
              className="w-100 mt-2"
            />
            <br />
            <TextField
              variant="filled"
              color="primary"
              type="text"
              placeholder="Last Name *"
              label="Last Name *"
              className="w-100 mt-2"
            />
          </div>
          <TextField
            variant="filled"
            color="primary"
            type="email"
            placeholder="Email *"
            label="Email *"
            className="w-100 mt-3"
          />
          <TextField
            variant="filled"
            color="primary"
            type="password"
            placeholder="Password *"
            label="Password *"
            className="w-100 mt-3"
          />
          <FormControlLabel
            control={<Checkbox />}
            label="I agree to the Terms of Service and Privacy Policy which may be updated from time to time or may have been amended by mutual between Dev Bonney and the party subscribed to the Service."
            className="mt-3"
          />
          <Button
            type="submit"
            startIcon={<User />}
            className="bg-primary text-white w-100 mt-2"
          >
            Login
          </Button>
        </Form>
      </Col>
      <Col sm={12} md={12} lg={6} className="text-center d-block svg-bg">
        <div className="my-info text-primary">
          <p className="">
            {" "}
            <Button startIcon={<User />} />
            <strong>Dev Bonney</strong> platform is here to serve better so
            kindly enjoy your stay and keep your questions coming.
          </p>
          <p className="">
            <Button startIcon={<User />} />
            <strong>Dev Bonney</strong> platform is here to serve better so
            kindly enjoy your stay and keep your questions coming.
          </p>
          <p className="">
            {" "}
            <Button startIcon={<User />} />
            <strong>Dev Bonney</strong> platform is here to serve better so
            kindly enjoy your stay and keep your questions coming.
          </p>
        </div>
      </Col>
    </Row>
  </Container>
  )
}

export default Signup
