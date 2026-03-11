import React from 'react'
import logo from '../assets/Logo.png'
import Container from './Container'
const Navbar = () => {
  return (
   <Container>
     <div className='bg-[#FFFFFF] flex py-5' >
        <div className='w-6/12 '>
            <img src={logo} alt="" />
        </div>
        <div className='w-6/12'>
            <ul className='flex gap-2 justify-end'>
                <li className='oswald-font  text-black hover:text-amber-500 ease-in-out duration-300'>Service</li>
                <li className='oswald-font  text-black hover:text-amber-500 ease-in-out duration-300'>About</li>
                <li  className='oswald-font  text-black hover:text-amber-500 ease-in-out duration-300'>Contact</li>
                <li className='oswald-font  text-black hover:text-amber-500 ease-in-out duration-300'>
                <button >Book a Free Consultation</button>
                </li>
            </ul>
           
        </div>
    </div>
   </Container>
  )
}

export default Navbar