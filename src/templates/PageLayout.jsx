import React from 'react'
import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router'
import Footer from '../organisms/Footer'
import { useLocation } from "react-router"

const PageLayout = () => {
  const location = useLocation();
  const hideFooter = location.pathname === "/signup" || "/login";
  return (
    <div  className='min-h-screen grid grid-rows-[auto_1fr_auto]'>
        <Navbar />
        <div className='mt-28'></div>
        <Outlet  />
        {!hideFooter && <Footer />}
    </div>
  )
}

export default PageLayout
