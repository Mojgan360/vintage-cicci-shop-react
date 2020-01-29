import React from "react";
import axios from "axios";
import url from "../utils/URL";

export const productContext = React.createContext();
export default function ProductProvider({ children }) {
  //   console.log(React.useState(false));
  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);
  React.useEffect(() => {
    axios
      .get(`${url}/products`)
      .then(storeProducts => console.log(storeProducts));
    return () => {};
  });
  return (
    <productContext.Provider value={{ loading, products, featured }}>
      {children}
    </productContext.Provider>
  );
}
