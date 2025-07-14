import React, { useState } from 'react'

const Signup = () => {
  const [signupformData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    team_name: ""
  })
  const handleChange = ()=>{
    console.log('hi')
  }
  return (
    <div className='w-full '>
      <div className=" w-full max-w-[600px] mx-auto bg-white rounded-2xl p-6 shadow-2xl text-[#67748E] text-lg">
        <h1 className="text-2xl md:text-3xl text-center font-bold mb-2 bg-gradient-to-r from-[#e3068e] to-[#a61eae] text-transparent bg-clip-text">Create Your Account</h1>
        {/* <p className=" text-center   text-sm mb-6 text-[#a61eae]">Welcome! Please enter your details correctly</p> */}

        <form action="">
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={signupformData.name} onChange={handleChange} placeholder="Enter your name" minLength={5} className="border h-10 p-2 outline-none rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name='email' value={signupformData.email} onChange={handleChange}  placeholder="Enter your email" minLength={5}  className="border h-10 p-2 outline-none rounded-lg" />
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <label htmlFor="password">Password</label>
              <div className="border h-10 p-2  flex justify-between items-center rounded-lg">
                  <input type="password" id="password" name='password' value={signupformData.password} onChange={handleChange} placeholder="Enter your password " minLength={5} className=" outline-none w-4/5"  />
                  <img src="/images/hide.svg" alt="" width="16px" id="eyeIcon" />
              </div>
          </div>
          <div className="flex flex-col gap-2 mb-4">
              <select name="team_name" id="team" value={signupformData.group} onChange={handleChange} className="outline-none p-2">
                  <option value="">Select a group to belong</option>
                  <option value="Elon">Elon</option>
                  <option value="Pull Request">Pull Request</option>
                  <option value="Phoenix">Phoenix</option>
                  <option value="Titans">Titans</option>
                    <option value="404">404</option>
              </select>
          </div>
          <div className="flex gap-2 mb-4">
              <input type="checkbox" id="agreement" name='agreement' value={signupformData.agreement} onChange={handleChange} className=" outline-none accent-[#a61eae]" />
              <label htmlFor="agreement">I accepted all terms and conditions</label>
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg p-2 text-white mb-4">Sign Up</button>
          <p  className="text-center text-[#a61eae] ">Already have an account? <a href="/login.html" className="text-[#e3068e]">Sign in</a></p>
      </form>
      </div>
    </div>
  )
}

export default Signup