import React from "react";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Loading from "../components/Loading";
import { productContext } from "../context/products";
import { CartContext } from "../context/cart";
// import { cartContext } from "../context/cart";

export default function ProductDetails() {
  const { products } = React.useContext(productContext);
  const { addToCart } = React.useContext(CartContext);
  // console.log(useParams());
  const history = useHistory();
  const { id } = useParams();

  const product = products.find(item => item.id === parseInt(id));
  if (products.length === 0) {
    return <Loading />;
  } else {
    const {
      image: { url },
      title,
      price,
      description
    } = product;
    // const url= image.url
    return (
      <section className="single-product">
        <img src={url} alt="product" className="single-product-image" />
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <button
          className="brn btn-primary btn-block"
          onClick={() => {
            console.log("add to cart");
            history.push("/cart");
            // console.log(product);
            addToCart(product);
          }}
        >
          add to cart
        </button>
      </section>
    );
  }
}
