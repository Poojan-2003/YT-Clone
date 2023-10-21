import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  faHome,
  faFootball,
  faFire,
  faTv,
  faVideo,
  faBell,
  faHistory,
  faPlay,
  faClock,
  faThumbsUp,
  faChevronDown,
  faStream,
  faGamepad,
  faMusic,
  faFilm,
  faNewspaper,
  faTshirt,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
 import "@fortawesome/fontawesome-svg-core/styles.css";
 import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.myAppslice.isMenuOpen)
  
  if(!isMenuOpen)return null // Early return
  
  return (
    <div className='px-5 mt-[70px] shadow-lg  '>
      {/* <ul>
        <Link to="/"><li className='w-[204px]'>Home</li></Link>
        <li className='w-[204px]'>Shorts</li>
        <li className='w-[204px]'>Subscription</li>
      </ul>
      
      <h1 className='font-bold pt-5'>Subscription</h1>
      <ul className='w-[204px]'>
        <li className='w-[204px]'>Namaste React</li>
        <li className='w-[204px]'>Gaming</li>
        <li className='w-[204px]'>Sports</li>
        <li className='w-[204px]'>Movies</li>
      </ul>
      <h1 className='font-bold pt-5'>Watch Later</h1>
      <ul>
        <li className='w-[204px]'>Namaste React</li>
        <li className='w-[204px]'>Gaming</li>
        <li className='w-[204px]'>Sports</li>
        <li className='w-[204px]'>Movies</li>
      </ul> */}

<ul className="">
        <Link to="/">
          
          <li className="w-[225px] hover:bg-gray-200 h-12 pt-2 rounded-lg ">
            <FontAwesomeIcon className="w-[40px] mt-2" icon={faHome} />
            <span className='ml-4 text-lg '>Home</span>
          </li>
        </Link>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg ">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faFire} />
          <span className='ml-4 text-lg'>Trending</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faTv} />
          <span className='ml-4 text-lg  '>Subscriptions</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faVideo} />
          <span className='ml-4 text-lg'>Library</span>
        </li>
      </ul>
      <hr className="my-4 border-t border-gray-800 " />
      <ul className="">
        <li className="w-[204px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faBell} />
          <span className='ml-4 text-lg'>History</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faHistory} />
          <span className='ml-4 text-lg'>Your  videos</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faPlay} />
          <span className='ml-4 text-lg'>Watch  later</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faClock} />
          <span className='ml-4 text-lg'>History</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faThumbsUp} />
          <span className='ml-4 text-lg'>Liked  videos</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="ml-3" icon={faChevronDown} />
          <span className='ml-7 text-lg'>Show  more</span>
        </li>
      </ul>
      <hr className="my-4 border-t border-gray-800 " />
      <div className="text-gray-500 mb-6 ">SUBSCRIPTIONS</div>
      <ul className="">
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faStream} />
          <span className='ml-4 text-lg'>YouTube  Premium</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faGamepad} />
          <span className='ml-4 text-lg'>Gaming</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faFootball} />
          <span className='ml-4 text-lg'>Sports</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faMusic} />
          <span className='ml-4 text-lg'>Music</span>
        </li>
        <li className="w-[225px] hover:bg-gray-200 hover:cursor-pointer h-12 pt-2 rounded-lg">
          <FontAwesomeIcon className="w-[40px] mt-2" icon={faFilm} />
          <span className='ml-4 text-lg'>Movies</span>
        </li>
       
        
      </ul>
    </div>
  )
}

export default Sidebar


// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faHome,
//   faFootball,
//   faFire,
//   faTv,
//   faVideo,
//   faBell,
//   faHistory,
//   faPlay,
//   faClock,
//   faThumbsUp,
//   faChevronDown,
//   faStream,
//   faGamepad,
//   faMusic,
//   faFilm,
//   faNewspaper,
//   faTshirt,
//   faMicrophone,
// } from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { useSelector } from "react-redux";
// import CollapseSideBar from "./CollapseSidebar";
// import { Link } from "react-router-dom";

// const SideBar = () => {
//   const isMenuOpen = useSelector((store) => store.myAppslice.isMenuOpen);
//   const theme = useSelector((store) => store.theme.isDarkTheme);

//   if (!isMenuOpen) {
//     return <CollapseSideBar />;
//   }

//   const listItems = `flex items-center space-x-4 cursor-pointer  p-2 rounded ${
//     theme ? "hover:bg-gray-800" : "hover:bg-gray-300"
//   }`;
//   return (
//     <aside
//       className={`fixed top-16  z-50  w-64 p-4 h-screen   left-0 overflow-y-auto ${
//         theme ? "bg-gray-900 text-white" : "bg-white text-black"
//       }`}
//     >

//     </aside>
//   );
// };

// export default SideBar;
