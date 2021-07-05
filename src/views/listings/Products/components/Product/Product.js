import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../../../../api/api";
import ProducsListItem from "../ProductsListItem/ProductsListItem";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProduct(id)
      .catch((err) => setError(err))
      .then((response) => {
        if (!response || response.data.error) setError(response.data.error);
        setProduct(response.data);
      });
  }, [id]);

  return (
    <div className="product-container m-5">
      {error && <div className="d-flex justify-content-center">{error}</div>}
      <Row className="justify-content-center">
        <Col lg={4}>
          <ProducsListItem product={product} />
        </Col>
      </Row>
    </div>
  );
};

export default Product;
