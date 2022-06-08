import React from "react";
import "./homecomp.scss";
import Banner1 from "../Assets/banner-1.jpg";
import Banner2 from "../Assets/banner-2.jpg";
import Banner3 from "../Assets/banner-3.jpg";

const Home2 = () => {
  return (
    <div className="banner">
      <div className="main">
        <img src={Banner1} alt="" />
        <div className="txt">
          <span>Limited sale</span>
          <h3>upto 50% 0ff</h3>
          <button>Shop now</button>
        </div>
      </div>
      <div className="main">
        <img src={Banner2} alt="" />
        <div className="txt">
          <span>Limited sale</span>
          <h3>upto 50% 0ff</h3>
          <button>Shop now</button>
        </div>
      </div>
      <div className="main">
        <img src={Banner3} alt="" />
        <div className="txt">
          <span>Limited sale</span>
          <h3>upto 50% 0ff</h3>
          <button>Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Home2;
