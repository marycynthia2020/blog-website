import { ToastContainer, toast } from "react-toastify"
import CreatePostForm from "../organisms/CreatePostForm"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import { fetchAllPosts } from "../Hooks/FetchPosts.query"
import { userContext } from "../contexts/UserSignupContext"
import editSelectedPost from "../Hooks/EditPost.mutation"
import { useQueryClient } from "@tanstack/react-query"

const EditPost = () => {
    const queryClient = useQueryClient()
    const [editFormData, setEditFormData] = useState({
        title: "",
        content: "",
        category_id: "",
        featured_image: null 
    })
    const {isLoggedIn} = useContext(userContext)
    const {id} = useParams()
    const {data, isPending, isError, error} = fetchAllPosts()
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}
    const foundPost = data?.find(post => post.id === +id)
    const mutation = editSelectedPost()
    useEffect(()=>{
        if(foundPost){
            setEditFormData({
            title: foundPost.title,
            content: foundPost.content,
            category_id: foundPost.category_id,
            featured_image: null 
    })
        }
    }, [foundPost])
   console.log(foundPost)
   if(isPending) {
    return <span className="text-center">Loading post...</span>
   }
   if(isError) {
    return <span className="text-center">Error getting post</span>
   }
    const handleChange = (e)=>{
        const {value, type, name, files} = e.target
        if(type === "file") {
            setEditFormData(prev => ({...prev, [name]: files[0]}))
            return
        }setEditFormData(prev =>({...prev, [name]: value}))
    }
    const handleSubmit = (e)=>{
         e.preventDefault()
         if(!isLoggedIn){
           toast("Log in to edit post")
           return
         }
         if(editFormData.title && editFormData.content && editFormData.category_id){
            console.log(e.target)
            const newForm = new FormData(e.target)
            // for(let[key, value] of newForm){
            //     console.log(key, value)
            // }
            mutation.mutate({id: foundPost?.id, token: currentUser?.token, editedPostForm: newForm})
            return
         } toast("All Fields are required")
       }
       useEffect(()=>{
        if(mutation.isSuccess){
            // toast("post created ucc")
            console.log(mutation.data)
            // queryClient.invalidateQueries({queryKey: ['posts']})
        }
       }, [mutation.data])

  return (
   <div className='w-full max-w-[1440px] mx-auto px-4'>
      <CreatePostForm postFormData={editFormData} handleChange={handleChange} handleSubmit={handleSubmit} />
      <ToastContainer />
    </div>
  )
}

export default EditPost