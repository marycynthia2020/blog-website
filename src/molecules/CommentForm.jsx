const CommentForm = ({foundPost}) => {
  return (
    <div className = "flex flex-col gap-4 w-full mb-8 mx-auto">
        <p className ="fontt-bold text-3xl">{foundPost.category.name} Comments</p>
        <form className="flex flex-col gap-4" >
           <input type="text" placeholder="Your name" className="border h-10 p-2 outline-none" required />
          <textarea placeholder="share your opinion" className="border p-2 min-h-28 w-full outline-none" required></textarea>
          <button className="rounded-md bg-gradient-to-r from-[#e3068e] to-[#a61eae] p-2 text-white hover:animate-pulse" >Comment</button>
        </form>
    </div>
  )
}

export default CommentForm