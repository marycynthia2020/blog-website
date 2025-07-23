import { useContext, useEffect, useState } from "react"
import { fetchAllPosts } from "../Hooks/FetchPosts.query"
import { userContext } from "../contexts/UserSignupContext"

const Categories = ({iscategoryHidden, setIsCategoryHidden, categories}) => {
    const {result, setResult} = useContext(userContext)
    const {data} = fetchAllPosts()
    const filterNews = (name)=> {
        if(data) {
           setResult(data.filter(news => (news.category.name === name)))
           setIsCategoryHidden(!iscategoryHidden)
        }
    }
  return (
    <>
    {!iscategoryHidden && <div className="flex flex-col gap-2 mb-6 absolute p-2 rounded-md mt-6 bg-white shadow-2xl">
        <div className="flex flex-col gap-4" >
            { categories && categories.data.map(category => (
                <p key={category.id} className="cursor-pointer hover:text-[#e3068e]" onClick={()=> filterNews(category.name)}>{category.name}</p>
            ))} 
        </div>
      </div>}</>
  )
}

export default Categories