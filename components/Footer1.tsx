import Image from 'next/image'
import React from 'react'

const Footer1 = () => {
  return (
    <div className='bg-[#1A1F36] w-full flex  p-5'>
        <Image src='/footer1.svg' alt='footer1' width={460} height={370} className='hidden md:block'/>
        <div className='flex flex-col items-center justify-center text-center z-10'>
              <p className='text-white md:text-[53px] text-[32px] font-bold'>Reinforce Value Proposition</p>
              <p className='text-white md:text-[16px] text-[16px] font-medium'>Genuine outcomes from authentic teams that have experienced the change.</p>
              <div className='flex flex-col md:flex-row my-3'>
              <button className='rounded-[32px] md:my-10 bg-[#FCD980] cursor-pointer font-bold text-black sm:w-[300px] h-[40px] sm:h-[64px]'>
              <span className='flex items-center justify-center'>
              <p className='text-[12px] md:text-[16px]'>Find SAP Experts Now</p>
            </span>
            </button>

            <button className='rounded-[32px] md:my-10 bg-transparent cursor-pointer font-bold text-white w- sm:w-[300px] h-[40px] sm:h-[64px]'>
              <span className='flex items-center justify-center'>
              <p className='text-[12px] md:text-[16px]'>Join Our Talent Pool</p>
              <Image src='/Arrow 1.svg' alt='Arrow' width={34} height={34} className='ml-2' />
              </span>
            </button>
              </div>
          </div>
        <Image src='/footer1.svg' alt='footer1' width={460} height={370} className='hidden md:block'/>
    </div>
  )
}

export default Footer1