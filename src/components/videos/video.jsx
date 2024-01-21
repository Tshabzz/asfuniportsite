"use client"

import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Image from "next/image"
import { ArrowCircleRightRounded, ArrowCircleRightOutlined } from "@mui/icons-material"
import { Card, Skeleton } from "antd"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import openInNewTab from "../openinnewtab";

const YoutubeEmbed = ({ embedId }) => (
  <div className="video-responsive" style={{overflow: 'hidden', paddingTop: '56.25%', position: 'relative', height: '0'}}>
    <iframe
      style={{left: 0, top: 0, height: '100%', width: '100%', position: 'absolute'}}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};


const { Meta } = Card

const Video = ({url, title, description }) => {
    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const VID_REGEX = /(?:youtube(?:-nocookie)?\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    
    const urlId = url.match(VID_REGEX)[1]
    
  return (
    <Card
    hoverable
    style={{
      // width: 220,
      
    }}
    className="w-11/12"
    onClick={() => openInNewTab(url)}
    cover={<YoutubeEmbed embedId={urlId} />}
    loading={loading}
  >
    <Meta title={title} description={description} />
    {/* <Skeleton loading={loading} active>
            <Meta title={title} description={desc} />
    </Skeleton> */}
  </Card>
  )
}

export  { Video }

export default YoutubeEmbed;