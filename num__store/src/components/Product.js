import React from "react";
import { Link } from "react-router-dom";
import { BsEye, BsHeartFill } from "react-icons/bs";
import { ImLoop2 } from "react-icons/im";
import Rating from "./Rating";
import "../styles/Product.css";

function Product(props) {
  const { product } = props;

  return (
    <>
      <div className="product category__products">
        <div className="product__header">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product__footer">
          <h3>${product.title}</h3>
          <div className="rating">
            <Rating rating={product.rating} />
          </div>
          <div className="product__price">
            <h4>${product.price}</h4>
          </div>
          <a href="#">
            <button type="submit" className="product__btn">
              Add To Cart
            </button>
          </a>
        </div>
        <ul>
          <li>
            <Link to={`/product/${product._id}`}>
              <BsEye />
            </Link>
          </li>
          <li>
            <a href="#">
              <BsHeartFill />
            </a>
          </li>
          <li>
            <a href="#">
              <ImLoop2 />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Product;
