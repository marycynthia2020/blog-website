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
        if(mutation.isSuccess){
            console.log(mutation.data)
        }
    }, [foundPost, mutation.data])

    const handleChange = (e)=>{
        const {value, type, name, files} = e.target
        if(type === "file") {
            setEditFormData(prev => ({...prev, [name]: files[0]}))
            return
        }setEditFormData(prev =>({...prev, [name]: value}))
    }
    const handleSubmit = (e)=>{
         e.preventDefault()
          let payloadToSend;
         if(!isLoggedIn){
           toast("Log in to edit post")
           return
         }
         if(!editFormData.title || !editFormData.content || !editFormData.category_id ) {
            toast("All Fields are required")
            return
         }
         if(editFormData.featured_image instanceof File){
            const newForm = new FormData()
            newForm.append('_method', 'PUT');
            newForm.append("title", editFormData.title)
            newForm.append("content", editFormData.content)
            newForm.append("category_id", editFormData.category_id)
           if (editFormData.featured_image instanceof File) {
            newForm.append("featured_image", editFormData.featured_image);
            }
        
            for(let [key, value] of newForm.entries()){
            console.log(key, value)
            }
             payloadToSend = newForm;
         } else{
            payloadToSend = {
                title: editFormData.title,
                content: editFormData.content,
                category_id: Number(editFormData.category_id), 
            };
         }  
            mutation.mutate({id: foundPost?.id, token: currentUser?.token, editedPostForm: payloadToSend})
            return
       }
    
    if(isPending) {
        return <span className="text-center">Loading post...</span>
   }
   if(isError) {
        return <span className="text-center">Error getting post</span>
   }

  return (
   <div className=''>
      <CreatePostForm postFormData={editFormData} handleChange={handleChange} handleSubmit={handleSubmit} postIsPending={mutation.isPending} keyFunction={"Edit"} />
      <ToastContainer />
    </div>
  )
}

export default EditPost