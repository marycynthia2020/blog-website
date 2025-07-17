import { NavLink } from 'react-router'

const LogoutBtn = () => {
  return (
    <NavLink to="login" className={({ isActive }) =>
    isActive ? "text-[#a61eae]" : ""
  } onClick={()=> localStorage.clear()} >Log Out</NavLink>
  )
}

export default LogoutBtn