import React from 'react'
import Navbar from '../component/Navbar'

import Sidebar from '../component/SideBar'
import Gradient from '../component/Gradient'
import MainSideBar from '../component/MainSideBar'
import Information from '../component/Information'
const Applayout = () => {
  return (
    <>
    <div className='Header'>
        <Navbar />
      </div>

      <div className='flex bg-[#F5F8FD]'>
        <Sidebar />
        <div className='flex flex-col   ' >

            <Gradient />
          <div className='flex h-full'>

            <MainSideBar />
            <Information />
          </div>


        </div>



      </div>

</>
  )
}

export default Applayout