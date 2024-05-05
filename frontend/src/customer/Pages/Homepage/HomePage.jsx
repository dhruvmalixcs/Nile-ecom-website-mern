import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from '../../../Data/mens_kurta'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
            <HomeSectionCarousel data={mens_kurta} sectionName={"men's sections"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"men's shoes"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"men's shirt"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"women's saree"}/>
            <HomeSectionCarousel data={mens_kurta} sectionName={"women's dress"}/>
        </div>
    </div>
  )
}

export default HomePage


// Nile is an e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer servicegit 