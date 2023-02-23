import React, { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contex/AuthProvider';

const CheckOut = () => {
    const {_id,title,price}=useLoaderData();
    const {user}=useContext(AuthContext);

const handlePlaceOrder=event=>{
    event.preventDefault();
    const form=event.target;
    const name=`${form.firstname.value} ${form.lastname.value}`;
    const email=user?.email|| "unregistered";
    const phone=form.phone.value;
    const message=form.message.value;
   
//    console.log("click");
   
const order={
    service:_id,
    serviceName:title,
    price,
    customer:name,
    email,
    phone,
    message
}

fetch("http://localhost:5000/orders",{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
       
    },
    body:JSON.stringify(order)
})
.then(res=>res.json())
.then(data=>{console.log(data)

    if(data.acknowledged){
        alert("Order placed Successfully..");
        form.reset();
    }
})
.catch(error=>console.error(error));




}





// fetch('http://localhost:5000/services')
//   .then((response) => response.json())
//   .then((data) => console.log(data));



    return (
        <div>

          <Form onSubmit={handlePlaceOrder}>
            <h2 className="text-4xl"> You are about to order: {title}</h2>
            <h4 className='text-xl'>Price:{price}</h4>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 '>
            <input type="text" name='firstname' placeholder="First name" className="input  input-bordered  w-full " />
            <input type="text" name='lastname' placeholder="Last name" className="input  input-bordered  w-full " />
            <input type="text" name='phone' placeholder="your Phone " className="input  input-bordered  w-full  " required />
            <input type="text" name='message' placeholder="Your Email" defaultValue={user?.email} className="input  input-bordered  w-full " />
            </div>
 
            <textarea className="textarea textarea-bordered h-32 w-full mt-4" placeholder="Your message"></textarea>
            <input className='btn bg-orange-600 border-none w-1/2 my-4 	' placeholder='place your Order' type="submit" />

          </Form>

        </div>
    );
};

export default CheckOut;