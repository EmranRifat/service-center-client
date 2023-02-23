import React from "react";
import about1 from "../../assets/images/about_us/person.jpg"
import about2 from "../../assets/images/about_us/parts.jpg"

const About = () => {
  return (
    <div className="hero  my-28">
      <div className="hero-content flex-col lg:flex-row">
       <div className=" relative w-1/2">
       <img src={about1} alt="img"  className="w-4/5 h-full rounded-lg shadow-2xl"/>
       <img src={about2} alt="img"  className="w-3/5 right-5 top-1/2 rounded-lg shadow-2xl absolute border-8"/>
       </div>
        <div className="w-1/2">
            <p className=" font-semibold text-2xl text-orange-700">About us </p>
          <h1 className="text-5xl font-bold">We are qualified 
          <br /> & of experience in <br />
           this field</h1>
          <p className="py-6">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
          <button className="btn border-none btn- bg-orange-600	 text-white mt-4">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
