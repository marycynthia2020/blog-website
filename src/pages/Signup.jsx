import React, { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import SignUpform from '../organisms/SignUpform'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router'
import { registerUser } from '../utils/RegisterUser'

const Signup = () => {
  const navigate = useNavigate()
  const [signupFormData, setSignupFormData] = useState({
    name: "",
    email: "",
    password: "",
    team_name: ""
  })
  const mutation = useMutation({
    mutationFn: registerUser
  })
 
  const handleChange = (e)=>{
    setSignupFormData(prev => {
      return {...prev, [e.target.name]: e.target.value}
    })
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    if(signupFormData.name && signupFormData.email && signupFormData.password && signupFormData.team_name){
      mutation.mutate({
        name:signupFormData.name.trim(),
        email: signupFormData.email.trim(),
        password: signupFormData.password.trim(),
        team_name: signupFormData.team_name.trim()
      })
      return
    } toast("All fields are required")
  }

  useEffect(()=>{
    if(mutation.isSuccess && mutation.data.errors?.email[0] === "The email has already been taken."){ 
      toast("This email has already been taken")
      return                  
    }
    if(mutation.isSuccess && mutation.data.token){
      toast("Sign up succesful")
     setTimeout(()=>{
      navigate("/login")
     }, 2000)
    }
  }, [mutation.data])
  
  return (
    <div className='w-full px-4 '>
      <SignUpform handleChange={handleChange} handleSubmit={handleSubmit} signupFormData={signupFormData} />
      <ToastContainer />
    </div>
  )
}

export default Signup