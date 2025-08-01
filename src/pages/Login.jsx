import React, { useContext, useEffect, useState } from 'react'
import LoginForm from '../organisms/LoginForm'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router'
import { userContext } from '../contexts/UserSignupContext'
import { useLoginUser } from '../Hooks/useLoginUser.mutation'

const Login = () => {
  const {setISLoggedIn} = useContext(userContext)
  const navigate = useNavigate()
  const [loginformData, setLoginformData] = useState({
    email: "",
    password: ""
  })

  const mutation = useLoginUser()

  const handleChange = (e) => {
    setLoginformData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }

  const handleSubmit = (e)=>{
     e.preventDefault()
    if(loginformData.email && loginformData.password){
      mutation.mutate({
        email: loginformData.email.trim(),
        password: loginformData.password.trim()
      })
      return
    }toast("All fields are required")
  }
    useEffect(()=>{
      if(mutation.isSuccess && mutation.data.message === "Invalid credentials"){
        toast("Invalid credentials")
        return
      }  
      if(mutation.isSuccess && mutation.data.token){
            setISLoggedIn(true)
            toast("log in successful")
            localStorage.setItem("isLoggedIn", JSON.stringify(true))
            localStorage.setItem("currentUser", JSON.stringify(mutation.data))
            setTimeout(()=>{
               navigate("/")
            }, 2000)
      }
      
    }, [mutation.isSuccess, mutation.data])

  return (
    <div className='w-full px-4'>
      <LoginForm loginformData={loginformData} handleChange={handleChange} handleSubmit={handleSubmit} isPending={mutation.isPending} />
      <ToastContainer />
    </div>
  )
}

export default Login

