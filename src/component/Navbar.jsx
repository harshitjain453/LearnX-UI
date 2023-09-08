import React from 'react'
import { Bell, Mail,Search} from 'react-feather';
import profile from '../assets/profile2.jpg'
import logo from '../assets/logo.jpg'
const Navbar = () => {
  return (
     <>
       <nav className=" py-4 pr-4 max-h-[70px] flex justify-between items-center bg-white shadow-md text-[#2C225F] ">
      {/* Left-hand side */}
      <div className='w-[255px] shadow-lg h-full  p-5 z-40'>
      <div className="flex items-center space-x-2 ">
        {/* Brand Logo */}
        
        <div className="w-8 h-8  bg-gray-200 rounded-full">
             <img src={logo} alt="" />
        </div>
        
        
        {/* Brand Name */}
        <span className="font-semibold text-gray-700">Spehre</span>
      </div>
      </div>
      
      {/* Right-hand side */}
      <div className="flex items-center space-x-4">
      <div className="relative flex items-center space-x-2">
        <div className="relative">
          <Search size={20} color="gray" className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10" />
          <input
            type="text"
            placeholder="Search"
            className="bg-white w-[450px]  text-gray-800 pl-10 pr-4 py-2 focus:outline-none focus:ring focus:border-gray-400 border border-gray-200"
          />
          {/* Vertical Line */}
          <div className="border-l h-6 border-gray-200 absolute top-1/2 transform -translate-y-1/2 left-[34px] z-20"></div>
        </div>
      </div>

        {/* Notification Icon */}
        <div className="text-white border border-gray-200 p-2">
        <Bell size={28} color="gray" /> {/* Example usage of Bell (Notification) icon */}
        </div>

        {/* Message Icon */}
        <div className="text-white border border-gray-200 p-2">
        <Mail size={28} color="gray" /> {/* Example usage of MessageSquare (Message) icon */}
        </div>

        {/* User Profile Icon */}
        <div className="text-white">
          <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
          <img src={profile} alt="" className="h-full w-full " />
          </div>
        </div>
      </div>
    </nav>
     </>
  )
}

export default Navbar