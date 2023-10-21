import React, { useState } from 'react'
import { useDispatch,useSelector  } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { toggleTheme } from "../utils/themeSlice";
import { Link, useNavigate } from 'react-router-dom';
const Head = () => {
  //After every render it becomes new variable so we assign value
  const [searchQuery , setSearchQuery] = useState("")

  const [suggestion , setSuggestions] = useState([])

  const theme = useSelector((store) => store.theme.isDarkTheme);

  // useEffect(()=>{
  //    Make an api call after every keypress
  //    But if difference between 2 consequtive key press is less then 200ms
  //    Then Decline the api call
  //    searchSuggestion() 
  // },[searchQuery])
  const toggleDay = () => {
    dispatch(toggleTheme());
  };

  const dispatch = useDispatch();
  
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }

 
  return (
    <div className='flex p-1  mb-2 fixed bg-white w-[2200px]'>
      <div className='flex '>
        <img 
        onClick={() => toggleMenuHandler()}
        className='h-8 mt-3 ml-5 cursor-pointer'
        src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' alt='Logo' />
       
       
        <img 
        className='h-14 mx-7 hover:cursor-pointer'
        src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" 
        alt='YT Logo' />
      </div>
      
      
      
        <div className='flex mt-1 ml-[200px] px-10'>
          <input 
          className='px-5 h-[40px] w-[500px] border border-gray-400 p-2 rounded-l-full'
          value={searchQuery}
          onChange={(e) => {setSearchQuery(e.target.value)}}
          type='text' 
          placeholder='Search'/>
          <button
          className='h-[40px] border border-gray-400 p-2 rounded-r-full bg-gray-100'
          >Search</button>
        </div>
      

      {/* <div className='fixed bg-white py-2 px-2 w-[37rem] rounded-lg border border-gray-100'>
        <ul>
          {/* {suggestion?.map((s)=>(
            <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>🔍 {s}</li>
          ))} 
          
        </ul>
      </div> */}



          {/* <button
            className={`rounded-full p-2 ${
              theme ? "bg-gray-700" : "bg-gray-400"
            }`}
            onClick={() => {
              toggleDay();
            }}
          >
            {" "}
            {theme ? "🌟🌛" : "⛅ ⛱️"}{" "}
          </button> */}



      <div className='mt-3 ml-[380px]'>
        <img
          className='h-8' 
          alt='user'
          src='https://logodix.com/logo/1984127.png'
          />
      </div>
    </div>
  )
}

export default Head
