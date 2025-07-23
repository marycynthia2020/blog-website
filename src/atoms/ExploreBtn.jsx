import React, { useState } from 'react'
import { fetchAllCategories } from '../Hooks/FetchCategories.query.jsx'
import Categories from '../molecules/Categories.jsx'
const ExploreBtn = () => {
   const [iscategoryHidden, setIsCategoryHidden] = useState(true)
  const {data, isError, isPending, error} = fetchAllCategories() 

  if(isPending ){
    return  <span className='font-bold text-4xl text-center animate-pulse '>Loading...</span>
  }
  if(isError) {
    return <span className='font-bold text-4xl text-center '>{error?.message}</span>
  } 
  return (
    <div>
      <button onClick={()=> setIsCategoryHidden(!iscategoryHidden)} className='text-white py-2 px-6 bg-gradient-to-r from-[#e3068e] to-[#a61eae] rounded-lg'>Explore</button>
      <Categories iscategoryHidden={iscategoryHidden} categories={data} setIsCategoryHidden={setIsCategoryHidden} />
    </div>
  )
}

export default ExploreBtn