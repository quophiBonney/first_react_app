import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import Container from 'react-bootstrap/Container';
import NavLink from 'react-bootstrap/NavLink'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Styles from './App.css';
import About from "./components/About/About";
import Forecast from "./components/Forecast/Forecast";
import Contact from "./components/Contact/Contact"
import ImageBackgroundRemover from "./components/IBR/ImgBgRemover";
import Signup from './components/Signup/Signup'

function App() {
  return (
    <Router>
    <Navbar expand="lg" id="Navbar" fixed="top">
    <Container>
      <Navbar.Brand href="#home" className="text-light">Dev Bonney</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={'/'} className="text-light">Home</Nav.Link>
          <Nav.Link as={Link} to={'/imgbgremover'} className="text-light">IBR</Nav.Link>
          <Nav.Link as={Link} to={'/weather-forecast'} className="text-light">Weather Forecast</Nav.Link>
          <Nav.Link as={Link} to={'/about'} className="text-light">About</Nav.Link>
          <Nav.Link as={Link} to={'/contact'} className="text-light">Contact</Nav.Link>
          <Nav.Link as={Link} to={'/signup'} className="text-light">Signup</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/ImageBackgroundRemover" element={<ImageBackgroundRemover/>} />
    <Route path="/Forecast" element={<Forecast/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </Router>
  );
}
export default App;
