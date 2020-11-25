import Axios from "axios";
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SECCESS,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SECCESS,
  PRODUCT_DETAIL_FAIL,
} from "../constants/productConstants";

export const listProducts = () => async (dispatch) => {
  dispatch({ type: PRODUCT_LIST_REQUEST });
  try {
    const { data } = await Axios.get("/api/products");
    dispatch({ type: PRODUCT_LIST_SECCESS, payload: data });
  } catch (error) {
    dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });
  }
};

export const detialProduct = (productId) => async (dispatch) => {
  dispatch({ type: PRODUCT_DETAIL_REQUEST, payload: productId });
  try {
    const { data } = await Axios.get(`/api/products/${productId}`);
    dispatch({ type: PRODUCT_DETAIL_SECCESS, payload: data });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAIL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
