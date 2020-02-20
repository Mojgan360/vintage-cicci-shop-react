import React from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredsProduct, flattenProducts, paginate } from "../utils/helpers";

export const productContext = React.createContext();

export default function ProductProvider({ children }) {
  //state value
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  //new state value
  const [sorted, setSorted] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [filters, setFilters] = React.useState({
    search: "",
    category: "all",
    shipping: false,
    price: "all"
  });

  React.useEffect(() => {
    setFeatured();
    setLoading(true);
    axios.get(`${url}/products`).then(response => {
      const featured = featuredsProduct(flattenProducts(response.data));
      const products = flattenProducts(response.data);
      // setProducts(products);
      setSorted(paginate(products));
      setFeatured(featured);

      setLoading(false);
    });

    return () => {};
  }, []);

  const changedPage = index => {
    setPage(index);
  };
  const updateFilters = e => {
    console.log(e.target.value);
    console.log(e.target.name);
  };

  return (
    <productContext.Provider
      value={{
        loading,
        products,
        featured,
        sorted,
        filters,
        page,
        changedPage,
        updateFilters
      }}
    >
      {children}
    </productContext.Provider>
  );
}
