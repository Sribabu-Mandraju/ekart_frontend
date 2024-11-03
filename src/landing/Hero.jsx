import React from 'react'
import { FlipWords } from '../components/imported/Flip'
import '../index.css'

const Hero = () => {
  return (
    <>
      <div className="w-full h-[90vh] flex flex-col gap-5">
        <div className="w-full flex items-center justify-center mt-[40px]">
          <FlipWords words={["Shop-now","Get-Discount","Experience-Quality"]} className='hello'  />
        </div>
      </div>
    </>
  )
}

export default Hero
