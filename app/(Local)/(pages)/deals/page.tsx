import React from 'react'
import Filter from '../../Components/Filter/filter'
import Image from 'next/image'
import sale from "../../Assets/Images/sale.png"
import BrandSlider from '../../Components/slider/brand-slider'
import ProductSlider from '../../Components/slider/product-slider'
import Advertisement from '../../Components/Advertisement/advertisement'
import FilterOption from '../../Components/Filter/filter-option'
export default function Deals() {
  return (
    <div className='  mt-8 '>
      <div className=' flex flex-col gap-4'>
        <Filter/>
        <FilterOption/>
      </div>
        <div className=' flex flex-col gap-6 mt-4 px-3 bg-[#FFFFA9] pt-4 pb-7'>
        <Image alt='sale' src={sale} className=' w-full h-auto object-cover' />
        <ProductSlider/>
        <Advertisement/>
        </div>
    </div>
  )
}
