import React, { useEffect, useState } from "react";
import axios from "axios";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "../styles/Products.css";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const { data } = await axios.get("/products");
        setProducts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="wrapper-products">
      <div className="header-productslist">
        <h2>MAKE HAND</h2>
        <span>STUDENTS</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          dolore?
        </p>
      </div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox error={error}></MessageBox>
      ) : (
        <div className="category__center">
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Products;
