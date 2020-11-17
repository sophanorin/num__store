import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../actions/cartAction";

function CartScreen(props) {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);
  return (
    <div>
      <h1>Cart screen</h1>
      <p>
        ADD to Cart : ProductID : {productId} Qty : {qty}
      </p>
    </div>
  );
}

export default CartScreen;
