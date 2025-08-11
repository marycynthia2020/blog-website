import { useContext } from 'react'
import { NavLink } from 'react-router'
import { userContext } from '../contexts/UserSignupContext'

const LogoutBtn = () => {
  const {isLoggedIn, setISLoggedIn} = useContext(userContext)
  const handleClick = ()=>{
    localStorage.clear()
    setISLoggedIn(false)
}
  return (
    <NavLink to="login" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  } onClick={handleClick}>Log Out</NavLink>
  )
}

export default LogoutBtn