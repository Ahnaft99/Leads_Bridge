import React from 'react'
import Container from './Container'

const Market = () => {
  return (
    <div>
        <Container>
            <div className='bg-white py-10'>
                <div>
                    <h1 className='oswald-font text-[24px] font-bold text-center'>Amazon Market Statistics Worldwide 2024</h1>
                </div>
                <div className='w-12/12 py-10 flex gap-2 justify-center'>
                    <div className='w-3/12 bg-white shadow-2xl  w-[300px] h-[164px]  rounded-[5%]'>
                        <h1 className='oswald-font text-[30px] font-bold text-center pt-10'>600 million</h1>
                        <p className='oswald-font text-[14px] text-center font-semibold'>Amazon Offers Over Products</p>
                    </div>
                    <div className='w-3/12 bg-white shadow-2xl  rounded-12% w-[300px] h-[164px]   rounded-[5%]'>
                        <h1 className='oswald-font text-[30px] font-bold text-center pt-10'>$638.0 billion</h1>
                        <p className='oswald-font text-[14px] text-center font-semibold'>Amazon Global Net Sales Revenue</p>
                    </div>
                    <div className='w-3/12 bg-white shadow-2xl  rounded-12% w-[300px] h-[164px]   rounded-[5%]'>
                        <h1 className='oswald-font text-[30px] font-bold text-center pt-10'>11.95 million </h1>
                        <p className='oswald-font text-[14px] text-center font-semibold'>Amazon Handles Orders Daily.</p>
                    </div>
                    <div className='w-3/12 bg-white shadow-2xl  rounded-12% w-[300px] h-[164px]   rounded-[5%]'>
                        <h1 className='oswald-font text-[30px] font-bold text-center pt-10'>$1.6 billion </h1>
                        <p className='oswald-font text-[14px] text-center font-semibold'>Amazon Average Daily Sales Revenue</p>
                    </div>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Market