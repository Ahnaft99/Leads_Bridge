import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import Container from './Container'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='bg-gradient-to-b from-[#FFF8F0]'>
      <Container>

        <div className='flex py-5 items-center justify-between'>

          <div className='w-6/12'>
            <img src={logo} alt="" />
          </div>

         {/* MAin menu */}
          <div className='w-6/12 hidden md:block'>
            <ul className='flex gap-3 justify-end items-center'>
              <li className='oswald-font text-black hover:text-amber-500 duration-300 cursor-pointer text-[16px]'>Service</li>
              <li className='oswald-font text-black hover:text-amber-500 duration-300 cursor-pointer text-[16px]'>About</li>
              <li className='oswald-font text-black hover:text-amber-500 duration-300 cursor-pointer text-[16px]'>Contact</li>
              <li className='oswald-font text-white'>
                <button className='py-1 px-2 bg-amber-600 rounded-full text-[14px]'>
                  Book a Free Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars />
            </button>
          </div>

        </div>
            {/* mobile Menu */}
        {menuOpen && (
          <div className='md:hidden pb-4'>
            <ul className='flex flex-col gap-3 items-center'>
              <li className='oswald-font text-black'>Service</li>
              <li className='oswald-font text-black'>About</li>
              <li className='oswald-font text-black'>Contact</li>
              <li>
                <button className='py-1 px-3 bg-amber-600 rounded-full text-white'>
                  Book a Free Consultation
                </button>
              </li>
            </ul>
          </div>
        )}

      </Container>
    </div>
  )
}

export default Navbar