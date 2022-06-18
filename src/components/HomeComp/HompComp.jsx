import { React, Component } from "react";
import "./homecomp.scss";
// import { imgVes } from "../HomeComp/ImgVegs";
import Homm from "../Assets/home-img-1.png";
import Homm1 from "../Assets/home-img-2.png";
import Homm2 from "../Assets/home-img-3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { render } from "@testing-library/react";

export default class HompComp extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 3,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 412,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
      ],
    };
    return (
      <div className="slider">
        <Slider {...settings}>
          <div className="slides">
            <div className="slider_wrapper">
              <div className="wrapper">
                <span>Fresh And Organic</span>
                <h3>Upto 50% Off</h3>
                <button>Shop Now</button>
              </div>
              <div className="slider__image">
                <img src={Homm} alt="" />
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="slider_wrapper">
              <div className="wrapper">
                <span>Fresh And Organic</span>
                <h3>Upto 50% Off</h3>
                <button>Shop Now</button>
              </div>
              <div className="slider__image1">
                <img src={Homm1} alt="" />
              </div>
            </div>
          </div>
          <div className="slides">
            <div className="slider_wrapper">
              <div className="wrapper">
                <span>Fresh And Organic</span>
                <h3>Upto 50% Off</h3>
                <button>Shop Now</button>
              </div>
              <div className="slider__image2">
                <img src={Homm2} alt="" />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
