"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { products } from '../../Utils/Context/context';
import Image from 'next/image';
import slider1 from "../../Assets/Images/Ellipse 100.png"
import slider2 from "../../Assets/Images/Ellipse 3.png"
import slider3 from "../../Assets/Images/Ellipse 4.png"
import slider4 from "../../Assets/Images/Ellipse 5.png"
import slider5 from "../../Assets/Images/Ellipse 6.png"
import slider6 from "../../Assets/Images/Ellipse 7.png"
import slider7 from "../../Assets/Images/Ellipse 9.png"
import slider8 from "../../Assets/Images/product 1 (1).png"
import slider9 from "../../Assets/Images/product 1 (2).png"
import slider10 from "../../Assets/Images/product 1 (3).png"


export default function ProductSlider() {
  const styleTitle= "text-secondary text-[0.6875rem] font-semibold leading-line -tracking-letter"
  const styleImage= "rounded-[5.1rem] w-[4.85981rem]  sm:w-20"

  const styleDiv= " flex flex-col  items-center"
  return (
    <div className='    '>
    <Swiper
      spaceBetween={1}
      slidesPerView={4}
      loop={true}

      >
    
    <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider1} alt='product' className={`${styleImage}`}   />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider2} alt='product' className={`${styleImage}`}     />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider3} alt='product' className={`${styleImage}`}     />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider4} alt='product' className={`${styleImage}`}   />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider5} alt='product' className={`${styleImage}`}  />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider6} alt='product' className={`${styleImage}`}   />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider7} alt='product' className={`${styleImage}`}  />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider8} alt='product' className={`${styleImage}`}  />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider9} alt='product' className={`${styleImage}`}   />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>
      <SwiperSlide>  
        <div className={`${styleDiv} `} >
                <Image src={slider10} alt='product' className={`${styleImage}`}    />
                <p className={`${styleTitle}`}>Deals</p></div>
      </SwiperSlide>

   
    </Swiper>
            </div>
  )
}
