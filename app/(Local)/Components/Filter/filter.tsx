import React from 'react'
import PreviousIcon from '../../Assets/Icon/previous-icon'
import SearchBar from '../Search/search-bar'
import FastIcon from '../../Assets/Icon/fast-icon'
import Option from "../option/option"
import BrandIcon from '../../Assets/Icon/brand-icon'
import Link from 'next/link'
export default function Filter() {
  return (
    <div className='  container flex flex-col gap-4'>
        <div className=' flex items-center gap-3'>
        <Link href={"/"}><PreviousIcon/></Link>
        <button className=' text-secondary text-[0.875rem] font-semibold  w-[4.6875rem] sm:w-24 py-[0.38rem] px-[0.6rem]  h-8 rounded-[0.375rem] bg-primary '>toot</button>
        <button className=' text-secondary text-[0.875rem] font-semibold  w-[4.6875rem] sm:w-24 py-[0.38rem] px-[0.6rem] h-8 rounded-[0.375rem] bg-white-secondary '>Food</button>
        <button className=' text-secondary text-[0.875rem] font-semibold  w-[4.6875rem] sm:w-24 py-[0.38rem] px-[0.6rem] h-8 rounded-[0.375rem] bg-white-secondary '>Stores</button>
        <button className=' text-secondary text-[0.875rem] font-semibold  w-[4.6875rem] sm:w-24 py-[0.38rem] px-[0.6rem] h-8 rounded-[0.375rem] bg-white-secondary '>Pay</button>
        <button className=' text-secondary text-[0.875rem] font-semibold  w-[4.6875rem] sm:w-24 py-[0.38rem] px-[0.6rem] h-8 rounded-[0.375rem] bg-white-secondary '>Magic</button>
        </div>
        <SearchBar/>


    </div>
  )
}
