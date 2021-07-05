import axios from "axios";

export const fetchCategories = async () => {
  const response = await axios.get("/categories");
  return response;
};

export const fetchCategoryDetails = async (categoryId) => {
  const response = await axios.get(`/categories/${categoryId}`);
  return response;
};

export const fetchCategoryProducts = async (categoryId, params) => {
  const response = await axios.get(`/categories/${categoryId}/products`, {
    params: params,
  });
  return response;
};

export const fetchProduct = async (productId) => {
  const response = await axios.get(`/products/${productId}`);
  return response;
};
