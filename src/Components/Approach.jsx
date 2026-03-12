import React from 'react'
import Container from './Container'
import bars from '../assets/bars.png'
import laptop from '../assets/laptop.png'
import dart from '../assets/dart.png'
import globe from '../assets/globe.png'

export const Approach = () => {
  return (
    <div className='py-10 bg-black'>
        <Container>
        <div className='w-12/12 flex justify-between'>
            <div className='w-6/12 w-[550px]'>
                <div className='flex justify-between'>
                    <div>
                        <img src={bars} alt="bars" />
                    </div>
                   <div className='pt-20'>
                    <img src={laptop} alt="laptop" />
                   </div>
                </div>
            </div>
            <div className='w-6/12'>
            <div>
                <h2 className='oswald-font text-[56px] font-semibold text-white'>Our <span className='text-[#FFA500]'>Approach</span></h2>
            </div>
            <div className='flex items-center py-10'>
                <div className='h-7 w-[3px] bg-[#ececec75]'></div>
                <div className='flex items-center mx-5'>
                    <img src={dart} alt="dart" className='h-10'/>
                    <p className='oswald-font text-[24px] text-white ml-2'>MISSION</p>
                </div>
                
            </div>
            <div className='w-[600px] h-[2px] bg-[#ececec75]'></div>

            <div className='py-10 flex gap-2' >
                <div className='h-75 w-[3px] bg-[#FFA500]'></div>
                <div className=''>
                    <div className='flex gap-2'>
                        <img src={globe} alt="globe"  className='h-10'/>
                        <p className='oswald-font text-[24px] font-semibold text-white'>VISSION</p>
                    </div>
                    <p className='oswald-font text-[18px] text-white py-5 px-2'>Founded in 1983, SecureWealth was created to address the challenges of traditional banking—long queues, complicated processes, and limited access. We started with a vision to make banking simple, accessible, and convenient for everyone. Today, we proudly serve 7+ million users, helping them manage their finances with ease.</p>

                
                    <button className='py-2 px-3 bg-[#FFA500] shadow-black rounded-full oswald-font cursor-pointer text-white  my-5 '>Book a Free Strategy Call</button>
                
                </div>
            </div>
            </div>
        </div>
        </Container>
    </div>
  )
}
