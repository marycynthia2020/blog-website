import { useNavigate, useParams } from "react-router"
import SinglePostCard from "../molecules/SinglePostCard"
import { fetchAllPosts } from "../Hooks/FetchPosts.query"
import CommentForm from "../molecules/CommentForm"
import { fetchPostComments } from "../Hooks/FetchPostComments.query"
import CommentsCard from "../molecules/CommentsCard"
import BackBtn from "../atoms/BackBtn"
import DeletePost from "../Hooks/DeletePost"
import { useContext, useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import PostComment from "../Hooks/PostComment.mutation"
import { userContext } from "../contexts/UserSignupContext"
import { QueryClient, useQueryClient } from "@tanstack/react-query"

const PostDetails = () => {
  const queryClient = useQueryClient()
  const {isLoggedIn} = useContext(userContext)
  const navigate = useNavigate()
  const [commentData, setCommentData] = useState({
  name:  "",
  commentContent: ""
  })
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}
  const userId = currentUser?.user?.id
  const {id} = useParams()
  const {data, isPending, isError, error} = fetchAllPosts() //hook for getting all posts
  const mutation = DeletePost()  //hook for deleting
  const foundPost = data?.find(post => post.id === +id )
  const query = fetchPostComments(foundPost?.id) // for getting a particular post comment
  const commentMutation = PostComment()

  const handleDelete = ()=>{
    const confirmDelete = confirm("Are you sure you wish to delete this post?")
    if(confirmDelete){
      mutation.mutate({id: foundPost?.id, token:currentUser?.token})
      return
    } 
  }
  // const handleEdit = (id)=>{
  //     navigate(`postdetails/${foundPost.id}/edit`)
  // }
  const handleCommentChange = (e)=>{
    setCommentData(prev => ({...prev, [e.target.name]: e.target.value}))
  }
 
  const handleCommenting = (e)=>{
    e.preventDefault()
     console.log(commentData.commentContent)
   if(!isLoggedIn){
    toast("Please log in to make a comment")
    return
   } commentMutation.mutate({id:foundPost?.id, token: currentUser?.token, newComment: {content: commentData.commentContent}})
  }

   useEffect(()=>{

    if( mutation.isSuccess && mutation.data.message === "Post deleted"){ //checks for succesful deletion
      toast("Post deleted")
      setTimeout(()=>{
        navigate("/")
      }, 1000)
    }

    if(commentMutation.isSuccess && commentMutation.data){
      setCommentData({name:"", commentContent: ""})
      toast("Comment posted Successfully")
      queryClient.invalidateQueries({ queryKey: ['comments'] })
    // , navigate(`postdetails/${foundPost.id}`)
      // return
      // console.log(commentMutation.data)
    }
  }, [mutation.data, commentMutation.data, query.data])
 
  if(isPending || query.isPending){
     return  <span className='font-bold text-4xl text-center'>Loading...</span>
   }
   if(isError || query.isError) {
     return <span className='text-center'>{error.message}</span>
   } 

  return (
    <div className='flex flex-col gap-4 mb-8 lg:w-[50%] mx-auto px-4 relative '>
      <BackBtn />
      <SinglePostCard  foundPost={foundPost} handleDelete={handleDelete} handleEdit={()=> navigate(`/postdetails/${foundPost.id}/edit`)} userId={userId}  />
      <CommentForm foundPost={foundPost} handleCommenting={handleCommenting} handleCommentChange={handleCommentChange} commentData={commentData} />
      <div className="bg-white shadow-lg p-4">
        {query.data.length > 0 && <p className="mb-4 text-[#344767] text-2xl font-semibold">{query.data.length} Comments</p>}
        {query.data.length > 0 ?
        query.data.map(comment => (
          <CommentsCard key={comment.id} comment={comment} />
        ))
        : <div className="text-3xl text-[#344767]">No comment on this post</div>
        }
      </div>
      <ToastContainer />
    </div>
  )
}

export default PostDetails