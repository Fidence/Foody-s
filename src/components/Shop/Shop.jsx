import React from "react";
import "./shop.scss";
import Cat1 from "../Assets/cat-1.png";
import Cat2 from "../Assets/cat-2.png";
import Cat3 from "../Assets/cat-3.png";
import Cat4 from "../Assets/cat-4.png";
import Cat5 from "../Assets/cat-5.png";
import { Link } from "react-router-dom";
import { Shopcards } from "../Shop/Shopcard";
import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa";

const Shop = () => {
  return (
    <div>
      <div className="shop">
        <div className="shop__categories">
          <div className="cate">
            <h2>
              Our <span className="color">Categories</span>
            </h2>
            <span>View All &gt;&gt;</span>
          </div>

          <div className="carts">
            <div className="cart1">
              <img src={Cat1} alt="" />
              <p>Fresh Fruit</p>
            </div>
            <div className="cart1">
              <img src={Cat2} alt="" />
              <p>Vegetable</p>
            </div>
            <div className="cart1">
              <img src={Cat3} alt="" />
              <p>Organic Spices</p>
            </div>
            <div className="cart1">
              <img src={Cat4} alt="" />
              <p>Fresh Meat</p>
            </div>
            <div className="cart1">
              <img src={Cat5} alt="" />
              <p>Organic Wheat</p>
            </div>
          </div>
        </div>
        <div className="products">
          <div className="products__wrapper">
            <h2>
              Our <span className="color">Products</span>
            </h2>
            <span>View All &gt;&gt;</span>
          </div>
          <div className="product__boxes">
            {Shopcards.map((Shopcard, index) => {
              return (
                <div className="boxes">
                  <div className="icons">
                    <Link className="link" to="">
                      <FaShoppingCart />
                    </Link>
                    <Link className="link" to="">
                      <FaHeart />
                    </Link>
                    <Link className="link" to="">
                      <FaEye />
                    </Link>
                  </div>
                  <div className="images">
                    <img src={Shopcard.img} alt="" />
                  </div>
                  <div className="food">
                    <h3>{Shopcard.product}</h3>
                    <div className="price">{Shopcard.price}</div>
                    <div className="stars">
                      <FaStar className="green" />
                      <FaStar className="green" />
                      <FaStar className="green" />
                      <FaStar className="green" />
                      <FaStar className="green" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
