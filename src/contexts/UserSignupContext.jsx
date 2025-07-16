import { createContext, useState } from "react"

export const userContext = createContext()

const UserSignupContext = ({children}) => {
  const [isLoggedIn, setISLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)
  const value={
    isLoggedIn,
    setISLoggedIn,
  }
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}

export default UserSignupContext