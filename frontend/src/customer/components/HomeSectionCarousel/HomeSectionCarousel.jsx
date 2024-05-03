import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import { Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { mens_kurta } from '../../../Data/mens_kurta';

const HomeSectionCarousel = () => {

    const [activeIndex,setActiveIndex] = useState(0);
    
    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const slidePrev=()=>{
        console.log('Previous button clicked');
        console.log('Previous activeIndex:', activeIndex);
        setActiveIndex(activeIndex - 1);
        console.log('New activeIndex:', activeIndex);
    }
    const slideNext=()=>{
        console.log('Next button clicked');
        console.log('Previous activeIndex:', activeIndex);
        setActiveIndex(activeIndex + 1);
        console.log('New activeIndex:', activeIndex);
    }

    const syncActiveIndex=({item})=>setActiveIndex(item);

    const items =mens_kurta.slice(0,10).map((item)=><HomeSectionCard product={item}/>);
    return (
        <div className='border'>
            <div className='relative p-5'>
                <AliceCarousel
                    items={items}
                    // disableButtonsControls
                    responsive={responsive}
                    // disableDotsControls
                    onSlideChanged={syncActiveIndex}
                    activeIndex={activeIndex}
                />
                {activeIndex !== items.length-5 && <Button onClick={slideNext} variant='contained' className='z-50' sx={{position:'absolute' , top:"8rem",right:"0rem",transform:"translateX(50%) rotate(90degree) ",bgcolor:"white"}} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(180deg)",color:"black"}} />
                </Button>}

                <Button onClick={slidePrev} variant='contained' className='z-50 bg-white'  sx={{position:'absolute' , top:"8rem",left:"0rem",transform:"translate(-50%) rotate(-90degree) ",bgcolor:"white"}} aria-label='next'>
                    <KeyboardArrowLeftIcon sx={{transform:"rotate(0deg)",color:"black"}} />
                </Button>
            </div>
        </div>
    )
}

export default HomeSectionCarousel