import React from "react";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail } from "react-icons/ai";
import { FiPhone } from "react-icons/fi";
import { FaRegPaperPlane } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="container">
        <div className="footer__top">
          <div className="footer-top__box">
            <h3>EXTRAS</h3>
            <a href="#">Brands</a>
            <a href="#">Gift Certificates</a>
            <a href="#">Affiliate</a>
            <a href="#">Specials</a>
            <a href="#">Site Map</a>
          </div>
          <div className="footer-top__box">
            <h3>INFORMATION</h3>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms Conditions</a>
            <a href="#">Contact Us</a>
            <a href="#">Site Map</a>
          </div>
          <div className="footer-top__box">
            <h3>MY ACCOUNT</h3>
            <a href="#">My Account</a>
            <a href="#">Order History</a>
            <a href="#">Wish List</a>
            <a href="#">Newsletter</a>
            <a href="#">Returns</a>
          </div>
          <div className="footer-top__box">
            <h3>CONTACT US</h3>
            <div>
              <span>
                <GoLocation />
              </span>
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </div>
            <div>
              <span>
                <AiOutlineMail />
              </span>
              company@gmail.com
            </div>
            <div>
              <span>
                <FiPhone />
              </span>
              456-456-4512
            </div>
            <div>
              <span>
                <FaRegPaperPlane />
              </span>
              Dream City, USA
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer-bottom__box"></div>
        <div className="footer-bottom__box"></div>
      </div>
    </>
  );
}

export default Footer;
