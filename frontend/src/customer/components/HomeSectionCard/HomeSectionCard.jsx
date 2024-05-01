import React from 'react'

const HomeSectionCard = () => {
  return (
    <div className='cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3 '>
        <div className='h-[13rem] w-[10rem] '>
            <img className='object-cover object-top w-full h-full' src="https://www.ethnicplus.in/media/catalog/product/cache/32be15c02fc0538dd5b7c85e946b51b1/s/h/shs-sem-prs-505_0_.jpg" alt="" />
        </div>

        <div className='p-4'>
            <h3 className='text-lg font-medium text-gray-900'>Nofilter</h3>
            <p className='mt-2 text-sm text-gray-500'>Women Solid Pure Cotton Straight Kurta</p>
        </div>
    </div>
  )
}

export default HomeSectionCard