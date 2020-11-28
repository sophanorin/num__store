import React, { useEffect, useState } from "react";
import { listProducts } from "../actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import HeroSlider from "../components/HeroSlider.js";
import Slider from "react-slick";
import MessageBox from "../components/MessageBox";
import LoadingBox from "../components/LoadingBox";
import "../styles/screens/ShopScreen.css";
function ShopScreen() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { error, products, loading } = productList;
  const [mouseOver, setMouseOver] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    loop: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
  };
  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox>{error}</MessageBox>
      ) : (
        <>
          <div id="heroslider">
            <Slider {...settings}>
              {products.map((product) => {
                return <HeroSlider key={product._id} product={product} />;
              })}
            </Slider>
          </div>
        </>
      )}
    </div>
  );
}

export default ShopScreen;
