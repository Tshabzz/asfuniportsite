"use client"

import { useEffect, useState } from "react"
import { Video } from "./video"
import Slider from "react-slick"

const Videos = ({className}) => {
    const [videos, setVideos] = useState([
        {
            title: 'SDA 86 |ASF UNIPORT CHAPTER|',
            url: 'https://youtu.be/WaKbi-PF648?si=5gMJz8Q5pKEcwIvv',
            description: ''
        },
        {
            title: 'HOW EXCELLENT||ASF UNIPORT',
            url: 'https://youtu.be/d0hEP4f4_SI?si=qdxaYb9vi2LxBQ1i',
            description: ''
        },
        {
            title: 'ALMOST HOME',
            url: 'https://youtu.be/6aIQSxGemT4?si=hkxvW7Ms3TTzve9N',
            description: ''
        },
        {
            title: 'HOW EXCELLENT||ASF UNIPORT',
            url: 'https://youtu.be/d0hEP4f4_SI?si=qdxaYb9vi2LxBQ1i',
            description: ''
        }
    ])

    const slidestoshow = () => {
        if (window.innerWidth >= 0 && window.innerWidth < 425) return 1
        if (window.innerWidth >= 425 && window.innerWidth <= 768) return 2
        return 3
    }

    const slidestoswipe = () => {
        if (window.innerWidth >= 0 && window.innerWidth <= 768) return 1
        return 2
    }
  return (
    <div>
        <Slider
            className={className} 
            dots={false}
            infinite= {true}
            speed= {500}
            slidesToShow= {slidestoshow()}
            slidesToScroll= {slidestoswipe()}
            autoplay
        >
            {videos.map((video, index) => <Video key={index} url={video.url} title={video.title} description={video.description} />)}
        </Slider>
    </div>
  )
}

export default Videos