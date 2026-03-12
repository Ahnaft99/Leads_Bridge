
import React from 'react'
import Container from './Container'
import a from '../assets/a.png'
import contact from '../assets/contact.png'
import { MdOutlineEmail } from 'react-icons/md'

export const Contact = () => {
  return (
    <div className='py-10'>
        <Container>
        <div className='flex items-center gap-2 justify-center '>
                <img src={a} alt="alogo" />
                <p className='oswald-font text-[16px] '> Growth<span className='text-[#FFA500]'>Business</span></p>
                
            </div>
            <div className='text-center py-1'>
            <h2 className='oswald-font text-[56px] font-semibold '>Let’s Scale Your <span className='text-[#FFA500]'>Business!</span></h2>
            <p className='oswald-font text-[16px]   w-[350px] mx-auto text-center'>FINTRIXX – Your Amazon Growth Partner</p>
            </div>
            {/* figma te image deya tai amio image e bosaya disi */}
            <div className='w-12/12 py-10'>
                <img src={contact} alt="" />
               <div className='flex justify-center gap-2 py-2'>
               <div className='flex items-center gap-2 '>
                <MdOutlineEmail />
                <p>leadsbridgesdemo@example.com</p>
                </div>
                <div>
                    <p><span className='text-[#FFA500]'>note:</span> Have a question? Need a strategy? We’re here to help.</p>
                </div>
               </div>
            </div>
        </Container>
    </div>
  )
}
