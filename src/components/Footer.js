import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { LittelLemonResto } from "../images/images.js";
import Image from "react-bootstrap/Image";

const Footer = () => {
  return (
    <>
      <Container
        fluid
        style={{
          backgroundColor: "#D9D9D9",
          padding: "40px",
          marginTop: "10%",
        }}
      >
        <Row>
          {/* Left Empty Space */}
          <Col lg={2} md={2} sm={0}></Col>

          {/* Doormat Navigations */}
          <Col md={2}>
            <Image
              fluid
              style={{
                position: "relative",
                borderRadius: "20px",
                objectFit: "cover",
                height: "250px",
                width: "200px",
                zIndex: 2,
              }}
              src={LittelLemonResto}
              alt="LittelLemonResto"
            />
          </Col>
          <Col lg={2} md={2} sm={6}>
            <h5>
              <strong style={{color:"BLACK"}}>Doormat Navigations</strong>
            </h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Home</li>
              <li>About</li>
              <li>Menu</li>
              <li>Reservation</li>
              <li>Order Online</li>
              <li>Login</li>
            </ul>
          </Col>

          {/* Contact Information */}
          <Col lg={2} md={2} sm={6}>
            <h5>
              <strong style={{color:"BLACK"}}>Contact</strong>
            </h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </Col>

          {/* Social Media Links */}
          <Col lg={2} md={2} sm={6}>
            <h5>
              <strong style={{color:"BLACK"}}>Social Media Links</strong>
            </h5>
            <ul style={{ listStyleType: "none", padding: 0 }}>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </Col>

          {/* Right Empty Space */}
          <Col lg={2} md={2} sm={0}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
