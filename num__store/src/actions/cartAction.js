import Axios from "axios";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_PAYMENT_METHOD,
} from "../constants/cartConstants";

export const addToCart = (productID, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productID}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      title: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      description: data.description,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (productID) => (dispatch, setState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: productID });
  localStorage.setItem("cartItems", JSON.stringify(setState().cart.cartItems));
};

export const savePaymentMethod = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_PAYMENT_METHOD, payload: data });
};
