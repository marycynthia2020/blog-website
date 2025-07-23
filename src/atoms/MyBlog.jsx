import React from 'react'
import { NavLink } from 'react-router'

const MyBlog = () => {
  return (
    <NavLink to="/myblog" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  } >My Blog</NavLink>
  )
}

export default MyBlog