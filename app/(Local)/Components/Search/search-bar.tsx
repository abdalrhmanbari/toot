import React from 'react'
import SearchIcon from '../../Assets/Icon/search-icon'

export default function SearchBar() {
  return (
    <form action="" className=' rounded-[0.375rem]'>
    <div className=' relative  flex items-center'>
      <span className=' absolute ps-2'>
      <SearchIcon />
      </span>
      {/* <input type='text' name='search' placeholder='search' autoComplete='off' aria-label='search talk' className=' pr-3 pl-10 py-2  text-[0.875rem] font-semibold placeholder-[#989D9F]   w-full text-[#989D9F]   border rounded-[0.375rem]   border-[#D9D9D9]   focus:border-'/> */}
      <input type='text' name='search' placeholder='search' autoComplete='off' aria-label='search talk' className=' block w-full rounded-md bg-white-secondary pr-3 pl-10 py-2  text-[0.875rem] font-semibold placeholder-[#989D9F]  text-[#989D9F]  outline-1 -outline-offset-1 outline-[#D9D9D9]  placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-[#D9D9D9] sm:text-sm/6'/>
    </div>
  </form>
  )
}
