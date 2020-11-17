import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiShoppingCart, FiHeart, FiMenu, FiUser } from "react-icons/fi";
import "../styles/Header.css";
import { useSelector } from "react-redux";

function Header() {
  const [toggle, setToggle] = useState(false);
  const menuRef = useRef(null);
  const toggleLinks = () => {
    setToggle(!toggle);
  };

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  useEffect(() => {
    if (toggle) document.body.classList.add("active");
    else document.body.classList.remove("active");
  }, [toggle]);
  return (
    <div className="navigation">
      <div className="container">
        <nav className="nav">
          <div className="nav__hamburger" onClick={toggleLinks}>
            <FiMenu />
          </div>

          <div className="nav__logo">
            <Link to="/" className="scroll-link">
              <img
                src="https://num.edu.kh/web/admin_web/assets/img/num/logo.png"
                alt="National University Of Management"
              />
            </Link>
          </div>

          <div className={`nav__menu ${toggle ? "open" : ""}`} ref={menuRef}>
            <div className="menu__top">
              <button className="close_button" onClick={toggleLinks}>
                <GrClose />
              </button>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to="/" className="nav__link scroll-link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/category" className="nav__link scroll-link">
                  Category
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/blogs" className="nav__link scroll-link">
                  Blog
                </Link>
              </li>
              <li className="nav__item">
                <Link to="/contact" className="nav__link scroll-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav__icons">
            <a href="#" className="icon__item">
              <FiUser />
            </a>

            <a href="#" className="icon__item">
              <FiHeart />
            </a>

            <a href="#" className="icon__item">
              <FiShoppingCart />
              <span id="cart__total">{cartItems.length}</span>
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
