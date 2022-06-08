import React from "react";
import { FaCalendar, FaUser } from "react-icons/fa";
import "./blog.scss";
import { Cards } from "./blogCard";

const Blogcomp = () => {
  return (
    <div className="blog">
      <div className="blog__header">
        <h1>Our Blog</h1>
        <p>
          Home &gt;&gt;<span>Blogs</span>
        </p>
      </div>
      <div className="wrapping">
        <div className="blog__wrapper">
          <h2>
            Our <span className="color">Gallery</span>
          </h2>
          <span className="ink">View All &gt;&gt;</span>
        </div>
        <div className="gridwrap">
          {Cards.map((card, index) => {
            return (
              <div className="blogbox">
                <div className="imgg">
                  <img src={card.img} alt="" />
                </div>
                <div className="date">
                  <div className="icons">
                    <div className="icon1">
                      <FaCalendar className="user" />
                      <span>{card.date}</span>
                    </div>
                    <div className="icon1">
                      <FaUser className="user" />
                      <span>By Admin</span>
                    </div>
                  </div>
                  <div className="give">
                    <h3>Blog Tittle Goes Here</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Rem, laborum.
                    </p>
                    <button>Read more</button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogcomp;
