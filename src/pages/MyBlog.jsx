import React, { useEffect, useState } from 'react'
import ImageBlogCard from '../molecules/ImageBlogCard'
import { fetchAllPosts } from '../Hooks/FetchPosts.query'

const MyBlog = () => {
    const [blogs, setBlogs] = useState()
    const {data, isPending, isError, error} = fetchAllPosts()
     const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}
    useEffect(()=>{
        if(data){
           setBlogs( data.filter(news => news.user.id === currentUser.user.id ))
        }
    }, [data])
console.log(blogs)
    if(isPending){
        return  <span className='font-bold text-4xl text-center animate-pulse '>Loading...</span>
    }
    if(isError) {
        return <span className='font-bold text-4xl text-center '>{error.message}</span>
    } 
  return (
    <div  className='max-w-[1440px] mb-10 mx-auto px-4 mt-10'>
        <h3 className="text-2xl md:text-3xl  font-bold mb-2">My Blogs</h3>
        <div className=' col-span-5 grid lg:grid-cols-2 gap-4 order-2 '>
              {blogs?.length > 0 
              ? blogs?.map(post =>(
                <ImageBlogCard  key={post.id} post={post} />
              ))
              : <p className='font-bold text-2xl text-center '>You have not published any article</p> }
        </div>
    </div>
  )
}

export default MyBlog