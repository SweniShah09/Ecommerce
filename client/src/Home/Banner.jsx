import React from 'react'
import Carousel from 'react-multi-carousel'
import { bannerData } from '../Constants/data';
import { styled } from '@mui/material';
import "react-multi-carousel/lib/styles.css";


const responsive= {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
},
tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
},
mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
}
};

const Image = styled('img')({
  width: '100%',
  height: '280'

})

const Banner = () => {
  return (
      <Carousel
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          showDots={false}
          slidesToSlide={1}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          responsive={responsive}
         
      >
          {
              bannerData.map(image => (
                  <Image src={image.url} alt="banner" id={image.id} />
              ))
          }
      </Carousel>
  )
}

export default Banner
