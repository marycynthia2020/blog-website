
import { fetchAllCategories,  } from "../Hooks/FetchCategories.query.jsx"

const CreatePostForm = ({postFormData, handleChange, handleSubmit}) => {
    const {data, isPending, isError} = fetchAllCategories()
  return (
    <div className="w-full max-w-[600px] mx-auto shadow-2xl bg-white text-[#67748E] text-lg p-6 rounded-2xl">
                <form action="" onSubmit={handleSubmit} >
                    <div className="flex flex-col gap-2 mb-6">
                        <label htmlFor="post-title">Post Title</label>
                        <input type="text" id="title" name="title" value={postFormData.title} onChange={handleChange} placeholder="Enter a title"  className="border-2 h-10 p-2 outline-none" />
                    </div>
                    <div className="flex flex-col gap-2 mb-6">
                        <label htmlFor="content">Content</label>
                       <textarea id="content" name="content" value={postFormData.content} onChange={handleChange} className="border outline-none min-h-[150px] p-2" placeholder="Write your post"></textarea>
                    </div>
                     <div className="flex flex-col gap-2 mb-6">
                        <label htmlFor="category">Category</label>
                       <select name="category_id" id="category" value={postFormData.category_id} onChange={handleChange} className="outline-none">
                            <option value="">Choose a category</option>
                            {isPending && <option value="">Fetching categories... please wait</option> }
                            { data && data.data.map(category => (
                                <option key={category.id} value={category.id}>{category.id}---{category.name}</option>
                            ))} 
                       </select>
                    </div>
                   <div className="flex flex-col gap-2 mb-6">
                         {/* < <label htmlFor="image">featured Image</label> */}
                        <input type="file" name="featured_image" id="image"  onChange={handleChange} />
                   </div>
                   <button type="submit" className="w-full bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg p-2 text-white mb-4">Post</button>
                </form>
            </div>
  )
}

export default CreatePostForm