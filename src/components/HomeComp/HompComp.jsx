import { React, useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import "./homecomp.scss";
import { imgVes } from "../HomeComp/ImgVegs";

const HompComp = ({ slides }) => {
  const [slider, setSlider] = useState(0);
  const length = slides.length;

  const Next = () => {
    setSlider(slider === length - 1 ? 0 : slider + 1);
    console.log(slider);
  };
  const Prev = () => {
    setSlider(slider === 0 ? length - 1 : slider - 1);
    console.log(slider);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div className="slider">
      <FaArrowAltCircleRight className="right" onClick={Next} />
      <FaArrowAltCircleLeft className="left" onClick={Prev} />
      {imgVes.map((imgVeg, index) => {
        return (
          <div
            className={
              index === slides ? " active slider__wrapper" : "slider__wrapper"
            }
            key={index}
          >
            {index === slides ? (
              <>
                <div className="wrapper">
                  <span>Fresh And Organic</span>
                  <h3>Upto 50% Off</h3>
                  <button>Shop Now</button>
                </div>
                <div className="slider__image">
                  <img src={imgVeg.img} alt="" />
                </div>
              </>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};

export default HompComp;
