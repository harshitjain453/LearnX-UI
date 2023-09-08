import React from 'react'
import { Icon } from '@iconify/react';
const Information = () => {
    return (
        <div className='main flex flex-col m-auto my-4 bg-white text-[#2C225F]  font-medium w-[900px]'>
            <div className='header flex  h-[60px] shadow-lg z-30 '>
                <ul className='flex justify-start  items-center ml-2  ' >

                    <li className='mr-32'> About </li>
                    <li className='mr-32'>Skills and Certificates</li>
                    <li className='mr-32'>Posts</li>
                    <li className='mr-32'>Spaces</li>
                </ul>
            </div>
            <div className='About flex items-center p-4 bg-white  h-[150px]  z-20 '>
                
           < div className='flex justify-between'>
                    <div className='left flex justify-between'>
                    <p className='text-gray-400 font-normal'>  The discovery was made by Richard McClintock, a professor of Latin at Hampden-Sydney College in Virginia, who faced the impetuous recurrence of the dark word consectetur in the text Lorem ipsum researched its origins to identify them in sections 1.10.32 and 1.10.33 of the aforementione</p>

                    </div>
                    <div className='right flex justify-between '>
                      
                        <Icon icon="mdi:edit-circle" color="#7d74ea" width="28" height="28" className=' self-start ml-4' />
                    </div>

                </div>
                
                
            </div>
            <hr className="my-4 mx-2 h-3 border-gray-300" />
            <div className='experience px-4'>
                <h2 className='mb-5 text-lg'>Experience</h2>
                <div className='flex justify-between'>
                    <div className='left flex justify-between'>
                        <Icon icon="emojione-monotone:baggage-claim" color="#7d74ea" width="48" height="48" />
                        <div className='flex flex-col items-stretch'>
                            <h3 className='font-semibold '>Crises Intervention Specailist</h3>
                            <p className='text-gray-400'>January 2023 - Present</p>
                            <p className='text-gray-300'>Icoderz-Ahemdabad India</p>
                        </div>


                    </div>
                    <div className='right flex justify-between '>
                        <Icon icon="ep:circle-plus-filled" color="#7d74ea" width="28" height="28" />
                        <Icon icon="mdi:edit-circle" color="#7d74ea" width="28" height="28" className=' self-start ml-4' />
                    </div>

                </div>
                <div className='mt-3'>
                    <div className='px-12  '>
                        <p className='text-gray-600 font-normal'>work with clients and web studios as freelancer Work in next areas eCommerce web prolects creative landing pages; is and Android apps corporate web sites and corporato identity sometimes</p>
                    </div>
                </div>
            </div>
            <hr className="my-4 mx-2 h-3 border-gray-300 pb-2"  />
            <div className='experience px-4'>
                <h2 className='mb-5 text-lg'>Education</h2>
                <div className='flex justify-between'>
                    <div className='left flex justify-between'>
                    <Icon icon="icon-park-solid:degree-hat" color="#7d74ea" width="48" height="48" />
                        <div className='flex flex-col items-stretch'>
                            <h3 className='font-semibold '>B.E - Electronics & Telecommunication Engg.</h3>
                            <p className='text-gray-400'>January 2015 - June 2019</p>
                            <p className='text-gray-300'>Amity-Ahemdabad India</p>
                        </div>


                    </div>
                    <div className='right flex justify-between '>
                        <Icon icon="ep:circle-plus-filled" color="#7d74ea" width="28" height="28" />
                        <Icon icon="mdi:edit-circle" color="#7d74ea" width="28" height="28" className=' self-start ml-4' />
                    </div>

                </div>
                <div className='mt-3'>
                    <div className='px-12  '>
                        <p className='text-gray-600 font-normal'>work with clients and web studios as freelancer Work in next areas eCommerce web prolects creative landing pages; is and Android apps corporate web sites and corporato identity sometimes</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information