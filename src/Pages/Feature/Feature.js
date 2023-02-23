import React from 'react';
import logo1 from "../../assets/icons/group.svg"
import logo2 from "../../assets/icons/person.svg"
import logo3 from "../../assets/icons/Wrench.svg"
import logo4 from "../../assets/icons/check.svg"
import logo5 from "../../assets/icons/deliveryt.svg"
import logo6 from "../../assets/icons/Group 38729.svg"

const Feature = () => {
    return (
        <div className='text-center my-6'>
            <p className=' text-orange-600 font-bold'>Core Features</p>
            <h1 className='text-5xl font-bold mb-4'>Browse Our Products</h1>
            <p className='text-gray-600 my-4 '>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

<div className='grid grid-col-1 md:grid-cols-3 lg:grid-cols-6 gap-2 py-12'>
<div className="card   bg-base-100 shadow-xl border  ">
  <figure><img className='mt-8' src={logo1} alt="Shoes" /></figure>
    <h4 className="text-xl font-semibold my-6 ">Expart Team</h4>
  </div>
<div className="card  bg-base-100 shadow-xl border ">
  <figure><img className='mt-8' src={logo2} alt="Shoes" /></figure>
    <h4 className="text-xl font-semibold my-6 ">24/7 Support</h4>
  </div>
<div className="card   bg-base-100 shadow-xl border ">
  <figure><img className='mt-8' src={logo3} alt="Shoes" /></figure>
    <h4 className="text-xl font-semibold my-6 ">Best Equipment</h4>
  </div>
<div className="card   bg-base-100 shadow-xl border ">
  <figure><img className='mt-8' src={logo4} alt="Shoes" /></figure>
    <h4 className="text-xl font-semibold my-6 ">100% Guranty</h4>
  </div>
<div className="card  bg-base-100 shadow-xl border ">
  <figure><img className='mt-8' src={logo5} alt="Shoes" /></figure>
    <h4 className="text-xl font-semibold my-6 ">Expart Team</h4>
  </div>
<div className="card bg-warning  shadow-xl border ">
  <figure><img className='mt-8' src={logo6} alt="Shoes" /></figure>
    <h4 className="text-xl font-semibold my-6 ">Timely Delivery</h4>
  </div>

</div>
        </div>
    );
};

export default Feature;