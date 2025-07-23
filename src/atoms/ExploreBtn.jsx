import React, { useState } from 'react'
import { fetchAllCategories } from '../Hooks/FetchCategories.query.jsx'
import Categories from '../molecules/Categories.jsx'
import { useNavigate } from 'react-router'
const ExploreBtn = () => {
  const navigate = useNavigate()
   const [iscategoryHidden, setIsCategoryHidden] = useState(true)
  const {data} = fetchAllCategories() 
  const handleClick = () =>{
    navigate("/")
     setIsCategoryHidden(!iscategoryHidden)

  }
  return (
    <div>
      <button onClick={handleClick} className='text-white py-2 px-6 bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg'>Explore</button>
      <Categories iscategoryHidden={iscategoryHidden} categories={data} setIsCategoryHidden={setIsCategoryHidden} />
    </div>
  )
}

export default ExploreBtn