import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import LoadingBox from "../components/LoadingBox";
import MessageBox from "../components/MessageBox";
import "../styles/Products.css";
import { listProducts } from "../actions/productActions";

function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products, loading } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div className="wrapper-products">
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox error={error}></MessageBox>
      ) : (
        <>
          <div className="header-productslist">
            <h2>MAKE HAND</h2>
            <span>STUDENTS</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium, dolore?
            </p>
          </div>
          <div className="category__center">
            {products.map((product) => {
              return <Product key={product._id} product={product} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
