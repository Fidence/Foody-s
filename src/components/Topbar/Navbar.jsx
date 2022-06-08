import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaShoppingBasket,
  FaSearch,
  FaUser,
  FaShoppingCart,
  FaTimes,
} from "react-icons/fa";
import Cart1 from "../Assets/cart-1.jpg";
import Cart2 from "../Assets/cart-2.jpg";
import Cart3 from "../Assets/cart-3.jpg";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const handlesearch = () => setSearch(!search);

  const [cart, setCart] = useState(false);
  const handlecart = () => setCart(!cart);

  const [navbar, setNavbar] = useState(false);
  const handlenavbar = () => setNavbar(!navbar);

  const [form, setForm] = useState(false);
  const handleform = () => setForm(!form);
  const navItems = [
    { title: "Home", path: "/" },
    { title: "Shop", path: "/shop" },
    { title: "About", path: "/about" },
    { title: "Review", path: "/review" },
    { title: "Blog", path: "/blog" },
    { title: "Contact", path: "/contact" },
  ];

  return (
    <div>
      <div className="header">
        <nav>
          <div className="logo">
            <Link to="/" className="groco">
              <FaShoppingBasket className="basket" />
            </Link>
            <Link to="/" className="groco">
              <h2>Foody's</h2>
            </Link>
          </div>
          <div className="nav__list1">
            <ul className="links">
              {navItems.map((navItem, index) => {
                return (
                  <li className="navitem" key={index}>
                    <Link to={navItem.path} className="items">
                      {navItem.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {navbar && (
            <div className="nav__list" onClick={handlenavbar}>
              <ul className="links">
                {navItems.map((navItem, index) => {
                  return (
                    <li className="navitem" key={index}>
                      <Link to={navItem.path} className="items">
                        {navItem.title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div className="icons">
            <FaBars className="btnbars" onClick={handlenavbar} />
            <FaSearch className="btnsearch" onClick={handlesearch} />
            <FaShoppingCart className="btncart" onClick={handlecart} />
            <FaUser className="btnuser" onClick={handleform} />
          </div>
          {search && (
            <form action="" className="form">
              <input
                type="search"
                placeholder="search here... "
                className="search"
              />
              <FaSearch className="btnsearch1" onClick={handlesearch} />
            </form>
          )}
          {cart && (
            <div className="shopping">
              <div className="shopping_flex">
                <img src={Cart1} alt="" />
                <div className="price">
                  <h3>organic food</h3>
                  <span className="qty">1</span>
                  <span className="multi">x</span>
                  <span className="amt">$200</span>
                </div>
                <FaTimes className="cancl" />
              </div>
              <div className="shopping_flex">
                <img src={Cart2} alt="" />
                <div className="price">
                  <h3>organic food</h3>
                  <span className="qty">1</span>
                  <span className="multi">x</span>
                  <span className="amt">$200</span>
                </div>
                <FaTimes className="cancl" />
              </div>
              <div className="shopping_flex">
                <img src={Cart3} alt="" />
                <div className="price">
                  <h3>organic food</h3>
                  <span>1</span>
                  <span className="multi">x</span>
                  <span className="amt">$200</span>
                </div>
                <FaTimes className="cancl" />
              </div>
              <h3 className="total">
                Total : <span>$1000</span>
              </h3>
              <button onClick={handlecart}>checkout cart</button>
            </div>
          )}
          {form && (
            <form className="login" action="">
              <h3>LOGIN FORM</h3>
              <input
                type="email"
                name=""
                placeholder="enter email"
                className="input"
              />
              <input
                type="password"
                name=""
                placeholder="enter password"
                className="input"
              />
              <div className="check">
                <input type="checkbox" className="box" />
                <label htmlFor="">Remember Me</label>
              </div>
              <button>Login Now</button>
              <p>
                Forgot password{" "}
                <Link to="£" className="link">
                  Click here
                </Link>
              </p>
              <p>
                Don't have an Account{" "}
                <Link to="£" className="link">
                  Create an account
                </Link>
              </p>
            </form>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
