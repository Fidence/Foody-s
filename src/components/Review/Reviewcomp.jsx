import React from "react";
import "./review.scss";
import Icon1 from "../Assets/icon-1.png";
import Icon2 from "../Assets/icon-2.png";
import Icon3 from "../Assets/icon-3.png";
import { revImg } from "./ImgCard";

const Reviewcomp = () => {
  return (
    <div className="review">
      <div className="review_header">
        <h1>Client's Review</h1>
        <p>
          Home &gt;&gt;<span>Review</span>
        </p>
      </div>

      <div className="wrapping">
        <div className="reviewcomp">
          <div className="wrapper">
            <div className="fastwapper">
              <div className="img33">
                <img src={Icon1} alt="" />
              </div>

              <div className="deliver">
                <h3>fast delivery</h3>
                <span>within 30 minutes</span>
              </div>
            </div>

            {/*  */}
            <div className="fastwapper">
              <div className="img33">
                <img src={Icon2} alt="" />
              </div>

              <div className="deliver">
                <h3>24 / 7 Available</h3>
                <span>Call Us Anytime</span>
              </div>
            </div>
            {/*  */}
            <div className="fastwapper">
              <div className="img33">
                <img src={Icon3} alt="" />
              </div>

              <div className="deliver">
                <h3>Easy Payment</h3>
                <span>Cash Or Credit</span>
              </div>
            </div>
          </div>
        </div>

        <div className="reviewtest">
          {revImg.map((rev, index) => {
            return (
              <div className="testifier">
                <div className="test">
                  <img src={rev.img} alt="" />
                  <div className="details">
                    <h3>{rev.name}</h3>
                    <span>happy Customer</span>
                  </div>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis quas porro voluptate eum, fuga praesentium
                  itaque! Possimus maxime eius architecto.
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Reviewcomp;
