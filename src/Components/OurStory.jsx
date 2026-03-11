import React from 'react'
import Container from './Container'
import a from '../assets/a.png'

const OurStory = () => {
  return (
    <div className='py-10'>
        <Container>
            <div className='flex items-center gap-2 justify-center '>
                <img src={a} alt="alogo" />
                <p className='oswald-font text-[16px]'>Our <span className='text-[#FFA500]'>Story</span></p>
            </div>
            <div className='w-full'>
                <p className='oswald-font text-[30px] font-bold w-[700px] text-center  mx-auto '>Struggling With Amazon Sales? Let’s Scale Your Business—<span className='text-[#FFA500] '>Faster, Smarter,</span>  & Stress-Free!</p>
                <p  className='oswald-font  w-[550px] text-[18px] text-center  mx-auto pt-2'>Amazon is complex, but success doesn’t have to be. At <span className='text-[#FFA500] '>FINTRIXX</span>, we help sellers increase sales, optimize ads, rank higher, and expand into new markets —without wasting time or money. 🎯 Let’s turn your struggles into scalable success!</p>
                <button className='py-2 px-3 bg-[#FFA500] shadow-black rounded-full oswald-font cursor-pointer text-white ml-100 my-10  '>Book a Free Consultation</button>
            </div>
        </Container>
    </div>
  )
}

export default OurStory