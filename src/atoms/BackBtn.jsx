import React from 'react'
import { Link, useNavigate } from 'react-router'

const BackBtn = () => {
    const navigate = useNavigate()
  return (
    <button onClick={()=>navigate(-1)}  className=' left-4  top-0 absolute w-fit text-white py-2 px-6 bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg'>Back</button>
  )
}

export default BackBtn