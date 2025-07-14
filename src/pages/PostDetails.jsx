import { useParams } from "react-router"
import SinglePostCard from "../molecules/SinglePostCard"
import { fetchAllPosts } from "../Hooks/FetchPosts.query"
import CommentForm from "../molecules/CommentForm"
import { fetchPostComments } from "../Hooks/FetchPostComments.query"
import CommentsCard from "../molecules/CommentsCard"
import BackBtn from "../atoms/BackBtn"

const PostDetails = () => {
  const {id} = useParams()
  const {data, isPending, isError, error} = fetchAllPosts()
  const foundPost = data.find(post => post.id ===+id )
  const query = fetchPostComments(foundPost.id)

  if(isPending || query.isPending){
     return  <span className='fpnt-bold text-4xl text-center'>Loading...</span>
   }
   if(isError || query.isError) {
     return <span className='text-center'>{error.message}</span>
   } 

    // console.log(query.data)
  return (
    <div className='flex flex-col gap-4 mb-8 lg:w-[50%] mx-auto px-4 relative'>
      <BackBtn />
      <SinglePostCard  foundPost={foundPost} />
      <CommentForm foundPost={foundPost} />
      <div className="bg-white shadow-lg p-4">
        {query.data.length > 0 && <p className="mb-4 text-[#344767] text-2xl font-semibold">{query.data.length} Comments</p>}
        {query.data.length > 0 ?
        query.data.map(comment => (
          <CommentsCard comment={comment} />
        ))
        : <div className="text-3xl text-[#344767]">No comment on this post</div>
        }
      </div>
    </div>
  )
}

export default PostDetails