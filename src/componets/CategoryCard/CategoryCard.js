import React from "react";
import "./CategoryCard.scss";
import Card from "react-bootstrap/Card";


const CategoryCard = ({ image, title }) => {
  return (
    <Card className="m-2">
      <Card.Img variant="top" src={image} />
      <Card.Body className="card-content pt-3 pb-2">
       <h5>{title}</h5>
      </Card.Body>
    </Card>
  );
};

export default CategoryCard;
