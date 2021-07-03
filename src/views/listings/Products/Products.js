import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategoryProducts } from "../../../api/api";
import { Link } from "react-router-dom";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategoryProducts(id)
      .catch((err) => console.log(err))
      .then((response) => {
        console.log(response);
        if (!response || response.data.error) setError(response.data.error);
        setProducts(response.data);
      });
  }, [id]);
  return (
    <>
      {error && <div>{error}</div>}
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`} className="item">
                {product.title}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Products;
