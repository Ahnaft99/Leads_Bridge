import React from 'react'
import Container from './Container'
import a from '../assets/a.png'

const HelpAmazon = () => {
  return (
    <div className='py-10 bg-black'>
        <Container>
        <div className='flex items-center gap-2 justify-center '>
                <img src={a} alt="alogo" />
                <p className='oswald-font text-[16px] text-white'> Growth<span className='text-[#FFA500]'>Business</span></p>
                
            </div>
            <div className='text-center py-1'>
            <h2 className='oswald-font text-[56px] font-semibold text-white'>How We Help You <br />
            Win on <span className='text-[#FFA500]'>Amazon</span></h2>
            <p className='oswald-font text-[16px]   w-[350px] mx-auto text-center text-white'>At FINTRIXX, we don’t guess—we use data-driven
            strategies to scale your business.</p>
            </div>

            <div className='w-12/12 flex justify-between gap-2 py-5'>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] bg-[#232323] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>We Make You Stand Out</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2 text-white'>Targeted marketing to reach the right buyers. </p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] bg-[#232323] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>We Fix Your Rankings </h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2 text-white'>SEO, keywords & ads for visibility.</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] bg-[#232323] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>We Optimize Your Ads</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2 text-white'>No wasted budget—only high ROI advertising. </p>
              </div>
            </div>

            </div>
            </div>
            <div className='w-12/12 flex justify-between gap-2 py-5'>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] bg-[#232323] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>We Manage Your Inventory</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2 text-white'>So you never run out of stock or overstock.</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] bg-[#232323] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>We Keep Your Account Safe</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2 text-white'>Avoid suspensions, policy violations & account risks.</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] bg-[#232323] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'> We Scale Your Business</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2 text-white'>Expansion, market entry & growth.</p>
              </div>
            </div>

            </div>
            </div>
          <div className='w-full flex justify-center'>
          <button type='submit' className='py-2 px-3 bg-[#FFA500] shadow-black rounded-full oswald-font cursor-pointer text-white my-10   '>Talk to an Expert</button>
          </div>
        </Container>
    </div>
  )
}

export default HelpAmazon