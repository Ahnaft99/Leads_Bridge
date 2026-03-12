import React from 'react'
import Container from './Container'
import a from '../assets/a.png'

const Business = () => {
  return (
    <div className='py-10'>
        <Container>
        <div className='flex items-center gap-2 justify-center '>
                <img src={a} alt="alogo" />
                <p className='oswald-font text-[16px]'> Growth<span className='text-[#FFA500]'>Business</span></p>
                
            </div>
            <div className='text-center py-1'>
            <h2 className='oswald-font text-[56px] font-semibold'>The Harsh Reality of <br />
            Selling on  <span className='text-[#FFA500]'>Amazon</span></h2>
            <p className='oswald-font text-[16px]   w-[550px] mx-auto text-center'>Selling on Amazon is tough. Do these struggles sound familiar? Without the
            right strategy, you’re losing money, time, and opportunities.</p>
            </div>

            <div className='w-12/12 flex justify-between gap-2 py-5'>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>Lost in Competition?</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2'>10M+ sellers & 350M+ product how do you stand out?</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>Burning Cash on Ads?</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2'>PPC feels like a money pit with no returns.</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'> Low Rankings?</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2'>Amazon’s complex algorithms keep changing. </p>
              </div>
            </div>

            </div>
            </div>
            <div className='w-12/12 flex justify-between gap-2 py-5'>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>Inventory Headaches?</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2'>Stockouts, overstocking, at the wrong time?</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>Risk of Account Suspension?</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2'>Amazon’s strict policies make selling stressful.</p>
              </div>
            </div>

            </div>
            <div className='w-4/12'>
            <div className='h-[180px] w-[400px] shadow-2xl rounded-2xl'>
              <div className='py-10 px-3'>
              <h3 className='oswald-font text-[18px] text-[#FFA500] font-semibold'> Low Rankings?</h3>
              <div className='h-8 w-[3px] bg-[#FFA500]' ></div>
              <p className='text-[15px] oswald-font pt-2'>Managing it all alone is overwhelming</p>
              </div>
            </div>

            </div>
            </div>
          <div className='w-full flex justify-center'>
          <button type='submit' className='py-2 px-3 bg-[#FFA500] shadow-black rounded-full oswald-font cursor-pointer text-white my-10   '>Talkto an Expert</button>
          </div>
        </Container>
    </div>
  )
}

export default Business