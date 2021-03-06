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
      setProducts(products);
      setSorted(paginate(products));
      setFeatured(featured);

      setLoading(false);
    });

    return () => {};
  }, []);

  React.useEffect(() => {
    let newProducts = [...products].sort((a, b) => a.price - b.price);
    setPage(0);
    setSorted(paginate(newProducts));
  }, [filters, products]);

  const changedPage = index => {
    setPage(index);
  };
  const updateFilters = e => {
    let filterValue;
    const type = e.target.type;
    const filter = e.target.name;
    const value = e.target.value;
    // type = "checkbox"
    // name = "shipping"
    // id = "shipping"
    // checked = { shipping }
    // onChange = { updateFilters }
    if (type === "checkbox") {
      filterValue = e.target.checked;
    } else if (type === "radio") {
      value === "all" ? (filterValue = value) : (filterValue = parseInt(value));
    } else {
      filterValue = value;
    }

    setFilters({ ...filters, [filter]: filterValue });
    console.log(type, filter, value);
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
