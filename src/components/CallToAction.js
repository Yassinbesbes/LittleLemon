import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import {LittelLemonResto} from '../images/images.js'
import Image from "react-bootstrap/Image";

function CallToAction() {
  return (
    <Container fluid style={{ backgroundColor: "#657379",padding: "30px" }}>
      <Row className="align-items-center">
        <Col md={2}></Col>
        <Col>
          <h1
            style={{
              color: "#F4CE14",
              fontSize: 64,
              fontFamily: "Markazi Text",
              fontWeight: "500",
              wordWrap: "break-word",
            }}
          >
            Little Lemon
          </h1>
          <h6 style={{ color: "white" }}>Chicago</h6>
          <p style={{ color: "white" }}>
            We believe in serving delicious, wholesome meals that bring people
            together. Our menu features a variety of dishes that showcase the
            rich flavors of the Mediterranean. Join us for an unforgettable meal
            in a warm, inviting atmosphere.
          </p>
          <Button
            style={{
              backgroundColor: "#F4CE14",
              border: "none",
              color: "black",
              borderRadius: "20px",
              padding: "8px 25px",
              fontWeight: "700",
            }}
          >
            Reserve a Table
          </Button>
        </Col>
        <Col xs={12} md={4}>
          <Image
            fluid
            style={{
              borderRadius: "20px",
              objectFit: "cover",
              position:"relative",
              top:"10%"
            }}
            src={LittelLemonResto}
            alt="LittelLemonResto"
          />
        </Col>
        <Col md={2}></Col>
      </Row>
    </Container>
  );
}

export default CallToAction;
