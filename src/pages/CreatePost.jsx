import React, { useContext, useEffect, useState } from 'react'
import CreatePostForm from '../organisms/CreatePostForm'
import { userContext } from '../contexts/UserSignupContext'
import { toast, ToastContainer } from 'react-toastify'
import { createPost } from '../Hooks/CreatePost.mutation'
import { useNavigate } from 'react-router'

const CreatePost = () => {
  const navigate = useNavigate()
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}
  const token = currentUser?.token
  const {isLoggedIn} = useContext(userContext)
  const [postFormData, setPostFormData] = useState({
        title: "",
        content: "",
        category_id: null,
        featured_image: null
    })
    const mutation = createPost()

    const handleChange = (e)=>{
        const {value, type, name, files} = e.target
        if(type === "file") {
            setPostFormData(prev => ({...prev, [name]: files[0]}))
            console.log(files[0])
            return
        }setPostFormData(prev =>({...prev, [name]: value}))
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      if(!isLoggedIn){
        toast("Log in to be able to create post")
        return
      }
      if(postFormData.title && postFormData.content && postFormData.category_id && postFormData.featured_image){
         const newForm = new FormData(e.target)
         mutation.mutate({token: token, newPost: newForm})
         return
      } toast("All Fields are required")
    }

    useEffect(()=>{
      if(mutation.isSuccess){
        toast("Post created succesfully")
        setTimeout(()=>{
          navigate("/")
        }, 2000)
      }
    }, [mutation.data])

  return (
    <div className='   '>
      <CreatePostForm postFormData={postFormData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  )
}

export default CreatePost