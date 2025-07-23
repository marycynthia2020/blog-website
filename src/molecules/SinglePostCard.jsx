import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
const SinglePostCard = ({foundPost, handleDelete, handleEdit, userId}) => {
  
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
            {/* <button className="bg-[#006ea] rounded-full h-10 w-10 text-2xl aspect-square text-white flex items-center justiy-center"><a hre="">&larr;</a></button> */}
            <div className="flex-grow flex flex-col gap-3 ">
            <img src={foundPost.featured_image_url_full} alt={foundPost.category.name} className="w-full lg:w-3/4 2xl:w-1/2 mx-auto aspect-square object-cover rounded-md" />
            <p className=" text-xl lg:text-3xl font-bold text-[#344767]">{foundPost.title}</p>
            <p className="text-[#333333B3] tracking-wide leading-8 text-[#67748E] ">{foundPost.content}</p>
            </div>
      </div>
      {userId === foundPost.user.id  && <div className=" flex gap-4 mt-4 self-end">
            {/* <button onClick={handleEdit} ><FaEdit className="w-8 h-8" /></button>  */}
            <button onClick={handleDelete} ><RiDeleteBin6Fill className="w-8 h-8" /></button>
      </div>}
    </div>
  )
}

export default SinglePostCard