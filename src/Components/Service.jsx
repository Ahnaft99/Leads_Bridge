import React from 'react'
import Container from './Container'
import a from '../assets/a.png'
import rocket from '../assets/rocket.png'
import iconRight from '../assets/iconRight.png'
import graph from '../assets/graph.png'
import box from '../assets/box.png'
import globe from '../assets/globe.png'

const Service = () => {
  return (
    <div className='py-10'>
        <Container>
        <div className='flex items-center gap-2 justify-center '>
                <img src={a} alt="alogo" />
                <p className='oswald-font text-[16px]'>Our <span className='text-[#FFA500]'>Service</span></p>
                
            </div>
            <div className='text-center py-1'>
            <h2 className='oswald-font text-[56px] font-semibold'>Scale Smarter, <span className='text-[#FFA500]'>Sell Faster</span></h2>
            <p className='oswald-font text-[16px] '>We handle everything Amazon so you can focus on growing.</p>
            </div>

            <div className='w-12/12 w-[1200px] flex justify-center py-5 mx-10'>
                
                <div className='w-6/12 w-[600px]'>
                    <div className='w-[500px] h-[250px] bg-white shadow-2xl rounded-[12%] '>
                     <div className='py-10'>
                     <div className='flex justify-between items-center px-2 '>
                       <h2 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>Amazon Growth & Advertising</h2>
                       <img src={rocket} alt="" className='w-[50px] h-[50px]'/>
                       </div>
                       <div className='h-10 w-1 bg-[#FFA500] mx-2'></div>
                       <div className='flex px-2 py-3'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Bid & Budget Optimization – Higher ROI, lower ACOS.</p>
                       </div>
                       <div className='flex px-2'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Bid & Budget Optimization – Higher ROI, lower ACOS.</p>
                       </div>
                     </div>
                    </div>
                </div>
                <div className='w-6/12 w-[600px]'>
                    <div className='w-[500px] h-[250px] bg-white shadow-2xl rounded-[12%] '>
                     <div className='py-10'>
                     <div className='flex justify-between items-center px-2 '>
                       <h2 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>SEO & Product Ranking</h2>
                       <img src={graph} alt="graph" className='w-[50px] h-[50px]'/>
                       </div>
                       <div className='h-10 w-1 bg-[#FFA500] mx-2'></div>
                       <div className='flex px-2 py-3'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Organic & Sponsored Ranking – More visibility, more sales</p>
                       </div>
                       <div className='flex px-2'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Keyword & Competitor Analysis – Stay ahead of the competition.</p>
                       </div>
                     </div>
                    </div>
                </div>
            </div>
            <div className='w-12/12 w-[1200px] flex justify-center py-5 mx-10'>
                
                <div className='w-6/12 w-[600px]'>
                    <div className='w-[500px] h-[250px] bg-white shadow-2xl rounded-[12%] '>
                     <div className='py-10'>
                     <div className='flex justify-between items-center px-2 '>
                       <h2 className='oswald-font text-[18px] text-[#FFA500] font-semibold'> Inventory & Account Management</h2>
                       <img src={box} alt="box" className='w-[50px] h-[50px]'/>
                       </div>
                       <div className='h-10 w-1 bg-[#FFA500] mx-2'></div>
                       <div className='flex px-2 py-3'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Inventory Forecasting & Restocking – No stockouts, no overstocking.</p>
                       </div>
                       <div className='flex px-2'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Amazon Account Health & Compliance – Avoid suspensions & violations.</p>
                       </div>
                     </div>
                    </div>
                </div>
                <div className='w-6/12 w-[600px]'>
                    <div className='w-[500px] h-[250px] bg-white shadow-2xl rounded-[12%] '>
                     <div className='py-10'>
                     <div className='flex justify-between items-center px-2 '>
                       <h2 className='oswald-font text-[18px] text-[#FFA500] font-semibold'>Amazon Growth & Advertising</h2>
                       <img src={globe} alt="globe" className='w-[50px] h-[50px]'/>
                       </div>
                       <div className='h-10 w-1 bg-[#FFA500] mx-2'></div>
                       <div className='flex px-2 py-3'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>Launching New Products – Market research-backed success.</p>
                       </div>
                       <div className='flex px-2'>
                        <img src={iconRight} alt="iconRight" />
                        <p className='oswald-font text-[14px]  text-[#4F4D4D] ml-2'>International Expansion – Sell beyond borders with ease..</p>
                       </div>
                     </div>
                    </div>
                </div>
            </div>


        </Container>
    </div>
  )
}

export default Service