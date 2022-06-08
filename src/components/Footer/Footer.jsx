import React from "react";
import "./footer.scss";
import {
  FaArrowRight,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPinterestP,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Payment from "../Assets/payment.png";

const Footer = () => {
  return (
    <div className="wrapper">
      <div className="wrapper__main">
        {" "}
        <footer>
          <div className="grid">
            <h3>Quick Links</h3>

            <div className="quick">
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="/">
                  Home
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="/about">
                  About
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="/review">
                  Review
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="/blog">
                  Blog
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="/contact">
                  Contact
                </Link>
              </li>
            </div>
          </div>
          <div className="grid">
            <h3>Extract Links</h3>

            <div className="quick">
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="#">
                  My Order
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="#">
                  My Favourite
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="#">
                  My Wishlist
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="#">
                  My Account
                </Link>
              </li>
              <li>
                <FaArrowRight className="right" />
                <Link className="arrow" to="#">
                  Terms or Uses
                </Link>
              </li>
            </div>
          </div>
          <div className="grid">
            <h3>Extract Links</h3>

            <div className="quick">
              <li>
                <FaFacebook className="right" />
                <Link className="arrow" to="#">
                  Facebook
                </Link>
              </li>
              <li>
                <FaInstagram className="right" />
                <Link className="arrow" to="#">
                  Instagram
                </Link>
              </li>
              <li>
                <FaTwitter className="right" />
                <Link className="arrow" to="#">
                  Twitter
                </Link>
              </li>
              <li>
                <FaLinkedinIn className="right" />
                <Link className="arrow" to="#">
                  LInkedin
                </Link>
              </li>
              <li>
                <FaPinterestP className="right" />
                <Link className="arrow" to="#">
                  Pinterest
                </Link>
              </li>
            </div>
          </div>
          <div className="newsletter">
            <h3>Newsletter</h3>
            <p>subscribe for latest updates</p>

            <input type="email" placeholder="enter your email" />
            <button>Subscribe</button>

            <img src={Payment} alt="" />
          </div>
        </footer>
      </div>
      <div className="copy">
        Copywright by Fidence | all rights are reserved!
      </div>
    </div>
  );
};

export default Footer;
