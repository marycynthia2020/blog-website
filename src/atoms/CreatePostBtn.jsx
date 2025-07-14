import React from 'react'
import { NavLink } from 'react-router'

const CreatePostBtn = () => {
  return (
    <NavLink to="createpost" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  }>Create post</NavLink>
  )
}

export default CreatePostBtn