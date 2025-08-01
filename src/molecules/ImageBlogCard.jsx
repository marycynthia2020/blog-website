import React from 'react'
import{ ReadArticle } from '../atoms/ReadmoreBtn'
import { useNavigate } from 'react-router'

const ImageBlogCard = ({post}) => {
  const navigate = useNavigate()
  return (
    <div className = " flex flex-col gap-3 p-4 bg-white" onClick={()=> navigate(`/postdetails/${post.id}`)} >
        <div className="flex-grow flex flex-col gap-3 cursor-pointer">
            <img src={post.featured_image_url_full} alt={post.category.name} className={`w-full h-[300px] object-cover rounded-md`} />
            <h4 className=" text-xl font-bold text-[#344767]">{post.title.slice(0, 35)}....</h4>
            <p className="text-[#67748E] text-sm  leading-6">{post.content.slice(0, 350)}...</p>
        </div>
         <ReadArticle />
    </div>
  )
}

export default ImageBlogCard