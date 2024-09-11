import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cards from "../components/DishesCards.js";
import Button from "react-bootstrap/Button";

import {
  GreenSalad,
  GrilledSalmon,
  MediterraneanPasta,
} from "../images/images.js";

function Specials() {
  return (
    <>
      <Container fluid style={{ padding: "30px" }}>
        <Row className="pt-5">
          <Col md={2}></Col>
          <Col md={8}>
            <div className="d-flex justify-content-between align-items-center">
              <h1>Specials</h1>
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
                Online Menu
              </Button>
            </div>
          </Col>
          <Col md={2}></Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={2}></Col>
          <Col className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
            <Cards
              title="Green Salad"
              price={12.99}
              image={GreenSalad}
              description="Fresh, crisp greens topped with a medley of seasonal vegetables and a tangy vinaigrette. Perfect as a light meal or a complement to your main dish."
            />
          </Col>
          <Col className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
            <Cards
              title="Mediterranean Pasta"
              price={15.49}
              image={MediterraneanPasta}
              description="A delightful blend of pasta with olives, sun-dried tomatoes, feta cheese, and a zesty herb sauce. A taste of the Mediterranean in every bite."
            />
          </Col>
          <Col className="d-flex justify-content-center" style={{ marginTop: "2%" }}>
            <Cards
              title="Grilled Salmon"
              price={18.99}
              image={GrilledSalmon}
              description="Tender salmon fillet grilled to perfection and served with a side of seasonal vegetables and a lemon dill sauce. A healthy and flavorful choice."
            />
          </Col>
          <Col md={2}></Col>
        </Row>
      </Container>
    </>
  );
}

export default Specials;
