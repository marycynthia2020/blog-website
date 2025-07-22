import React, { useEffect, useMemo, useState } from 'react'
import Hero from '../molecules/Hero'
import { fetchAllPosts } from '../Hooks/FetchPosts.query'
import ImageBlogCard from '../molecules/ImageBlogCard'
import NoImageBlogCard from '../molecules/NoImageBlogCard'
import Pagination from '../utils/Pagination'

const Home = () => {
  const {data, isPending, isError, error, isSuccess} = fetchAllPosts()
  const [result, setResult] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 18
  const totalPages = Math.ceil((data?.length || 0) / itemsPerPage);
  const lastIndex = currentPage * itemsPerPage
  const firstIndex = lastIndex - itemsPerPage
  const currentItems =  (useMemo(() => {
    return data?.slice(firstIndex, lastIndex);
  }, [data, firstIndex, lastIndex])
  )
  useEffect(()=>{
    setResult(currentItems)
  }, [currentItems])
  const nextPage =()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }
    const previousPage = ()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage -1)
        }
    }
  

  if(isPending){
    return  <span className='font-bold text-4xl text-center animate-pulse '>Loading...</span>
  }
  if(isError) {
    return <span className='font-bold text-4xl text-center '>{error.message}</span>
  } 
  console.log(result?.length, 12)
  return (
    <div className=''>
      <Hero />
      <div className='max-w-[1440px] mb-10 mx-auto grid lg:grid-cols-8 gap-4 px-4  '>
          <div className='col-span-5 grid lg:grid-cols-2 gap-4  '>
            {result?.slice(0, 2).map(post =>(
              <ImageBlogCard key={post.id} post={post}  />
            ))}
          </div>
          <div className='col-span-3 flex flex-col'>
            {result?.slice(2,5).map(post =>(
              <NoImageBlogCard  key={post.id} post={post} />
            ))}
          </div>
        </div>
          <div className=" max-w-[1440px] mx-auto  grid md:grid-cols-2 lg-grid-cols-3 xl:grid-cols-4 gap-6 mb-10 px-4">
            {data.slice(5, 13).map(post => (
            <ImageBlogCard  key={post.id} post={post}  />
          ))}
          </div>
          <div className='max-w-[1440px] mx-auto grid lg:grid-cols-8 gap-4 px-4 '>
            <div className=' col-span-5 grid lg:grid-cols-2 gap-4 order-2 '>
              {result?.slice(13,15).map(post =>(
                <ImageBlogCard  key={post.id} post={post} />
              ))}
            </div>
            <div className=' col-span-3 flex flex-col order-1'>
              {result?.slice(15, 18).map(post =>(
                <NoImageBlogCard  key={post.id} post={post} />
              ))}
            </div>
        </div>
        <Pagination 
        currentPage={currentPage}
        totalPages={totalPages}
        nextPage={nextPage}
        previousPage={previousPage}
         />
    </div>
    
  )
}

export default Home