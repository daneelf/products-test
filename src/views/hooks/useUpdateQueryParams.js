import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import { updateUrlQuery,removeParamFromQuery } from "../../utils/urlUtils";

export const useUpdateQueryParams = () => {
  const history = useHistory();
  return useCallback(
    (location, action, type) => {
      const { sortBy, order, minPrice, maxPrice } = type;
      let query = "";
      let updatedQuery = "";
      const { pathname } = location;
      const currentQuery = location.search;
      if (!Boolean(type)) {
        updatedQuery = "";
      }
      if (action === "sort") {
        query = { sort: sortBy, order: order };
        updatedQuery = updateUrlQuery(currentQuery, query);
      }
      if (action === "setPrice") {
        if (!Boolean(minPrice)) {
          const newQuery = removeParamFromQuery(currentQuery, ['min_price'])
          updatedQuery = updateUrlQuery(newQuery, query);
        }
        if (!Boolean(maxPrice)) {
          const newQuery = removeParamFromQuery(currentQuery, ['max_price'])
          updatedQuery = updateUrlQuery(newQuery, query);
        } 
        else {
          query = { min_price: minPrice, max_price: maxPrice };
          updatedQuery = updateUrlQuery(currentQuery, query);
        }
      }
      history.push({
        pathname,
        search: updatedQuery,
      });
    },
    [history]
  );
};
