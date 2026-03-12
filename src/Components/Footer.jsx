
import React from 'react'
import Container from './Container'
import logo from '../assets/Logo.png'
import { MdOutlineEmail } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='py-10 bg-black'>
        <Container>
            <div className='w-12/12 py-10 flex justify-between'>
                <div className='w-6/12 py-5'>
                    <img src={logo} alt="" />
                    <p className='oswald-font text-[18px] text-white pt-5 '>FINTRIXX – Your Amazon Growth Partner Since 2016, we boost Amazon success with expert SEO, PPC, and growth strategies.</p>

                </div>
                <div className='w-3/12 pl-10 '>
                    <h2 className='text-white text-[18px] font-bold pb-5'>HOME</h2>
                    <ul className='text-white '>
                        <li className='pb-3'>Home</li>
                        <li className='pb-3'>About</li>
                        <li className='pb-3'>Service</li>
                        <li className='pb-3'>why Choose us</li>
                        <li className='pb-3'>Contact</li>
                        
                    </ul>
                </div>
                <div className='w-3/12'>
                <h1 className='text-[18px] oswald-font font-bold text-white'>Contact</h1>
                <div className='flex items-center gap-2 pt-10'>
                <MdOutlineEmail className='text-white' />
                <p className='text-white '>leadsbridgesdemo@example.com</p>
                </div>
                </div>
            </div>
            <div className="w-full flex justify-between items-center">
  
  <div className="w-1/2">
    <p className="text-white text-[18px] oswald-font">
      © 2025 Copyright Amazon
    </p>
  </div>

  <div className="w-1/2 flex justify-end">
    <ul className="flex items-center gap-4">
      <li className="text-white oswald-font text-[18px] cursor-pointer">
        Privacy Policy
      </li>
      <li className="text-white oswald-font text-[18px] cursor-pointer">
        Terms & Conditions
      </li>
    </ul>
  </div>

</div>
        </Container>
    </div>
  )
}

export default Footer