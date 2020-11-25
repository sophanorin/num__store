import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { FiShoppingCart, FiHeart, FiMenu, FiUser } from "react-icons/fi";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BiLogOut } from "react-icons/bi";
import { RiHistoryFill } from "react-icons/ri";
import "../styles/Header.css";
import { useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/userActions";

function Header(props) {
  const [toggle, setToggle] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const toggleLinks = () => {
    setToggle(!toggle);
  };
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const user = useSelector((state) => state.userSignin);
  const { userInfo } = user;
  const signoutHandler = () => {
    dispatch(signout());
    setDropdown(false);
  };

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
                <Link
                  to="/"
                  className="nav__link scroll-link"
                  onClick={toggleLinks}
                >
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/shop"
                  className="nav__link scroll-link"
                  onClick={toggleLinks}
                >
                  Shop
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/blogs"
                  className="nav__link scroll-link"
                  onClick={toggleLinks}
                >
                  Blog
                </Link>
              </li>
              <li className="nav__item">
                <Link
                  to="/contact"
                  className="nav__link scroll-link"
                  onClick={toggleLinks}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="nav__icons">
            <div
              className="profile"
              onMouseEnter={() => setDropdown(true)}
              onMouseLeave={() => {
                setDropdown(false);
              }}
            >
              <Link
                to={userInfo ? "/account" : "/signin"}
                className="icon__item"
              >
                <FiUser />
              </Link>
              {dropdown &&
                (userInfo ? (
                  <div className="dropdown_profile">
                    <div>
                      <div className="profile_image">
                        {/* <img src={""} alt="" /> */}
                      </div>
                      <h2>{userInfo.name.substring(0, 10) + "..."}</h2>
                    </div>
                    <span className="seperater"></span>
                    <div className="profile_menu">
                      <ul>
                        <li>
                          <Link to="/orders">
                            <HiOutlineClipboardList /> View Orders
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="/wishlist">
                            <FiHeart /> My Wishlist
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="/history">
                            <RiHistoryFill /> View History
                          </Link>{" "}
                        </li>
                        <li>
                          <Link to="#signout" onClick={signoutHandler}>
                            <BiLogOut /> Log Out
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div
                    className="profile_login"
                    onMouseEnter={() => setDropdown(true)}
                  >
                    <h2>Welcome To NUM STORE</h2>
                    <Link to="/signin">Sign in / Register</Link>
                  </div>
                ))}
            </div>

            <a href="#" className="icon__item">
              <FiHeart />
            </a>

            <Link to="/cart" className="icon__item">
              <FiShoppingCart />
              <span id="cart__total">{cartItems.length}</span>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
