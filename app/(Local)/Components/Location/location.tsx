import React from 'react'
import LocationIcon from '../../Assets/Icon/location-icon'
import OptionIcon from '../../Assets/Icon/option-icon'

export default function Location() {
  return (
    <div className=' flex  items-center gap-[0.19rem]'>
        <LocationIcon/>
<span className=' flex gap-1  text-secondary text-[0.8125rem] sm:text-[1rem] -tracking-[0.0325rem]'>Deliver to   <h1 className=' font-semibold'> Al Taawun St - Al Mamzar - Sharjah</h1></span>
      <span className=' mt-2 ms-1'>
      <OptionIcon/>
      </span>
    </div>
  )
}
