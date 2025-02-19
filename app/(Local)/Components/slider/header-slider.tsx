"use client"
import React from 'react'
import Image from 'next/image'
import "swiper/swiper-bundle.css"
import rectangle from "../../Assets/Images/Rectangle 4217.png"
import T from  "../../Assets/Images/t_xA0_Image.png"
import shop from  "../../Assets/Images/business_16576723 1.png"
import business from  "../../Assets/Images/shop_8123143 1.png"
import logo from "../../Assets/Images/Rectangle_1_xA0_Image.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import Magic from '../../Assets/Icon/magic-icon'
export default function HeaderSlider() {
  return (
    <header  className=' flex gap-4'>
    <Swiper
      spaceBetween={25}
      slidesPerView={4}
    //   loop={true}

      >
        <div className=' flex gap-8 '>

    <SwiperSlide>
<div className=' w-[4.6875rem] h-[4.375rem] border-2 border-primary   rounded-[0.375rem] flex flex-col justify-center items-center  shadow-boxShadow shadow-black/25 '>
  <div className=' relative'>
  <Image src={logo} alt='..' className=' h-auto  object-cover ' quality={100}   />
  <Image src={T} alt='..' className=' h-auto  object-cover absolute  top-1/4 left-1/3 -translate-x-1/4  ' quality={100}   />
  </div>
  <h1 className=' text-primary text-[0.875rem] font-bold pt-[0.3rem] '>toot</h1>
    </div>
    </SwiperSlide>
    <SwiperSlide>
<div className=' w-[4.6875rem] h-[4.375rem] rounded-[0.375rem] border  border-white-secondary  flex flex-col justify-center  items-center shadow-boxShadow shadow-black/25 '>
      <h1  className=' text-secondary text-[1rem]  font-bold leading-[1rem] -tracking-[0.04rem]'>TOOT</h1>
      <h1 className=' text-[#FFC107] font-bold -tracking-[0.04rem] '>FOOD</h1>
      <div className='  bg-[#FF5A5F52] w-6 h-2 rounded-md  flex justify-center  me-auto ms-4'>
      
      <p className=' text-[#FF5A5F] text-[0.5rem] font-bold z-0  flex justify-center items-center  '>soon</p>
      </div>
    </div>
    </SwiperSlide>
    <SwiperSlide>
<div className=' w-[4.6875rem] h-[4.375rem] rounded-[0.375rem] border border-white-secondary flex flex-col justify-center items-center shadow-boxShadow shadow-black/25 gap-[0.31rem]'>
      
<Image src={business} alt='..'    className='w-[1.9375rem] object-cover h-auto ' quality={100} />
      <h1 className=' text-[#D20041] font-bold text-[0.75rem]'>Stores</h1>
</div>
</SwiperSlide>
<SwiperSlide>
            <div className=' w-[4.6875rem] h-[4.375rem] rounded-[0.375rem] border border-white-secondary  flex flex-col justify-center items-center gap-[0.31rem]  shadow-boxShadow shadow-black/25'>
<Image src={shop} alt='..'  className='w-[1.9375rem] h-auto object-cover' quality={100} />
            <h1 className=' text-[#003960] font-bold text-[0.75rem]'>Pay</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className=' w-[4.6875rem] h-[4.375rem]'>
            <Magic/>
            </div>
          
            </SwiperSlide>
        </div>
          
            </Swiper>
        </header>
  )
}
