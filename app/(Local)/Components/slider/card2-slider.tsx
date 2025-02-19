"use client"
import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardProduct from '../Card/card-product';
import Card2Product from '../Card/card2-product';
export default function Card2Slider() {
  return (
    <div className=' flex flex-col gap-2 mt-6 '>
        <div className=' flex items-center justify-between'>
        <h1 className=' text-secondary text-[1rem] sm:text-[1.3rem] font-semibold leading-line-secondary -tracking-letter-secondary '>Popular products</h1>
        <button className=' text-primary text-[0.75rem] sm:text-[1rem] font-medium leading-line-secondary -tracking-letter-secondary cursor-pointer '>VIEW ALL</button>
        </div>
        <div>

    <Swiper
      spaceBetween={40}
      slidesPerView={2}
      loop={true}

      >
        
 <SwiperSlide>  
            <Card2Product title='H&M UAE Collection Knitted cardigan'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
      </SwiperSlide>
 <SwiperSlide>  
 <Card2Product title='H&M UAE Collection Knitted cardigan'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
 </SwiperSlide>
 <SwiperSlide>  
 <Card2Product title='H&M UAE Collection Knitted cardigan'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
 </SwiperSlide>
 <SwiperSlide>  
 <Card2Product title='H&M UAE Collection Knitted cardigan'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
 </SwiperSlide>
      
        </Swiper>
        </div>
        </div>
  )
}
