import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { fetchCategoryProducts } from "../../../api/api";
import { Link } from "react-router-dom";
import PaginationV2 from "../../../componets/PaginationView/PaginationView";
import { getUrlParameters } from "../../../utils/urlUtils";
import Loader from "../../../componets/Loader/Loader";
import ProductsListItem from "./components/ProductsListItem/ProductsListItem";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ActionsNavBar from "./ActionsNavBar/ActionsNavBar";
import "./Products.scss";

const Products = () => {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(15);

  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const params = getUrlParameters(location.search);
    if (Boolean(params.page)) {
      setCurrentPage(params.page);
    }
    fetchCategoryProducts(id, params)
      .catch((err) => console.log(err))
      .then((response) => {
        if (!response || response.data.error) setError(response.data.error);
        if (response && response.status === 200) {
          setProducts(response.data);
          setLoading(false);
        }
      });
  }, [id, location.search]);

  // handle pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {error && <div className="d-flex justify-content-center">{error}</div>}
      {loading && <Loader />}
      <Container className="mt-5 mb-5">
        <ActionsNavBar className="actions-container" />
      </Container>
      {products.length === 0 && <h5 className="d-flex justify-content-center">Δεν βρέθηκαν προιόντα</h5>}

      {products.length > 0 && (
        <>
          <div className="products-container">
            <Row className="align-items-center justify-content-center">
              {products &&
                currentProducts.map((product) => (
                  <Link
                    className="product-link"
                    to={`/products/${product.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <ProductsListItem product={product} />
                  </Link>
                ))}
            </Row>
          </div>

          <PaginationV2
            currentPage={currentPage}
            dataPerPage={productsPerPage}
            totalItems={products.length}
            paginate={paginate}
          />
        </>
      )}
    </>
  );
};

export default Products;
