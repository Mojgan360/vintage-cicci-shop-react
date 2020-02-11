import React from "react";
import axios from "axios";
import url from "../utils/URL";
import { featuredsProduct, flattenProducts } from "../utils/helpers";

export const productContext = React.createContext();

export default function ProductProvider({ children }) {
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setFeatured();
    setLoading(true);
    axios.get(`${url}/products`).then(response => {
      const featured = featuredsProduct(flattenProducts(response.data));
      const products = flattenProducts(response.data);
      setProducts(products);
      setFeatured(featured);

      setLoading(false);
    });

    return () => {};
  }, []);

  return (
    <productContext.Provider value={{ loading, products, featured }}>
      {children}
    </productContext.Provider>
  );
}
