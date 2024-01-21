"use client"

import Image from "next/image"
import { ArrowCircleRightRounded, ArrowCircleRightOutlined } from "@mui/icons-material"
import { Card, Skeleton } from "antd"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

const { Meta } = Card

const Article = ({src, title, desc, id}) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);

  return (
    <Card
    hoverable
    style={{
      // width: 240,
    }}
    className="w-11/12"
    onClick={() => router.push(`/blog/article/${id}`)}
    cover={<img alt="" src={src} />}
    loading={loading}
  >
    <Meta title={title} description={desc} />
    <div className="pt-5 space-x-2 flex flex-row items-center">
        <h2>Read More </h2>

        <ArrowCircleRightRounded className="h-5 w-5"/>
    </div>

    {/* <Skeleton loading={loading} active>
            <Meta title={title} description={desc} />
    </Skeleton> */}
  </Card>
  )
}

export default Article