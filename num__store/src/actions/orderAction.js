import {
  CREATE_ORDER_FAIL,
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
} from "../constants/orderConstants";

import { CART_EMPTY } from "../constants/cartConstants";

import Axios from "axios";
export const createOrder = (order) => async (dispatch, getState) => {
  dispatch({ type: CREATE_ORDER_REQUEST, payload: order });
  try {
    const {
      userSignin: { userInfo },
    } = getState();

    const { data } = await Axios.post("/api/orders", order, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data.order });
    dispatch({ type: CART_EMPTY });
    localStorage.removeItem("cartItems");
  } catch (error) {
    dispatch({
      type: CREATE_ORDER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
