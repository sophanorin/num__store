import React from "react";
import "../styles/HeroSlider.css";
import { Link } from "react-router-dom";

function HeroSlider({ product }) {
  return (
    <div className="hero-center">
      <div className="col-1">
        <p>New Inspiration 2021</p>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <Link to={`/products/${product._id}`}>View</Link>
      </div>
      <div className="col-2">
        <img src={product.image} alt={product.title} />
      </div>
    </div>
  );
}

export default HeroSlider;
