import React from "react";
import banner1 from "../../assets/images/banner/5.jpg";
import banner2 from "../../assets/images/banner/1.jpg";

import "./Banner.css";

const Banner = () => {
  return (
    <div className="carousel max-w-screen-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <div className="img-gradient">
          <img
            src={banner1}
            alt="img"
            className="w-full max-h-fit rounded-lg"
          />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide3" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-end transform-translate-y-1/2 left-24 top-1/4 ">
          <h1 className="text-6xl text-white font-bold">
            Affordable <br />
            Price for Car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform-translate-y-1/2 left-24 top-1/2 w-2/5">
          <p className="text-xl text-white ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform-translate-y-1/2 left-24 top-2/3 w-2/5">
          <button className="btn border-none btn- bg-orange-600	 text-white  mr-5">
            Discover More
          </button>
          <button className="btn btn-outline btn-info">Latest Project</button>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <div className="img-gradient">
          <img src={banner2} alt="img" className="w-full  rounded-lg " />
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
          <a href="#slide1" className="btn btn-circle mr-5">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
        <div className="absolute flex justify-end transform-translate-y-1/2 left-24 top-1/4 ">
          <h1 className="text-6xl text-white font-bold">
            Affordable <br />
            Price for Car <br />
            Servicing
          </h1>
        </div>
        <div className="absolute flex justify-end transform-translate-y-1/2 left-24 top-1/2 w-2/5">
          <p className="text-xl text-white ">
            There are many variations of passages of available, but the majority
            have suffered alteration in some form
          </p>
        </div>
        <div className="absolute flex justify-start transform-translate-y-1/2 left-24 top-2/3 w-2/5">
          <button className="btn btn-active btn-warning mr-5">
            Discover More
          </button>
          <button className="btn btn-outline btn-info">Latest Project</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
