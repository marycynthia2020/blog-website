import React, { useContext } from 'react'
import Logo from '../atoms/Logo'
import ExploreBtn from '../atoms/ExploreBtn'
import SignupBtn from '../atoms/SignupBtn'
import LoginBtn from '../atoms/LoginBtn'
import HomeBtn from '../atoms/HomeBtn'
import CreatePostBtn from '../atoms/CreatePostBtn'
import Hamburger from '../atoms/Hamburger'
import { userContext } from '../contexts/UserSignupContext'
import LogoutBtn from '../atoms/LogoutBtn'

const Navbar = () => {
  const {isLoggedIn} = useContext(userContext)
  return (
    <section className=" w-full shadow-lg py-6 bg-white  mb-6 md:mb-10">
        <nav className=" px-4 font-semibold max-w-[1440px] mx-auto text-[#777777] text-lg flex  gap-y-4 items-center justify-between">
            <Logo />
            <div className=" hidden md:flex md:gap-8 md:items-center md:justify-between">
                <ExploreBtn />
                 <HomeBtn />
                <CreatePostBtn />
                {!isLoggedIn && <SignupBtn />}
                {isLoggedIn ? <LogoutBtn /> : <LoginBtn />}
            </div>
            <Hamburger />
        </nav>

    </section>
  )
}

export default Navbar