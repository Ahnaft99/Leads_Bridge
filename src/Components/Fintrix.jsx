import React from 'react'
import Container from './Container'
import alogo from '../assets/a.png'
import logo from '../assets/Logo.png'


const Fintrix = () => {
  return (
    <div className='bg-[#151515] py-25'>
     <Container>
        <div className='w-12/12 w-full flex'>
        <div className='w-6/12 justify-center'>
        <div className='flex items-center gap-2'>
        <img src={alogo} alt="alogo" />
        <p className='oswald-font text-[16px] text-white'>Why <span className='text-[#FFA500]'>Choose Us</span></p>
        </div>
        <div className='pt-10'>
            <h1 className='oswald-font text-[40px] text-white font-semibold'>Why Choose <span className='text-[#FFA500]'>FINTRIXX?</span></h1>
            <p className='oswald-font text-[16px] text-[#FFFFFF]'>Amazon is tough—we make it easy. At FINTRIXX, we help sellers rank higher, scale faster, & sell smarter. We analyze trends, optimize ads, manage inventory, & protect your account so you can focus on your business.
            🚀 No more guesswork. No more wasted money. Just real results.</p>
            <button className='py-2 px-3 bg-[#FFA500] shadow-black rounded-full oswald-font cursor-pointer text-white my-10  '>Book a Free Consultation</button>
        </div>

        </div>
        <div className='w-6/12 mt-10 relative'>
        <div>
        <div className='h-45 w-45 rounded-full bg-[#FFA500] relative '>
            <div className='h-45 w-45 rounded-full bg-[#232323] absolute top-[-5px] '>
                <img src={logo} alt="Logo"  className='absolute top-[40px] left-[35px] h-25 w-25'/>
            </div>
            </div>
        </div>
          <div>
          <div class="flex items-center justify-center absolute top-[-10px] left-[250px]">
  <div class="relative w-48 h-50 overflow-hidden">
    
  <div className="absolute inset-0 rounded-full border-[32px] border-white/5 -translate-x-1/2  "></div>
  <div className="absolute inset-0 rounded-full border-[32px] border-white/5 -translate-x-1/2 mr-20"></div>

    
  </div>
</div>
          </div>
          
        </div>
        </div>
     </Container>
    </div>
  )
}

export default Fintrix