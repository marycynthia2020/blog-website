import React from 'react'
import {ReadmoreBtn} from '../atoms/ReadmoreBtn'
import { useNavigate } from 'react-router'

const NoImageBlogCard = ({post}) => {
  const navigate = useNavigate()
  return (
    <div className = " flex flex-col p-4 gap-3 bg-white w-full " onClick={()=> navigate(`postdetails/${post.id}`)}>
        <div className="flex-grow flex flex-col gap-3 cursor-pointer">
            {/* <img src={post.featured_image_url_full} alt={post.category.name} className="w-full aspect-square object-cover rounded-md" /> */}
            <h4 className=" text-xl font-bold text-[#344767]">{post.title.slice(0, 30)}....</h4>
            <p className=" leading-6 text-[#67748E] text-sm ">{post.content.slice(0, 200)}...</p>
            <ReadmoreBtn />
        </div>
    </div>
  )
}

export default NoImageBlogCard