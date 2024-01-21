"use client"

import Image from 'next/image'
import adventistLogo from '../../public/adventistlogo-white.png'
import uniportlogo from '../../public/uniportlogo.png'
import pcmlogo from '../../public/pcmlogo.png'
import asflogo from '../../public/asflogo.png'
import googleicon from '../../public/googleIcon.svg'
import { useState } from 'react'
import Link from 'next/link'
import {Facebook, Instagram, YouTube, KeyboardArrowRight, AssistantDirection} from '@mui/icons-material';
import footerBg from '../../public/img2.png'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/router'
import { Button } from '@mui/material'
import { Col, Row } from 'antd'


const Footer = ({}) => {
    const pathName = usePathname()

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const [links, setLinks] = useState([
        {
            title: 'Feautured Pages',
            links: [
                {link: 'Library/Resources', url: 'library'},
                {link: 'Sabbath School', url: 'sabbathschool'},
                {link: 'About Us', url: 'about'},
                {link: 'Music', url: 'music'},
                {link: 'Blog', url: 'news'}
            ]
        },
        {
            title: 'Quick Links',
            links: [
                {link: 'Donate to the Fellowship', url: 'donate'},
                {link: 'Register for Convention', url: 'convention'},
                {link: 'Latest News', url: 'news'},
                {link: 'Take Quiz', url: 'quiz'},
                {link: 'Contact Us', url: 'contact'}
            ]
        },
        {
            title: 'Recent Articles',
            links: [
                {link: 'Lorem Iposum', url: 'Lorem Iposum'},
                {link: 'Lorem Iposum', url: 'Lorem Iposum'},
                {link: 'Lorem Iposum', url: 'Lorem Iposum'},
                {link: 'Lorem Iposum', url: 'Lorem Iposum'},
                {link: 'Lorem Iposum', url: 'Lorem Iposum'}
            ]
        }
    ])

    const style = {
        background: '#0092ff',
        padding: '8px 0',
    };

  return (
    <>
        { pathName == '/login' || pathName == '/register' ? (
            <></>
        ) : (
        <div>
        <div className={` bg-[url('../../public/img2.png')] bg-center bg-cover h-96`} >
            <div style={{
                position: 'absolute',
                backgroundColor: '#093E32e4',
                width: '100%', height:'384px',
                zIndex: 3
              }}
            />
            <div className='flex flex-col relative z-10 flex items-center'>
            <div>
                <Image
                    src={adventistLogo}
                    alt='SDA Church'
                    height={50}
                    width={50}
                    style={{marginTop: '-25px', backgroundColor: '#007057c9', borderRadius: '100%', border: '5px solid #00705700'}}
                />
            </div>
            <div className='flex flex-row space-x-32 sm:space-x-0 sm:w-full sm:px-6 md:space-x-6 sm:flex-col'>
                {links.map((link, index) => (
                    <div key={index} className='flex flex-col mt-16 sm:mt-5 lg:space-y-1 xl:space-y-1 md:space-y-1'>
                        <h2 className='text-white font-semibold sm:text-xs sm:font-bold sm:mb-4 text-md md:text-xs'>{link.title}</h2>
                        {link.links.map((l, i) => (
                            <div key={`${index}${i}`} className='hover:opacity-75 flex items-center sm:even:flex sm:odd:justify-end sm:even:-mt-4' >
                                <KeyboardArrowRight style={{
                                    height: '10px',
                                    width: '10px',
                                    color: 'white'
                                }} />
                                <Link href={`/${l.url}`} className='text-white text-xs' >{l.link}</Link>
                            </div>                  
                        ))}
                    </div>
                ))}
            </div>
            <div className='flex flex-row sm:flex-col md:space-x-2 sm:space-x-1 space-x-3 mt-10 sm:m-0 sm:p-5 sm:space-y-2 items-center'>
                <div className='flex flex-row space-x-3 md:space-x-3 sm:space-x-1'>
                    <Image src={adventistLogo} alt='' className='h-10 sm:h-6 sm:w-6 w-10 cursor-pointer hover:opacity-50 active:opacity-75'/>
                    <Image src={uniportlogo} alt='' className='h-10 sm:h-6 sm:w-6 w-10 cursor-pointer hover:opacity-50 active:opacity-75'/>
                    <Image src={pcmlogo} alt='' className='h-10 sm:h-6 sm:w-6 w-10 cursor-pointer hover:opacity-50 active:opacity-75'/>
                    <Image src={asflogo} alt='' className='h-10 sm:h-6 sm:w-6 w-10 cursor-pointer hover:opacity-50 active:opacity-75'/>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='space-x-1'>
                        <Facebook className='hover:opacity-50 active:opacity-75 cursor-pointer' style={{width: '30px', height: '30px', fill: 'white'}}/>
                        <Instagram className='hover:opacity-50 active:opacity-75 cursor-pointer' style={{width: '30px', height: '30px', fill: 'white'}}/>
                        <YouTube className='hover:opacity-50 active:opacity-75 cursor-pointer' style={{width: '30px', height: '30px', fill: 'white'}}/>
                    </div>
                    <h2 className='text-xs sm:font-bold text-white font-semibold'>NAAS Uniport</h2>
                </div>
            </div>
            </div>
            
        </div>
        <div className='bg-black h-32 p-6 flex flex-col items-center space-y-3'>
            <div className='flex flex-row justify-center space-x-4'>
                <AssistantDirection className='fill-white'/>
                <h3 className='text-white sm:text-xs opacity-75'>New Road Behind Dominos Pizza, Back of Chem, Choba</h3>
            </div>
            <button onClick={() => openInNewTab("https://www.google.com/maps/place/4%C2%B053'31.8%22N+6%C2%B054'47.1%22E/@4.8921667,6.9130833,183m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d4.8921667!4d6.9130833?entry=ttu")} type='button' className='w-40 h-10 bg-white cursor-pointer outline-none flex flex-row p-2 justify-center space-x-2 rounded-xl hover:bg-slate-200 hover:opacity-50 cursor-pointer'>
                
                <Image 
                    src={googleicon}
                    height={25}
                    width={25}
                /> 
                
                <h2 className='text-black'>Map Direction</h2>
            </button> 
        </div>
        </div>
        )
        }
   </>
  )
}

export default Footer