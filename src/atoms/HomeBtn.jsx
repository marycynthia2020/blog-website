import React from 'react'
import { Link, NavLink } from 'react-router'

const HomeBtn = () => {
  return (
    <NavLink to="/" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  } >Home</NavLink>
  )
}

export default HomeBtn