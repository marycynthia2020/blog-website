import React from 'react'
import { NavLink } from 'react-router'

const ExploreBtn = () => {
  return (
    <NavLink to="/" className='text-white py-2 px-6 bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg'>Explore</NavLink>
  )
}

export default ExploreBtn