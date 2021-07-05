import React, { useEffect, useState } from "react";
import { fetchCategories } from "../../../api/api";
import CategoryCard from "../../../componets/CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Loader from "../../../componets/Loader/Loader";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchCategories()
      .catch((err) => setError(err))
      .then((response) => {
        console.log(response);
        if (!response || response.data.error) setError(response.data.error);
        setCategories(response.data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loader />}
      <Container className="mt-5 mb-5">
        {error && <div className="d-flex justify-content-center">{error}</div>}
        <Row className="align-items-center justify-content-center">
          {categories.map((category) => (
            <Col xs={10} sm={6} md={4} lg={3}>
              <Link to={`/categories/${category.id}/products`}>
                <CategoryCard
                  image={category.image_url}
                  title={category.title}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Categories;
