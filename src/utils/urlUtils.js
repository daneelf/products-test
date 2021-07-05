import qs from "query-string";

export const getUrlParameters = (url) => {
  const parsedUrl = qs.parseUrl(url);
  const params = parsedUrl.query;
  return params;
};

export const updateUrlQuery = (url, newParams) => {
  const parsedUrl = qs.parseUrl(url);
  const params = parsedUrl.query;
  const newQuery = { ...params, ...newParams };
  const stringifiedQuery = qs.stringify(newQuery);
  const newQueryString = stringifiedQuery.length ? `?${stringifiedQuery}` : "";
  return newQueryString;
};

export const removeParamFromQuery = (query, paramsArray) => {
  
  if (!(Array.isArray(paramsArray))) {
    throw new Error("Param should be an array");
  }
  const params = qs.parse(query, { ignoreQueryPrefix: true });

  Object.keys(params).forEach(key => {
    if(paramsArray.includes(key)){
      Reflect.deleteProperty(params, key)
    }
  })

  const updated = qs.stringify(params, { encodeValuesOnly: true });
  return updated ? `?${updated}` : "";
};
