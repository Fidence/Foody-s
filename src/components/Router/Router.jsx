import React from "react";
import "./router.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../Topbar/Navbar";
import HomePage from "../pages/Home";
import ShopPage from "../pages/Shop";
import AboutPage from "../pages/About";
import ReviewPage from "../pages/Review";
import BlogPage from "../pages/Blog";
import ContactPage from "../pages/Contact";
import Footer from "../Footer/Footer";

const Roouter = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default Roouter;
