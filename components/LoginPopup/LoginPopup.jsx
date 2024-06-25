import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';

const LoginPopup = ({setShowLogin}) => {

    const [currState,setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
      <form action="" className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input type="text" name="" id="" placeholder='Your name' required/>}
            <input type="email" name="" id="" placeholder='Your Email'/>
            <input type="password" name="" id="" placeholder='Password' required/>
        </div>
        <button>{currState==="Sign up"?"Create account":"Login"}</button>
        <div className="login-popup-condition">
            <input type="checkbox" name="" id="" required/>
            <p>By continuing I agree with the Term and Conditions of the company.</p>
        </div>
        {currState==="Login"?<p>Create a new Account ? <span onClick={()=>setCurrState("Sign up")}>Click here</span></p>:
        <p>Already have an account ? <span onClick={()=>setCurrState("Login")}>Login here</span ></p>}
      </form>
    </div>
  )
}

export default LoginPopup
