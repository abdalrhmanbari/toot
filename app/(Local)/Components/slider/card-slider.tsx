"use client"
import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CardProduct from '../Card/card-product';
export default function CardSlider() {
  return (
    <div className=' flex flex-col gap-2 mt-6 '>
        <h1 className=' text-secondary text-[1rem] sm:text-[1.3rem] font-semibold leading-line-secondary -tracking-letter-secondary '>Recommended for you</h1>
        <div className=' '>

        <Swiper
      spaceBetween={40}
      slidesPerView={2}
      loop={true}

      >
        
 <SwiperSlide>  
            <CardProduct title='Samsung GalaxyS24 Ultra Dual SI...'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
      </SwiperSlide>
 <SwiperSlide>  
            <CardProduct title='Samsung GalaxyS24 Ultra Dual SI...'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
      </SwiperSlide>
 <SwiperSlide>  
            <CardProduct title='Samsung GalaxyS24 Ultra Dual SI...'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
      </SwiperSlide>
 <SwiperSlide>  
            <CardProduct title='Samsung GalaxyS24 Ultra Dual SI...'  currency='AED' discount={"35%"} discountPrice={4.49} price={3.199}/>
      </SwiperSlide>
      
        </Swiper>
        </div>
        </div>
  )
}
