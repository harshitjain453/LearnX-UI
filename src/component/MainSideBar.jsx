import React from 'react'
import { Icon } from '@iconify/react';
import Toggle from './Toggle';
import profile from '../assets/profile2.jpg'
import pie from '../assets/pie.png'
import RangeSlider from './Range';
const MainSideBar = () => {
    return (
        <div className='sidebar h-full  bg-white  w-[290px] text-[#2C225F] pb-4'>
            <div className='profile flex flex-col items-center -m-16'>
                <div className="w-32 h-32 bg-gray-200 rounded-full overflow-hidden">
                    <img src={profile} alt="" className="h-full w-full " />
                </div>
                <h1 className='font-semibold text-xl'>Ayaat Khanna</h1>
                <p className='text-sm font-medium text-gray-300 mb-1'>UI/UX Designer</p>
                <div className='flex text-xs align-top  '>
                    <Icon icon="gridicons:multiple-users" color="#2C225F" width="18" height="18" />
                    <p className='mx-1'>23 followers</p>
                    <p className='ml-1'>23 following</p>
                </div>
                <div className='flex flex-col mt-3 '>
                    {/* Left side (80%) */}
                    <div className='flex h-5'>
                        <div className='w-4.3/5 ml-1'>
                            <p className='text-xs font-semibold'>Make my Profile visible to all employees</p>
                        </div>

                        {/* Right side (20%) */}
                        <div className='w-0.5/5 ml-2'>
                            <Toggle />
                        </div>

                    </div>
                    <div className='w-[280px] ml-1'>
                        <p className='text-xs text-gray-300'>your profile and carrier goals will appear when employees search database</p>

                    </div>


                </div>
                <div className='flex flex-col mt-6 '>
                    {/* Left side (80%) */}
                    <div className='flex h-5 justify-between'>
                        <div className='w-4.3/5 ml-1'>
                            <p className='text-xs font-semibold'>Online Links</p>
                        </div>

                        {/* Right side (20%) */}
                        <div className='w-0.5/5 ml-2'>
                            <Icon icon="ep:circle-plus-filled" color="#7d74ea" width="25" height="25" />
                        </div>

                    </div>
                    <div className='w-[280px] ml-1'>
                        <p className='text-xs text-gray-300'>Add your online portfolio link to showcase your profile strength</p>

                    </div>


                </div>
                <div className=' flex icons w-[275px] h-[40px] bg-[#F7F6FF] mt-5 justify-center rounded-lg '>

                    <Icon icon="logos:dropbox" color="#7d74ea" width="24" height="24" className='m-2' />
                    <Icon icon="logos:microsoft-icon" color="#7d74ea" width="22" height="22" className='m-2' />
                    <Icon icon="logos:google-icon" color="#7d74ea" width="24" height="24" className='m-2' />
                </div>

                <div className='performance flex flex-col items-center w-[275px] h-[275px] bg-[#F7F6FF] mt-5 rounded-lg p-3'>
                    <div className='flex ' >
                        <p className='mb-4 font-semibold'>Wheel of Opportunites </p>
                        {/* <Icon icon="arcticons:letter-lowercase-circle-i" color="#7d74ea" /> */}
                    </div>

                    <div className='mb-2'>
                        <img src={pie} alt="" className='h-[100%] w-[100%]' />
                    </div>

                </div>

                <div className='flex flex-col'>
                <RangeSlider/>
                 <p className='mt-2 font-semibold text-sm text-center'>Hurry you are in the top 27%</p>
                </div>
               

                </div>

            
        </div>
    )
}

export default MainSideBar