import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/screens/ProductDetial.css";
function ProductScreen(props) {
  const defaultProduct = {
    _id: "",
    title: "",
    category: "",
    image: "",
    price: 0,
    countInStock: 0,
    brand: "",
    rating: 4.5,
    numReviews: 0,
    description: "",
  };

  const [product, setProduct] = useState(defaultProduct);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/products");
        const item = data.find(
          (product) => product._id === props.match.params.id
        );

        setProduct(item);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="productDetial_wrapper">
      <div className="wrapper">
        <div className="wrapper_img">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product_info">
          <h2>{product.title}</h2>
          <h3>${product.price}</h3>
        </div>
      </div>
    </section>
  );
}

export default ProductScreen;
