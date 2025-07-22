import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi"
import { Link } from 'react-router'
import { ToastContainer } from "react-toastify";

const LoginForm = ({loginformData, handleSubmit, handleChange}) => {
   const [isPasswordHidden, setIsPasswordHidden] = useState(true)
  return (
    <div
      className="w-full max-w-[600px] mx-auto bg-white rounded-2xl p-6 shadow-2xl text-[#67748E] text-lg">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-2 bg-gradient-to-r from-[#e3068e] to-[#a61eae] text-transparent bg-clip-text">Welcome back!!!</h1>
      {/* <p className=" text-center text-gray-500 text-sm mb-6">Please enter your details correctly</p> */}

      <form action="" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="loginEmail">Email</label>
            <input type="email" id="loginEmail" name="email" value={loginformData.email} onChange={handleChange} placeholder="Enter your email" minLength={5}  className="border-2 h-10 p-2 outline-none" />
        </div>
        <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="loginPassword">password</label>
            <div className="border-2 h-10 p-2  flex justify-between items-center">
                <input type={isPasswordHidden ? "password" : "text"} id="loginPassword" name="password" value={loginformData.password} onChange={handleChange}  placeholder="Enter your password" minLength={5} className=" outline-none w-4/5" />
                {<div onClick={()=> setIsPasswordHidden(!isPasswordHidden)}>{isPasswordHidden? <FiEyeOff /> : <FiEye />}</div>}
            </div>
        </div>
        <button type="submit" className="w-full bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg p-2 text-white mb-4">Sign In</button>
        <p  className="text-center text-[#a61eae]">Don't have an account yet? <Link to="/signup" className="text-[#e3068e]">Sign up</Link></p>
    </form>
    <ToastContainer />
    </div>
  )
}

export default LoginForm