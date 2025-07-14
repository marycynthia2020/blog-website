import React from 'react'
import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router'
import Footer from '../organisms/Footer'

const PageLayout = () => {
  return (
    <div  className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Navbar />
        <Outlet  />
        <Footer />
    </div>
  )
}

export default PageLayout