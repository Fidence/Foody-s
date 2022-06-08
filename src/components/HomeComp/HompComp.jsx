import React from "react";
import "./homecomp.scss";
// import Home1 from "../Assets/home-img-1.png";
// import Home2 from "../Assets/home-img-2.png";
import Home3 from "../Assets/home-img-3.png";

const HompComp = () => {
  return (
    <div className="slider">
      <div className="slider__wrapper">
        <div className="wrapper">
          <span>Fresh And Organic</span>
          <h3>Upto 50% Off</h3>
          <button>Shop Now</button>
        </div>
        <div className="slider__image">
          <img src={Home3} alt="" />
        </div>
      </div>
      {/* <div className="slider__wrapper">
        <div className="wrapper">
          <span>fresh organic</span>
          <h3>upto 50% off</h3>
          <button>shop now</button>
        </div>
        <div className="slider__image">
          <img src={Home2} alt="" />
        </div>
      </div>
      <div className="slider__wrapper">
        <div className="wrapper">
          <span>fresh organic</span>
          <h3>upto 50% off</h3>
          <button>shop now</button>
        </div>
        <div className="slider__image">
          <img src={Home1} alt="" />
        </div>
      </div> */}
    </div>
  );
};

export default HompComp;
