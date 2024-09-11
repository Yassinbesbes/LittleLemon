import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { profile1, profile2, profile3, profile4 } from "../images/images.js";

const RatesCard = ({ rating, name, image, review }) => {
  const renderStars = (rating) => {
    const totalStars = 5;
    const stars = [];
    for (let i = 0; i < totalStars; i++) {
      stars.push(
        <span key={i} className={i < rating ? "text-warning" : "text-muted"}>
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <Card className="shadow-sm p-3 mb-5 bg-white rounded">
      <Card.Body>
        <div className="text-center mb-2">{renderStars(rating)}</div>
        <div className="d-flex justify-content-center mb-3">
          <img
            src={image}
            alt={name}
            className="rounded-circle"
            width="50"
            height="50"
          />
        </div>
        <h5 className="text-center">{name}</h5>
        <Card.Text className="text-center">
          <i>{`"${review}"`}</i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

const ReviewsSection = () => {
  const reviews = [
    {
      rating: 5,
      name: "Leo",
      image: profile1, // Use image variables directly
      review:
        "I loved the experience at the restaurant! The food was delicious and the service was exceptional. I will definitely be back more often!",
    },
    {
      rating: 4,
      name: "Gabi",
      image: profile2,
      review:
        "I went to the restaurant with my family and we were very pleased with everything. The food was wonderful.",
    },
    {
      rating: 3,
      name: "Bruno",
      image: profile3,
      review:
        "I have been to many restaurants, but this one stood out. The quality of the ingredients and presentation was impeccable.",
    },
    {
      rating: 5,
      name: "Anna",
      image: profile4,
      review:
        "The restaurant has a great variety of dishes and the service was very attentive. I will definitely recommend it to my friends.",
    },
  ];

  return (
    <div className="pt-5">
    <div style={{ backgroundColor: "#D9D9D9", padding: "5%" }} >
      <h1 style={{ textAlign: "center" }}>Testimonials</h1>
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={2}></Col>

          {reviews.map((review, index) => (
            <Col key={index}>
              <RatesCard
                rating={review.rating}
                name={review.name}
                image={review.image}
                review={review.review}
              />
            </Col>
          ))}
          <Col md={2}></Col>
        </Row>
    </div>
    </div>
  );
};

export default ReviewsSection;
