import React from 'react'
import BackBtn from '../atoms/BackBtn'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen mt-6 '>
        <p className=' text-2xl font-bold'>Page Not Found. Please Return</p>
        <BackBtn />
    </div>
  )
}

export default NotFound