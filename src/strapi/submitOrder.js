// submit order
import axios from "axios";
import url from "../utils/URL";
import React from "react";

export default async function submitOrder({
  name,
  total,
  items,
  stripeTokenId,
  userToken
}) {
  const response = await axios
    .post(
      `${url}/orders`,
      {
        name,
        total,
        items,
        stripeTokenId
      },
      {
        headers: {
          authorization: `Bearer ${userToken}`
        }
      }
    )
    .catch(error => console.log(error));
  return response;
}
