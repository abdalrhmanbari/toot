import Image from 'next/image'
import React from 'react'
import advertisement from "../../Assets/Images/Advertisement.png"
export default function Advertisement() {
  return (
        <Image alt='Advertisement' src={advertisement} className=' w-full h-auto object-cover'/>
  )
}
