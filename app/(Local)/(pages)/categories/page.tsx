import React from 'react'
import Filter from '../../Components/Filter/filter'
import Image from 'next/image'
import product from "../../Assets/Images/Categories.png"
export default function Categories() {
  return (
        <div className=' mt-8  flex flex-col gap-4  '>
        <Filter/>
            <div className=' container'>
                <h1 className=' text-secondary text-[1rem] -tracking-letter-secondary font-extrabold'>Categories</h1>
                <div className=' grid grid-cols-3 gap-6'> 
                <div className=' w-[6.5rem] flex flex-col gap-2'>
                    <Image alt='Categories' src={product}/>
                    <h1 className=' text-secondary text-[0.9375rem] font-extrabold leading-4 -tracking-letter-secondary'>Mobiles & accessories</h1>
                </div>
                <div className='w-[6.5rem] flex flex-col gap-2'>
                    <Image alt='Categories' src={product}/>
                    <h1 className=' text-secondary text-[0.9375rem] font-extrabold leading-4 -tracking-letter-secondary'>Mobiles & accessories</h1>
                </div>
                <div className=' w-[6.5rem] flex flex-col gap-2'>
                    <Image alt='Categories' src={product}/>
                    <h1 className=' text-secondary text-[0.9375rem] font-extrabold leading-4 -tracking-letter-secondary'>Mobiles & accessories</h1>
                </div>
                <div className=' w-[6.5rem] flex flex-col gap-2'>
                    <Image alt='Categories' src={product}/>
                    <h1 className=' text-secondary text-[0.9375rem] font-extrabold leading-4 -tracking-letter-secondary'>Mobiles & accessories</h1>
                </div>
                <div className=' w-[6.5rem] flex flex-col gap-2'>
                    <Image alt='Categories' src={product}/>
                    <h1 className=' text-secondary text-[0.9375rem] font-extrabold leading-4 -tracking-letter-secondary'>Mobiles & accessories</h1>
                </div>
                </div>
            </div>
        </div>
  )
}
