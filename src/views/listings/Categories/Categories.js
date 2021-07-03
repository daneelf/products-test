import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../../api/api";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories()
      .catch((err) => console.log(err))
      .then((response) => {
        console.log(response);
        if (!response || response.data.error) setError(response.data.error);
        setCategories(response.data);
      });
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          <Link to={`/categories/${category.id}/products`} className="item">
            {category.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Categories;
