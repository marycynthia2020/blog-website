import React from 'react'
import { NavLink } from 'react-router'

const BlogBtn = () => {
  return (
 <NavLink to="blog" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  }>Blog</NavLink>
  )
}

export default BlogBtn