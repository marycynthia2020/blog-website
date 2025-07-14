import React from 'react'
import { NavLink } from 'react-router'

const LoginBtn = () => {
  return (
    <NavLink to="login" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  }>Log In</NavLink>
  )
}

export default LoginBtn