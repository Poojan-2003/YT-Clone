import React from 'react'

const VideoCard = ({info}) => {
   
    const {snippet , statistics} = info;
    const {channelTitle , title , thumbnails} = snippet
  return (
    <div className='p-2 w-[400px] h-[380px] m-2 shadow-lg rounded-lg'>
        <img 
        className='rounded-lg w-[400px] h-[200px]'
        alt='Thumbnail'
        src={thumbnails.medium.url}
        />
        <ul>
            <li className='py-2 font-bold'>{title}</li>
            <li className='font-semibold'>{channelTitle}</li>
            <li className='mt-2'><span className='font-semibold'>{statistics.viewCount}</span> Views</li>
        </ul>

    </div>
   
  )
}

export default VideoCard