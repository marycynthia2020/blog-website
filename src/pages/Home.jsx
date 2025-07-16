import React from 'react'
import Hero from '../molecules/Hero'
import { fetchAllPosts } from '../Hooks/FetchPosts.query'
import ImageBlogCard from '../molecules/ImageBlogCard'
import NoImageBlogCard from '../molecules/NoImageBlogCard'

const Home = () => {
  const {data, isPending, isError, error} = fetchAllPosts()
  if(isPending){
    return  <span className='font-bold text-4xl text-center animate-pulse'>Loading...</span>
  }
  if(isError) {
    return <span className='font-bold text-4xl text-center'>{error.message}</span>
  } 
  return (
    <div className=''>
      {/* <Hero /> */}
      <div className='max-w-[1440px] mb-10 mx-auto grid lg:grid-cols-8 gap-4 px-4  '>
          <div className='col-span-5 grid lg:grid-cols-2 gap-4  '>
            {data.slice(0,2).map(post =>(
              <ImageBlogCard key={post.id} post={post}  />
            ))}
          </div>
          <div className='col-span-3 flex flex-col'>
            {data.slice(2,5).map(post =>(
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
              {data.slice(13,15).map(post =>(
                <ImageBlogCard  key={post.id} post={post} />
              ))}
            </div>
            <div className=' col-span-3 flex flex-col order-1'>
              {data.slice(15,18).map(post =>(
                <NoImageBlogCard  key={post.id} post={post} />
              ))}
            </div>
        </div>
    </div>
    
  )
}

export default Home