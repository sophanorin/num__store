import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../actions/orderAction.js";
import { CREATE_ORDER_RESET } from "../constants/orderConstants.js";
import MessageBox from "../components/MessageBox.js";
import LoadingBox from "../components/LoadingBox.js";
import "../styles/screens/CheckoutScreen.css";

function Checkout(props) {
  const [paypalMethod, setPaypalMethod] = useState("PayPal");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  if (!userInfo) props.history.push("/signin");

  const Order = useSelector((state) => state.Order);
  const { loading, error, success, order } = Order;
  const toPrice = (num) => Number(num.toFixed(2));
  cart.itemsPrice = toPrice(
    cart.cartItems.reduce((a, c) => a + c.qty * c.price, 0)
  );
  cart.taxPrice = toPrice(0.15 * cart.itemsPrice);
  cart.totalPrice = cart.itemsPrice + cart.taxPrice;
  cart.deliveryPrice = cart.itemsPrice >= 50 ? 0 : 1;
  const completePaymentHandler = () => {
    dispatch(createOrder({ ...cart, paymentMethod: paypalMethod }));
  };

  useEffect(() => {
    if (success) {
      props.history.push(`/orders/${order._id}`);
      dispatch({ type: CREATE_ORDER_RESET });
    }
  }, [dispatch, success, props.history, order]);

  return (
    <div className="checkout_wrapper">
      <div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox>{error}</MessageBox>}
        <div className="checkout">
          <h2>Checkout</h2>
          <input
            type="radio"
            id="paypal"
            value="PayPal"
            name="paymentMethod"
            required
            checked
            onChange={(e) => setPaypalMethod(e.target.value)}
          />
          <label htmlFor="paypal">PayPal</label>
        </div>
        <div className="order_details">
          <h2>Order Details</h2>
          <h3>{cart.cartItems.length} items in cart</h3>
          <ul>
            {cart.cartItems.map((item) => (
              <li key={item.product}>
                <div className="card_order">
                  <div className="col-1">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>

                  <div className="col-2">
                    <h3>
                      {item.qty} x ${item.price} = ${item.qty * item.price}
                    </h3>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="summary">
        <h2>Summary</h2>
        <ul>
          <li>
            <div>Items Price</div>
            <div>$ {cart.itemsPrice}</div>
          </li>
          <li>
            <div>Tax Price</div>
            <div>$ {cart.taxPrice}</div>
          </li>
          <li>
            <div>Delivery Price</div>
            <div>$ {cart.deliveryPrice}</div>
          </li>
          <li>
            <div>
              <strong> Total Price</strong>
            </div>
            <div>
              <strong> $ {cart.totalPrice}</strong>
            </div>
          </li>
        </ul>
        <button onClick={completePaymentHandler}>Complete Payment</button>
      </div>
    </div>
  );
}

export default Checkout;
