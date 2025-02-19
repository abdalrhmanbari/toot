"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import CardBrand from '../Card/card-brand';

export default function BrandSlider() {
    
  return (
    <div className='  mt-4  flex flex-col gap-4  '>
        <div className=' flex items-center justify-between'>

        <h1 className=' text-secondary text-[1rem] sm:text-[1.3rem] font-semibold leading-line-secondary -tracking-letter-secondary'>Top brands</h1>
        <button className=' text-primary text-[0.75rem] sm:text-[1rem] font-medium leading-line-secondary -tracking-letter-secondary cursor-pointer '>See ALL Brands</button>
        </div>
        <div>

    <Swiper
      spaceBetween={1}
      slidesPerView={4}
      loop={true}
      
      >
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
           <SwiperSlide>  
            <CardBrand/>
            </SwiperSlide>
    </Swiper>
          </div>
    </div>
  )
}
