import Image from 'next/image'
import React from 'react'
import brand from "../../Assets/Images/brand (1).png"
export default function CardBrand() {
  return (
    <div className='  w-[4.125rem]  sm:w-20'>
        <Image src={brand} alt='...'  className=' w-full h-auto object-cover' quality={100}/>
    </div>
  )
}
