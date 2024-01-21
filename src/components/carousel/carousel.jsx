
import React from 'react';
import { Carousel } from 'antd';
import Image from 'next/image';



const MyCarousel = ({data, height, width, className, radius}) => (
  <Carousel className={className}  autoplay>
    {data.map((slide, index) => (
        <div style={{position: 'relative'}} key={index}>
            <Image
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: width, height: height, objectFit: 'cover', borderRadius: radius}}
                src={slide.src}
                alt={slide.title}
            />
        </div>
    ))}
  </Carousel>
);
export default MyCarousel;