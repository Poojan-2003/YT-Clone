import React, { useEffect, useState } from 'react'
import {YOUTUBE_API} from '../utils/constants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'

const VideoContainer = () => {
  const [videos ,setvideos] = useState([])
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async() => {
    const data = await fetch(process.env.REACT_APP_YOUTUBE_API)
    const json = await data.json();
    setvideos(json.items)
  }
  return (
    <div className='flex flex-wrap border  w-[1250px]'>
      {/* <VideoCard info={videos[0]}/> */}
      {videos.map((video)=>(
        <Link key={video.id} to={"/watch?v="+video.id}><VideoCard info={video} key={video.id}/></Link>
      ))}
    </div>
  )
}

export default VideoContainer
