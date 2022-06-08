import React from "react";
import "./about.scss";
import AboutImg from "../Assets/about-img.jpg";
import { FaShareAlt, FaEye, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { aboutCard } from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="about__header">
        <h1>About us</h1>
        <p>
          Home &gt;&gt;<span>About</span>
        </p>
      </div>
      <div className="aboutcomp">
        <div className="mainsside">
          <div className="leftsside">
            <img src={AboutImg} alt="" />
          </div>
          <div className="rightsside">
            <span>Welcome to our shop</span>
            <h3>Fresh Organic Groceries</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
              in, veniam ad ipsum, maxime neque minima velit nisi excepturi
              consequatur aut fuga soluta similique dicta temporibus quia
              voluptas facere porro?
            </p>
            <p className="txt2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              totam reiciendis exercitationem voluptatibus minus omnis
              asperiores molestias doloribus deserunt vero.
            </p>
            <a className="btn1" href="@">
              Read More
            </a>
          </div>
        </div>
        <div className="gallery">
          <div className="ourgala">
            <h1>
              Our <span className="col">Gallery</span>
            </h1>
            <Link className="ink" to="*">
              View &gt;&gt;
            </Link>
          </div>
          <div className="galaboxes">
            {aboutCard.map((aboutcard, index) => {
              return (
                <div className="galybox">
                  <img src={aboutcard.img} alt="" />

                  <div className="galaicons">
                    <Link className="link" to="">
                      <FaEye />
                    </Link>
                    <Link className="link" to="">
                      <FaHeart />
                    </Link>
                    <Link className="link" to="">
                      <FaShareAlt />
                    </Link>
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

export default About;
