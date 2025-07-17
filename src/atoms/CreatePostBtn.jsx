import { NavLink } from 'react-router'

const CreatePostBtn = () => {
  return (
   <div>
     <NavLink  to="createpost" className={({ isActive }) =>
      isActive ? "text-[#a61eae]" : ""
      }>Create Post</NavLink>
   </div>
  )
}

export default CreatePostBtn