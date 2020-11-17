import Axios from "axios";
import { CART_ADD_ITEM } from "../constants/cartConstants";

export const addToCart = (productID, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/product/${productID}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      title: data.title,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
