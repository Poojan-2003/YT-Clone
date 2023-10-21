import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from "react-redux";

const MainContainer = () => {


  return (
    <div className="ml-4">
        <ButtonList />
        <VideoContainer />
    </div>
  )
}

export default MainContainer