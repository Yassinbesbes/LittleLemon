import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Logo from "../images/logo/Logo.png";

function NavigationsBar() {
  return (
    <Container>
      <Row>
        <Col md={2}>
          {/* Empty column for spacing */}
        </Col>
        <Col md={8}>
          <Navbar className="bg-body-tertiary" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                <img
                  src={Logo}
                  className="d-inline-block align-top"
                  alt="Logo"
                  height="40" // Adjust the height as needed
                />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#about">About</Nav.Link>
                  <Nav.Link href="#menu">Menu</Nav.Link>
                  <Nav.Link href="#reservation">Reservation</Nav.Link>
                  <Nav.Link href="#order-online">Order Online</Nav.Link>
                  <Nav.Link href="#login">Login</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
        <Col md={2}>
          {/* Empty column for spacing */}
        </Col>
      </Row>
    </Container>
  );
}

export default NavigationsBar;
