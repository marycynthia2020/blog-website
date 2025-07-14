import React from 'react'
import { NavLink } from 'react-router'

const SignupBtn = () => {
  return (
    <NavLink to="signup" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  }>Sign Up</NavLink>
  )
}

export default SignupBtn