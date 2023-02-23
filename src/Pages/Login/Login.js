import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from "../../assets/images/login/login.svg";
import { AuthContext } from '../../Contex/AuthProvider';

const Login = () => {
  
  const {signIn}=useContext(AuthContext);
  const navigate = useNavigate();
  const location=useLocation();
  const from=location.state?.from?.pathname || "/";

  const [error,setError]=useState("");



  const handleLogin=(event)=>{
    
    event.preventDefault();
    const form=event.target; 
    const email=form.email.value;
    const password=form.password.value;

    signIn(email,password)

   .then(result=>{
    const user=result.user;
    console.log("user", user);
    form.reset();
    setError(" ");
    navigate(from,{replace:true});
    
   })

  .catch((error)=>{
    console.error(error);
    setError(error.message);
  })

}



    return (
        <div className="hero w-full">
        <div className="hero-content gap-20 grid lg:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
           <img className='h-auto  w-3/4' src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 my-16  py-20">
          
          
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" name='password' placeholder="password" className="input input-bordered"required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary" type="submit" value="Login" />
              </div>
            </form>
            <p className='text-center'>New to Service Center <Link className='text-orange-600 ' to="/signup">SignUp</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;