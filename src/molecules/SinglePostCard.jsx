const SinglePostCard = ({foundPost}) => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-2">
            <button className="bg-[#006ea] rounded-ull h-10 w-10 text-2xl aspect-square text-white flex items-center justiy-center"><a hre="">&larr;</a></button>
            <div className="flex-grow flex flex-col gap-3 ">
            <img src={foundPost.featured_image_url_full} alt={foundPost.category.name} className="w-ull object-cover rounded-md" />
            <p className=" text-xl lg:text-3xl font-bold text-[#344767]">{foundPost.title}</p>
            <p className="text-[#333333B3] tracking-wide leading-8 text-[#67748E] ">{foundPost.content}</p>
            </div>
      </div>
      <div className="hidden gap-4 mt-4 self-end" id="btns-container">  
            <button className="" id="delete"><img src="/images/delete.svg" alt="delete button" title="delete" width="30px"/></button>
            <button className="" id="edit"><img src="/images/edit.svg" alt="edit button" title="edit" width="30px"/></button>
      </div>
    </div>
  )
}

export default SinglePostCard