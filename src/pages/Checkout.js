import React from "react";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";
import EmptyCart from "../components/Cart/EmptyCart";
import submitOrder from "../strapi/submitOrder";
import { useHistory } from "react-router-dom";
import {
  CardElement,
  StripeProvider,
  Elements,
  injectStripe
} from "react-stripe-elements";

function Checkout(props) {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const { user, showAlert, hideAlert, alert } = React.useContext(UserContext);
  const history = useHistory();
  //state values
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  let isEmpty = !name || alert.show;

  async function handelSubmit(e) {
    e.preventDefault();

    showAlert({ msg: "submitting order, please wait..." });
    const resposne = await props.stripe
      .createToken()
      .catch(error => console.log(error));
    const { token } = resposne;
    if (token) {
      //code
      console.log(resposne);
      setError("");
      const { id } = token;
      let order = await submitOrder({
        name: name,
        total: total,
        items: cart,
        stripeTokenId: id,
        userToken: user.token
      });
      if (order) {
        //code
        showAlert({
          msg: "your order is completed!"
        });
        clearCart();
        history.push("/");
        return;
      } else {
        //code
        showAlert({
          msg: "there was an error with your order, please try again!",
          type: "danger"
        });
      }
    } else {
      //code
      hideAlert();
      setError(resposne.error.message);
    }
    console.log(resposne);
  }

  if (cart.length < 1) return <EmptyCart />;
  return (
    <section className="section form">
      <h2 className="section-title">checkout</h2>
      <form className="checkout-form">
        <h3>
          order total: <span>${total}</span>
        </h3>
        {/* Start: single input */}
        <div className="form-control">
          <label htmlFor="name">name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={e => {
              setName(e.target.value);
            }}
          />
        </div>
        {/* End: single input */}
        {/* Start: cart element */}
        <div className="stripe-input">
          <label htmlFor="cart-element">credit or debit cart</label>
          <p className="stripe-info">
            Test using this credit cart: <span>4242 4242 4242 4242</span>
            <br />
            Enter any 5 digits for the zip code
            <br />
            Enter any 3 digits for the CVC
          </p>
        </div>
        {/* End: cart element */}
        {/* Start: Stripe element */}
        <CardElement className="card-element"></CardElement>
        {/* End: Stripe element */}
        {/* Stripe error */}
        {error && <p className="form-empty">{error}</p>}
        {/* Empty value */}
        {isEmpty ? (
          <p className="form-empty">please fill out name field</p>
        ) : (
          <button
            type="submit"
            className="btn btn-primary btn-block"
            onClick={handelSubmit}
          >
            submit
          </button>
        )}
      </form>
    </section>
  );
}
const CardForm = injectStripe(Checkout);
const StripeWrapper = () => {
  return (
    <StripeProvider
      apiKey="	
pk_test_A1XezZal0139LYaShnHlVVfW00jgRjzSJV"
    >
      <Elements>
        <CardForm></CardForm>
      </Elements>
    </StripeProvider>
  );
};
export default StripeWrapper;
