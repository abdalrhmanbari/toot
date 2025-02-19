"use client"
import React from 'react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from "../../Assets/Images/slide1.png"
import slider2 from "../../Assets/Images/Rectangle 4232.png"

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import CardProduct from '../Card/card-product';
export default function Slider() {
  return (
    <div>

<Swiper
      spaceBetween={50}
      modules={[Pagination]}
      className="mySwiper"
      loop={true}
      >
      <SwiperSlide>
        {/* <div className=' rounded-[0.4375rem]'> */}
        <Image src={slider2} alt=".."  className=' rounded-[0.4375rem] w-full h-auto object-cover'  quality={100}  />
        {/* </div> */}
      </SwiperSlide>
      <SwiperSlide>
        {/* <div className='  rounded-[0.4375rem]'> */}
        <Image src={slider1} alt=".." className=' rounded-[0.4375rem] w-full h-auto object-cover' quality={100} />
        {/* </div>   */}
          </SwiperSlide>
    
          </Swiper>
    </div>

      )
}
