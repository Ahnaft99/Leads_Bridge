import React from 'react'
import alogo from '../assets/a.png'
import man1 from '../assets/man1.png'
import man2 from '../assets/man2.png'
import man3 from '../assets/man3.png'
import Container from './Container'
import { FaStar } from 'react-icons/fa'


const Banner = () => {
  return (
    <div class="bg-gradient-to-b from-[#FFFF] to-[#f0d29c] py-25">
        <Container>
        <div className="flex items-center justify-center gap-2 pt-25">
  <img  src={alogo} alt="alogo" />
  <p className='oswald-font text-[16px]'>
    Your Full-Service <span className='text-[#FFA500]'>Amazon Partner</span>
  </p>
</div>
<div className='w-12/12 flex'>
    <div className='w-3/12 mt-10    '>
        <div className='bg-white h-[177px] w-[227px] shadow  rotate-170  relative  rounded-[10%]'>
        <h3 className="font-semibold text-gray-800 rotate-170 absolute top-[140px] left-[100px]">Total Incomes</h3>
  <div className="flex items-end gap-4 h-full rotate-170 absolute top-[20px] left-[30px]">
    <div className="bg-gray-300 w-4 rounded" style={{ height: '30%' }}></div>
    <div className="bg-gray-300 w-4 rounded" style={{ height: '50%' }}></div>
    <div className="bg-gray-300 w-4 rounded" style={{ height: '20%' }}></div>
    <div className="bg-amber-500 w-4 rounded" style={{ height: '60%' }}></div>
    <div className="bg-gray-300 w-4 rounded" style={{ height: '20%' }}></div>
    <div className="bg-gray-300 w-4 rounded" style={{ height: '30%' }}></div>
  </div>
        </div>
    </div>
    <div className='w-6/12 '>
        <p className='oswald-font text-black text-[40px] font-semibold w-[600px]'>Turn Your Amazon Struggles into Success—Save Time, <span className='text-[#FFA500] ml-20'>Maximize Profits!</span></p>
        <button className='py-2 px-3 bg-[#FFA500] shadow rounded-full ml-32 my-5 oswald-font cursor-pointer text-white'>Book a Free Consultation</button>
    </div>
    <div className='w-3/12'>
        <div className='bg-white h-[80px] w-[250px] shadow ml-10 rotate-25 mt-20 rounded-[12%]'>
            <div className='flex py-5 items-center'>
                <img src={man1} alt="man1" />
                <img src={man2} alt="man2" className='ml-[-12px]'/>
                <img src={man3} alt="man3" className='ml-[-12px]' />
                <div className=''>
                <p className='oswald-font text-[20px] font-bold '>45k+ Users</p>
                <p className='flex items-center gap-1'><FaStar className='text-[#FFA500]' />  4.7 Rating  </p>
                </div>
               
            </div>
            
        </div>
    </div>
</div>
        </Container>
</div>
  )
}

export default Banner