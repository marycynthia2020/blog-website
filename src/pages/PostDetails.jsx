import { useParams } from "react-router"
import SinglePostCard from "../molecules/SinglePostCard"
import { fetchAllPosts } from "../Hooks/FetchPosts.query"
import CommentForm from "../molecules/CommentForm"
import { fetchPostComments } from "../Hooks/FetchPostComments.query"
import CommentsCard from "../molecules/CommentsCard"
import BackBtn from "../atoms/BackBtn"
import DeletePost from "../Hooks/DeletePost"
import { useEffect } from "react"

const PostDetails = () => {
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}
  const userId = currentUser?.user.id
  const {id} = useParams()
  const {data, isPending, isError, error} = fetchAllPosts() //hook for getting all posts
  const mutation = DeletePost()  //hook for deleting
  const foundPost = data?.find(post => post.id === +id )
  const query = fetchPostComments(foundPost?.id) // for getting a particular post comment
  

  if(isPending || query.isPending){
     return  <span className='fpnt-bold text-4xl text-center'>Loading...</span>
   }
   if(isError || query.isError) {
     return <span className='text-center'>{error.message}</span>
   } 
   const handleDelete = ()=>{
    mutation.mutate({id: foundPost?.id, token:currentUser?.token})
  }

  // useEffect(()=>{
  //   if(mutation.isSuccess  && mutation.data.message === "Post deleted"){
  //     toast("Post deleted")
  //   }
  // }, [mutation.data, mutation.isSuccess])




  const handleEdit = ()=>{

  }

  return (
    <div className='flex flex-col gap-4 mb-8 lg:w-[50%] mx-auto px-4 relative'>
      <BackBtn />
      <SinglePostCard  foundPost={foundPost} handleDelete={handleDelete} handleEdit={handleEdit} userId={userId}  />
      <CommentForm foundPost={foundPost} />
      <div className="bg-white shadow-lg p-4">
        {query.data.length > 0 && <p className="mb-4 text-[#344767] text-2xl font-semibold">{query.data.length} Comments</p>}
        {query.data.length > 0 ?
        query.data.map(comment => (
          <CommentsCard key={comment.id} comment={comment} />
        ))
        : <div className="text-3xl text-[#344767]">No comment on this post</div>
        }
      </div>
    </div>
  )
}

export default PostDetails