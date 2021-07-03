import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get(
    "https://bp-interview.herokuapp.com/categories"
  );
  return response;
};

export const fetchCategoryProducts = async (categoryId) => {
  const response = await axios.get(
    `https://bp-interview.herokuapp.com/categories/${categoryId}`
  );
  return response;
};

export const fetchProduct = async (productId) => {
  const response = await axios.get(
    `https://bp-interview.herokuapp.com/products/${productId}`
  );
  return response;
};
