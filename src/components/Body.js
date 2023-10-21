import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useSelector } from "react-redux";

const Body = () => {
  const theme = useSelector((store) => store.theme.isDarkTheme);
  return (
    <div className={`flex ${theme ? "bg-gray-900" : "bg-white"} `}>
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body
