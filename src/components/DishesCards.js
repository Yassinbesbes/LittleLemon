import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ title, price, image, description }) {
  return (
    <Card style={{ width: "18rem", border: "none", borderRadius:"20px" }} className="shadow-lg">
      <Card.Img variant="top" src={image} alt={title} style={{ height: "180px", objectFit: "cover",borderRadius:"20px" }} />
      <Card.Body>
        <div className="d-flex justify-content-between">
          <Card.Title style={{ fontWeight: "bold",fontSize:"1rem" }}>{title}</Card.Title>
          <span style={{ color: "#FF8C00", fontWeight: "bold" }}>${price}</span>
        </div>
        <Card.Text style={{ fontSize: "0.9rem", color: "#555" }}>
          {description}
        </Card.Text>
        <Button variant="link" style={{ padding: 0, color: "#000", textDecoration: "none" }}>
          Order a delivery
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;
