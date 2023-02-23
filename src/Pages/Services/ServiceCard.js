import React from 'react';
// import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from 'react-router-dom';


const ServiceCard = ({service}) => {

    const {_id,title,img,price}=service;
    return (
        <div className="card card-compact w-80 left-10 bg-base-100 shadow-xl ">
        <figure><img className='p-6' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <div className='flex'>
          <p className=' text-orange-600 font-semibold text-left'>Price :$ {price}</p>
          {/* <> < AiOutlineArrowRight/></> */}
          </div>
          <div className="card-actions justify-end">
          <Link to={`/checkout/${_id}`}> 
          <button className="btn btn-primary ">CheckOut</button>
          </Link>
          </div>
        </div>
        
      </div>
      
    );
};

export default ServiceCard;