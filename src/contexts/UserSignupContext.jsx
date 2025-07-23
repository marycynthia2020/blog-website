import { createContext, useState } from "react"

export const userContext = createContext()

const UserSignupContext = ({children}) => {
  const [isLoggedIn, setISLoggedIn] = useState(JSON.parse(localStorage.getItem("isLoggedIn")) || false)
    const [result, setResult] = useState([])
  const value={
    isLoggedIn,
    setISLoggedIn,
    result,
    setResult
  }
  return (
    <userContext.Provider value={value}>{children}</userContext.Provider>
  )
}

export default UserSignupContext