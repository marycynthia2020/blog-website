import React, { Children, useContext, useEffect } from 'react'
import { userContext } from '../contexts/UserSignupContext'
import { Outlet, useNavigate } from 'react-router'

const ProtectedRoutes = ({isLoggedIn}) => {
    const navigate = useNavigate()
    useEffect(()=> {
        if(!isLoggedIn){
        navigate("login")
    } 
    }, [isLoggedIn])
    
  return (
    <Outlet />
  )
}

export default ProtectedRoutes