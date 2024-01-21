"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";
import MyCarousel from "./carousel/carousel";

const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
    const router = useRouter()
    const [data, setData] = useState([
      {
        title: 'Image',
        src: bogliasco
      },
      {
        title: 'Image',
        src: countyClare
      },
      {
        title: 'Image',
        src: craterRock
      },
      {
        title: 'Image',
        src: giauPass
      }
    ])
  return (
    <MyCarousel data={data} height='100vh' width='100vw'/>
  );
}
