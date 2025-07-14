import React from 'react'

const CommentsCard = ({comment}) => {
  return (
    <div className=''>
        <div class="flex gap-4 items-center mt-4">
            <div class="bg-gradient-to-r from-[#e3068e] to-[#a61eae] text-white rounded-full h-10 w-10 uppercase text-lg flex items-center justify-center">{comment.user.name[0]}</div>
            <div class="flex flex-col gap-1 ">
            <p className='text-[#344767]'>{comment.user.name}</p>
            <p class="text-[#333333B3]">{comment.content}</p>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default CommentsCard