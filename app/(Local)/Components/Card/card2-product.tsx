import Image from 'next/image'
import React from 'react'
import clothes from "../../Assets/Images/Rectangle 4234.png"
import FavoriteIcon from '../../Assets/Icon/favorite-icon'
import bg from "../../Assets/Images/Ellipse 48.svg"
import add from "../../Assets/Images/trolley_9815333 1.png"
import delivery from "../../Assets/Images/delivery-truck_6672341 1.png"
import StarIcon from '../../Assets/Icon/star-icon'
export default function Card2Product({ title, currency, price, discount, discountPrice}:{ title:string, currency:string, price:number, discount:string, discountPrice:number}) {
  return (
    <div className='  bg-white-color  rounded-[0.25rem] border border-white-secondary  sm:w-60 pt-2 pb-3 ps-[0.37rem] pe-[0.56rem] flex flex-col gap-[0.80rem]'>
        <div className=' relative w-[7.8125rem] sm:w-56'>
                <span className='     absolute z-10  end-0  '><FavoriteIcon/></span>
                <Image src={clothes} alt='..' className=' w-full h-auto object-cover' quality={100} width={100} height={100} />
                
                <span className=' absolute  start-0 top-[80%]  w-fit  flex items-center gap-[0.10rem] px-1 text-secondary text-[0.6875rem] font-extrabold leading-4 -tracking-letter-secondary bg-white-color rounded-[2.3125rem]'>4.5 <StarIcon/> <span className=' font-thin'>(1.1k)</span></span>
                    
                <div className=' absolute z-10  end-0   top-3/4 '>
                <Image src={bg} alt='..' className=' w-full h-auto object-cover' quality={100} />
                <Image src={add} alt='..' className=' absolute top-1/4 left-1/4   w-[0.9375rem] h-auto object-cover ' quality={100} />
                </div>
             
        </div>
            <h1 className=' text-secondary text-[0.8125rem] sm:text-[1rem]  font-semibold leading-line-secondary'>{title}</h1>
        <div>
            <div className=' flex gap-2 justify-center items-center'>
            <h2 className=' text-secondary text-[0.625rem] sm:text-[0.8rem]  leading-line-secondary -tracking-letter-secondary '>{currency} </h2>
                <span className=' text-secondary text-[0.8125rem] sm:text-[1rem] font-semibold leading-line-secondary -tracking-letter-secondary'>{price}</span>
                <h1 className=' text-[#989D9F] text-[0.625rem] sm:text-[0.8rem]'>{discountPrice}</h1>
                    <span className=' text-primary text-[0.625rem] sm:text-[0.8rem] font-semibold leading-line-secondary -tracking-letter-secondary'>{discount}</span>
            </div>
            <div className=' flex items-center gap-2'>
                <Image alt='delivery' src={delivery}/>
                <h1 className=' text-secondary text-[0.625rem] sm:text-[0.8rem] leading-line-secondary -tracking-letter-secondary'>Free Delivery</h1>
            </div>
            <p className=' bg-[#FFC107] rounded-tl-[0.375rem] rounded-bl-[0.375rem] rounded-br-[0.375rem] w-fit px-[1rem]  text-secondary text-[0.625rem] sm:text-[0.8rem] font-medium leading-line-secondary -tracking-letter-secondary mt-[0.60rem]'>express</p>
        </div>
    </div>
  )
}
