"use state"

import { Carousel } from 'antd';
import Slider from 'react-slick';
import Article from './article';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ArrowCircleRightRounded, ArrowCircleLeftRounded } from '@mui/icons-material';
import latestarticle1 from '../../../public/latesarticles1.png'
import latestarticle2 from '../../../public/latesarticles2.png'
import latestarticle3 from '../../../public/latesarticles3.png'
import { useState } from 'react';

const Articles = ({ className}) => {
        const [latest_articles, setLatestArticles] = useState([
            {
            id: '',
            title: 'Title',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
            src: latestarticle1.src
            },
            {
            id: '',
            title: 'Title',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
            src: latestarticle2.src
            },
            {
            id: '',
            title: 'Title',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
            src: latestarticle3.src
            },
            {
                id: '',
                title: 'Title',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
                src: latestarticle1.src
            },
            {
                id: '',
                title: 'Title',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
                src: latestarticle2.src
            },
            {
                id: '',
                title: 'Title',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
                src: latestarticle3.src
            },
            {
                id: '',
                title: 'Title',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
                src: latestarticle1.src
            },
            {
                id: '',
                title: 'Title',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
                src: latestarticle2.src
            },
            {
                id: '',
                title: 'Title',
                desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. uta atque, provident reiciendis pariatur iusto in labore! Harum.',
                src: latestarticle3.src
            },
        ])
    
      const [current, setCurrent] = useState('')

      const [slider, setSlider] = useState('')

      const SamplePrevArrow = ({ className, style, onClick }) => {
        return (
          <ArrowCircleLeftRounded
            className={`${className} hover:opacity-75`}
            style={{ ...style, fill: '#007057', height: '30px', width: '30px', marginRight: '15px'}}
            onClick={onClick}
          />
        )}
        const SampleNextArrow = ({ className, style, onClick }) => {
            return (
              <ArrowCircleRightRounded
                className={`${className} hover:opacity-75`}
                style={{ ...style, fill: '#007057', height: '30px', width: '30px'}}
                onClick={onClick}
              />
            );
        }

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
    <div className=''>
        <Slider 
            ref={slider => (setSlider(slider))}
            className={className} 
            dots={false}
            infinite= {true}
            speed= {500}
            slidesToShow= {slidestoshow()}
            slidesToScroll= {slidestoswipe()}
            nextArrow= {<SampleNextArrow />}
            prevArrow= {<SamplePrevArrow />}
            afterChange={slide => {setCurrent(slide)}}
            autoplay
        >
            {latest_articles.map((slide, index) => (
                                <Article

                                    key={index}
                                    desc={slide.desc}
                                    src={slide.src}
                                    title={slide.title}
                                    id={slide.id}
                                />
                        ))}
        </Slider>
    </div>
)
}

export default Articles