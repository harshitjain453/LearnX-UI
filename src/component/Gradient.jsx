import React from 'react'
import gradient from '../assets/gradient.png'
import { Icon } from '@iconify/react';

const Gradient = () => {
  return (
    <>
    <div className='  max-w-[1230px]  max-h-[160px] !important'>
        <img src={gradient} alt=""  className='w-[100%] h-[100%] '/>

       
    </div>
    <div className='absolute right-[10px] top-[88px] '>
    <Icon icon="mdi:edit-circle" color="#fff" width="28" height="28" className=' right-0 ml-4' />
    </div>
    
     </>

  )
}

export default Gradient