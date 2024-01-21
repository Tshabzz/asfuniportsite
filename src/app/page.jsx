"use client"

import Link from "next/link"
import ZoomSlider from '@/components/heroslider'
import MyCarousel from "@/components/carousel/carousel"
import { useEffect, useState } from "react"
import midweekschedule from '../../public/midweekschedule.png'
import Articles from "@/components/articles/articles"
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { EmailOutlined, Person2Outlined } from "@mui/icons-material"
import Videos from "@/components/videos/videos"
import Alerts from "@/components/alerts/alerts"

const Page = ({}) => {
  

  const [news_eventsdata, setNews_EventsData] = useState([
    {
      id: '',
      title: 'Mid Week',
      src: midweekschedule.src
    },
    {
      id: '',
      title: 'Mid Week',
      src: midweekschedule.src
    },
    {
      id: '',
      title: 'Mid Week',
      src: midweekschedule.src
    },
    {
      id: '',
      title: 'Mid Week',
      src: midweekschedule.src
    },
    {
      id: '',
      title: 'Mid Week',
      src: midweekschedule.src
    }
  ])

  const [currentWindowSize, setCurrentWindowSize] = useState({
    width: '',
    height: ''
  })

  
  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth
      const height = window.innerHeight
      setCurrentWindowSize({
        width,
        height
      })
      console.log(currentWindowSize)
    });
  }, [])

  return (
    <>
    <section>
      <ZoomSlider />
    </section>
    <section className="py-16 px-56 md:px-10 md:py-16 sm:px-6 xl:px-40 lg:px-20 flex flex-col">
      <div className="w-full flex px-2 flex-row items-center justify-center space-x-3">
        <hr className="h-1 w-full bg-dark-green" />
        <h2 className="w-full flex justify-center lg:text-sm md:text-xs sm:text-xs text-center">NEWS & UPCOMING EVENTS</h2>
        <hr className="h-1 w-full bg-dark-green" />
      </div>

      <MyCarousel radius='10px' className='mt-16' data={news_eventsdata} height='60vh' width='100%' />
      {/* {console.log(window.innerWidth, window.innerHeight)} */}
    </section>
    <section className="py-16 px-44 md:px-10 sm:px-6 lg:px-24 flex flex-col">
      <div className="w-full flex px-2 flex-row items-center justify-center space-x-3">
        <hr className="h-1 w-full md:w-full bg-dark-green" />
        <h2 className="w-full flex justify-center lg:text-sm md:text-xs sm:text-xs text-center">LATEST ARTICLES</h2>
        <hr className="h-1 w-full md:w-full bg-dark-green" />
      </div>

      <Articles className='mt-16 p-4 sm:p-1'/>
    </section>
    <section className="justify-center flex flex-col ">
      <div className="flex items-center flex-col w-full px-48 md:px-10 sm:px-6 lg:px-24">
          <h2 className="flex p-5 justify-center sm:text-sm text-dark-green font-semibold text-lg text-center">Subscribe to receive our weekly Newsletters/Articles</h2>
          <div className="flex flex-row md:flex-col sm:flex-col md:space-y-3 sm:space-y-2 lg:space-x-5 xl:space-x-5 justify-center w-full">
            <div className="h-9 w-2/6 md:w-full sm:w-full p-2 flex flex-row border border-dark-green border-solid items-center rounded-sm bg-slate-100">
              <UserOutlined className="h-6 w-6 opacity-50" />
              <input spellCheck={false} type="text" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline" placeholder="Name" />
            </div>
            <div className="h-9 w-3/6 md:w-full sm:w-full p-2 flex flex-row border border-dark-green border-solid items-center rounded-sm bg-slate-100">
              <MailOutlined className="h-6 w-6 opacity-50" />
              <input spellCheck={false} type="email" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline" placeholder="Email" />
            </div>
          </div>
          <input className="h-8 w-56 cursor-pointer hover:opacity-75 bg-dark-green text-white font-medium rounded-sm m-6 sm:text-xs sm:m-4 sm:w-full sm:h-6" type="button" value="Submit"/>
      </div>
      <div className="bg-dark-green my-6">
        <div className="px-48 lg:px-24 md:px-10 py-6 sm:px-6 flex flex-col space-y-6 items-center">
        <h2 className=" flex justify-center text-white font-semibold underline underline-offset-4 text-center">ASK US A BIBLE QUESTION</h2>
        <div className="flex flex-row justify-between space-x-16 md:space-x-3 sm:flex-col sm:space-x-3 w-full">
          <div className="w-full md:space-y-2 space-y-3">
            <div className="w-full space-y-1 sm:space-y-0 ">
              <h3 className="text-sm sm:text-xs font-medium text-white">NAME</h3>
              <input spellCheck={false} type="text" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline rounded-sm"  />
            </div>
            <div className="w-full space-y-1 ">
              <h3 className="text-sm sm:text-xs font-medium text-white">EMAIL ADDRESS</h3>
              <input spellCheck={false} type="email" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline rounded-sm"  />
            </div>
            <div className="w-full space-y-1 ">
              <h3 className="text-sm sm:text-xs font-medium text-white">PHONE NUMBER</h3>
              <input spellCheck={false} type="tel" className="h-6 w-full outline-none py-2 px-2 text-xs bg-slate-100 no-underline rounded-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"  />
            </div>
          </div>
          <div className="w-full space-y-1 ">
              <h3 className="text-sm sm:text-xs font-medium text-white">QUESTION</h3>
              <textarea spellCheck={false} type="text" className="w-full h-5/6 md:h-32 outline-none py-2 px-2 text-xs bg-slate-100 no-underline rounded-sm"  />
          </div>
        </div>
        <button className="flex justify-center text-dark-green bg-white h-6 w-40 font-medium rounded-sm hover:bg-slate-300 active:bg-slate-300 hover:opacity-75" type="button">Submit</button>
      </div>
      </div>
    </section>
    <section className="py-16 px-48 md:px-10 lg:px-24 sm:px-6 flex flex-col">
      <div className="flex flex-row items-center justify-center space-x-3">
        <hr className="h-1 w-48 md:w-full bg-dark-green" />
        <h2 className="md:w-auto md:text-sm text-center sm:text-xs">VIDEOS & PODCASTS</h2>
        <hr className="h-1 w-48 md:w-full bg-dark-green" />
      </div>

      <Videos className='mt-16'/>

      <Link href='/videos-podcasts' className="px-full font-semibold text-sm hover:opacity-75 active:opacity-75 text-dark-green my-6 flex justify-center underline underline-offset-4">SEE MORE</Link>
    </section>
    </>
  )
}

export default Page