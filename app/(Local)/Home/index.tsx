import React from 'react'

import SearchBar from '../Components/Search/search-bar'
import Location from '../Components/Location/location'
import Slider from '../Components/slider/slider'
import Ellipse from "../Assets/Images/Ellipse 1.svg"
import ProductSlider from '../Components/slider/product-slider'
import CardProduct from '../Components/Card/card-product'
import HeaderSlider from '../Components/slider/header-slider'
import CardSlider from '../Components/slider/card-slider'
import BrandSlider from '../Components/slider/brand-slider'
import Card2Slider from '../Components/slider/card2-slider'
import AdvertisementHome from '../Components/Advertisement/advertisement-home'

export default function Home() {
  return (
    <div className=' mt-[2rem]'>
    
        <div className=' flex flex-col gap-6 container '>
        <HeaderSlider/>
      <SearchBar/>
      <Location/>
        </div>
      <div className=' pt-4 ps-5 pe-6 '>
      <Slider/>
      </div>
      <div className=' mb-[1.42rem] mt-4'>
      <AdvertisementHome/>
      </div>
      <div className=' flex flex-col gap-6 container '>
        <ProductSlider/>
      <CardSlider/>
      <BrandSlider/>
      <Card2Slider/>
      </div>

   

    </div>
  )
}
