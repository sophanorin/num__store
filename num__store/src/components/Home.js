import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

function Home() {
  return (
    <section className="container-home">
      <img
        src="https://www.ox.ac.uk/sites/files/oxford/styles/ow_large_feature/s3/field/field_image_main/b_AllSoulsquad.jpg?itok=tTcH-5ix"
        alt=""
      />
      <div className="info">
        <h2>NUM STORE</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
          quaerat rem molestias unde debitis sed! Iste a voluptatem repellendus
          quo.
        </p>
        <div className="control">
          <Link to="/contact" className="contact">
            Contact Us
          </Link>
          <Link to="/shop" className="shop">
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
