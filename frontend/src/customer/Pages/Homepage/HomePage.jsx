import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>
        <div className='space-y-10 py-20 flex flex-col justify-center'>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            <HomeSectionCarousel/>
            {/* <HomeSectionCarousel/> */}
        </div>
    </div>
  )
}

export default HomePage


// Nile is an e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer servicegit 