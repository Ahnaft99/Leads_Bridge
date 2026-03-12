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
        </Container>
    </div>
  )
}

export default Business