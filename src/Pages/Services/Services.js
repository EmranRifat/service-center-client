import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services,setServices]=useState([]);
    
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])

    return (
        <div className='text-center'>
           <p className='text-2xl font-bold text-orange-500'>Services</p> 
           <h3 className='text-5xl font-semibold'>Our Services Area</h3>
           <p> the majority have suffered alteration in some form, by injected humour, or randomised  <br /> words which don't look even slightly believable. </p>

           <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 my-6 '>
            {
                services.map(service=><ServiceCard
                key={service._id}
                service={service}

                ></ServiceCard>)
            }
           </div>

          <button className="btn btn-outline text-orange-600 my-6">More Services</button>
         

        </div>
    );
};

export default Services;