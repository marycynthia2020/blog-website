import React, { useContext, useState } from 'react'
import Logo from '../atoms/Logo'
import ExploreBtn from '../atoms/ExploreBtn'
import SignupBtn from '../atoms/SignupBtn'
import LoginBtn from '../atoms/LoginBtn'
import HomeBtn from '../atoms/HomeBtn'
import CreatePostBtn from '../atoms/CreatePostBtn'
import Hamburger from '../atoms/Hamburger'
import { userContext } from '../contexts/UserSignupContext'
import LogoutBtn from '../atoms/LogoutBtn'
import MyBlog from '../atoms/MyBlog'

const Navbar = () => {
  const {isLoggedIn} = useContext(userContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <section className="z-[999] fixed w-full shadow-lg py-6 bg-white  mb-6 md:mb-10 text-[#777777] text-lg ">
        <nav className=" px-4 font-semibold max-w-[1440px] mx-auto text-[#777777] text-lg flex items-center justify-between">
            <div className='flex items-center gap-4'>
              <Logo />
            </div>
            <div className=" hidden md:flex md:gap-8 md:items-center md:justify-between">
                <ExploreBtn />
                 <HomeBtn />
                {isLoggedIn && <CreatePostBtn />}
                {isLoggedIn && <MyBlog />}
                {!isLoggedIn && <SignupBtn />}
                {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
            </div>
            {/* <div className='flex items-center gap-4 md:hidden'>
             
            </div> */}
            <Hamburger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </nav>
        {isMenuOpen && <nav className='absolute flex flex-col h-screen gap-y-4 bg-white w-1/2 px-6 mt-6 py-6' onClick={()=>setIsMenuOpen(false)}>
            <HomeBtn />
            {isLoggedIn && <CreatePostBtn />}
            {isLoggedIn && <MyBlog />}
            {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
           <ExploreBtn />
          </nav>}

    </section>
  )
}

export default Navbar
