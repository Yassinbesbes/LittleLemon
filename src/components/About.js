import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { restout } from "../images/images";

function CallToAction() {
  return (
    <div className="pt-5">
      <Container fluid style={{ backgroundColor: "#657379", padding: "30px" }}>
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
              rich flavors of the Mediterranean. Join us for an unforgettable
              meal in a warm, inviting atmosphere.
            </p>
          </Col>
          <Col xs={12} md={4} className="position-relative">
            <Image
              fluid
              style={{
                height: "450px",
                width: "400px",

                borderRadius: "20px",
                objectFit: "cover",
                zIndex: 1,
              }}
              src={restout}
              alt="restoImge"
            />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default CallToAction;
