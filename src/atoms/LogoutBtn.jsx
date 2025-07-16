import React, { useContext } from 'react'
import { NavLink } from 'react-router'
import { userContext } from '../contexts/UserSignupContext'

const LogoutBtn = () => {
  const {isLoggedIn, setISLoggedIn } = useContext(userContext)
  return (
    <NavLink to="login" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  } onClick={()=>{
    setISLoggedIn(false)
    localStorage.clear()
    setISLoggedIn(false)
  }} >Log Out</NavLink>
  )
}

export default LogoutBtn