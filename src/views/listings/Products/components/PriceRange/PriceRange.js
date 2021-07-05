import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useUpdateQueryParams } from "../../../../hooks/useUpdateQueryParams";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

const PriceRange = () => {
  const [formData, setFormData] = useState("");
  const location = useLocation();
  const handleUpdateQueryParams = useUpdateQueryParams();

  const setField = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdateQueryParams(location, "setPrice", formData);
  };

  return (
    <>
      <Form className="mb-2" onSubmit={handleSubmit}>
        <Form.Row>
          <Col xs={4} sm={4}>
            <Form.Control
              as="input"
              autoComplete="off"
              name="minPrice"
              type="text"
              placeholder="min price"
              onChange={(e) => setField("minPrice", e.target.value)}
            />
          </Col>
          <Col xs={4} sm={4}>
            <Form.Control
              as="input"
              autoComplete="off"
              name="maxPrice"
              type="text"
              placeholder="max price"
              onChange={(e) => setField("maxPrice", e.target.value)}
            />
          </Col>
          <Col xs={2} sm={2}>
            <Button type="submit">Δείξε</Button>
          </Col>
        </Form.Row>
      </Form>
    </>
  );
};

export default PriceRange;
