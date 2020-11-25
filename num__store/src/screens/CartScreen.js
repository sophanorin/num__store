import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../actions/cartAction";
import MessageBox from "../components/MessageBox";
import { FaTag } from "react-icons/fa";
import "../styles/screens/CartScreen.css";

function CartScreen(props) {
  const productId = props.match.params.id;
  const dispatch = useDispatch();
  const qty = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    dispatch(addToCart(productId, qty));
  }, [dispatch, productId, qty]);

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart_container">
      {cartItems.length === 0 ? (
        <MessageBox>
          Cart is Empty.
          <Link to="/shop">Go Shopping</Link>
        </MessageBox>
      ) : (
        <>
          <div className="shopping_list">
            <h3>{cartItems.length} Items in Cart</h3>
            <ul>
              {cartItems.map((item) => (
                <li key={item.product}>
                  <div className="card">
                    <div className="col-1">
                      <img src={item.image} alt={item.title} />
                      <div>
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="col-2">
                      <select
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-3">
                      <button
                        type="button"
                        onClick={() => removeFromCartHandler(item.product)}
                      >
                        Remove
                      </button>
                      <button type="button">Save for Later</button>
                      <button type="button">Move To Wishlist</button>
                    </div>
                    <div className="col-4">
                      <div>
                        <h3>${item.price}</h3>
                      </div>
                      <div>
                        <FaTag />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="shopping_checkout">
            <h4>
              SubItems : ({cartItems.reduce((a, c) => a + c.qty, 0)} items)
            </h4>
            <h2>
              Total : ${cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
            </h2>
            <Link to="/checkout">Checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}

export default CartScreen;
