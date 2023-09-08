import React from 'react';
import { Home, Mail, Activity, User, Compass, ChevronRight } from 'react-feather';
import { FiHome, FiMail, FiActivity, FiUser, FiCompass } from 'react-icons/fi'; // Import the specific icons you need

import { Icon } from '@iconify/react';

const Sidebar = () => {
    const iconColor="#7E77E7"
  return (
    <div className=" w-64 bg-white flex flex-col p-4 text-sm shadow-md text-[#2C225F] z-10">
      <div className="mb-4 font-medium">
        <div className="flex items-center mb-4 p-1  bg-[#F7F6FF] ">
        <Icon icon="material-symbols:window" color="#7d74ea" width="25" height="25"   />
          <div className=''><p className='ml-2'>Home</p></div>
        </div>
        <div className="flex items-center mb-4 p-1 text-[#B6ACF9] ">
        
         
          <Icon icon="fa-solid:envelope-open-text" color="#B6ACF9"  width="20" height="20"  />
            <div><p className='ml-3'>Job Invites</p></div>
        </div>
        <div className="flex items-center mb-4 p-1 text-[#B6ACF9]">
        <Icon icon="clarity:analytics-solid" color="#B6ACF9" width="25" height="25"  />
           
           <div><p className='ml-2'>Analytics</p></div>
        </div>
        <div className="flex items-center mb-4 p-1 text-[#B6ACF9]">
        <Icon icon="mdi:user" color="#B6ACF9" width="25" height="25"  />
          <div >
           <p className='ml-2'>My Profile</p>
          </div>
        
        </div>
        <div className="flex items-center mb-4 p-1 text-[#B6ACF9]">
        <Icon icon="material-symbols:travel-explore" color="#B6ACF9" width="25" height="25"  />
           <p className='ml-2'>Explore</p>
        </div>
      </div>

      <hr className="my-4 border-gray-300" />

      <div className=" font-medium mb-4">
        <h2 className="font-bold mb-4">Communities Feed</h2>
        <div className="flex flex-col   mb-2">
         <div className='member flex justify-start mb-6'>
         <div className='left'>
            <User className="mr-2" />
        </div>
        <div className='right '>
        <p>Indonesia UI Designer</p>
         
         <span className=" text-gray-300">100 members</span>
        </div>
         </div>
         <div className='member flex justify-start mb-6'>
         <div className='left'>
            <User className="mr-2" />
        </div>
        <div className='right'>
        <p>Indonesia UX Resea...</p>
         
         <span className=" text-gray-300">100 members</span>
        </div>
         </div>
         <div className='member flex justify-start mb-6 '>
         <div className='left'>
            <User className="mr-2" />
        </div>
        <div className='right'>
        <p>Indonesia UI Designer</p>
        
         <span className=" text-gray-300">100 members</span>
        </div>
         </div>
        
       
        </div>
       
      
        <div className='sidebarButton flex  justify-center mt-4'>
        <button className=" flex text-[#B6ACF9] ">
             Show 5 More
          <ChevronRight className="ml-2" />
        </button>
        </div>
       
      </div>

     

      <div className='flex flex-col mt-[220px] text-xs text-gray-400'>
        <div className="mb-2 flex justify-evenly">
          <h2 >About</h2>
          <h2>Accessibility</h2>
          <h2>Help</h2>
        </div>
        <div className=' mb-2 flex justify-between' >
          <h2>Privacy & Terms</h2>
          <h2>Advertise</h2>
          <h2>More</h2>
        </div>
        <div className='flex justify-center'>
            <span className='text-[#B6ACF9] font-bold'>sphere.io</span>@2023
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
