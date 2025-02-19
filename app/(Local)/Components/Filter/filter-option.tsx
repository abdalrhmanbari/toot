import React from 'react'
import FastIcon from '../../Assets/Icon/fast-icon'

export default function FilterOption() {
  return (
    <div className=' container '>
    <button className='  bg-[#0549B0] flex items-center gap-2 rounded-md py-[0.10rem] px-[0.5rem]'><span><FastIcon/></span><span className=' text-white text-[1.125rem] font-semibold'>Fast Delivery</span></button>
    {/* <Option title='Brand' icon={<BrandIcon/>}/>
    <Option title='Brand' icon={<BrandIcon/>}/> */}
  </div>
  )
}
