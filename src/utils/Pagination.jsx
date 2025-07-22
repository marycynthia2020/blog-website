import React, { useEffect, useMemo, useState } from 'react'

const Pagination = ({currentPage, totalPages, nextPage, previousPage}) => {
  return (
    <div className='text-[#333333] flex items-center gap-12 mt-6  max-w-[1440px] mx-auto justify-center border-red-400 '>
        <button className='px-4 py-2 border border-[#a61eae] hover:animate-pulse rounded-lg' disabled={currentPage === 1} onClick={previousPage}>Previous</button>
        <button className='px-7 py-2 border border-[#a61eae] hover:animate-pulse rounded-lg' disabled={currentPage === totalPages} onClick={nextPage}>Next</button>
    </div>
  )
}

export default Pagination