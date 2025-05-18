import Image from 'next/image'
import React from 'react'

const India = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5 md:my-10'>
        <div className='flex flex-col items-center justify-center text-center'>
            <p className='text-black md:text-[53px] text-[32px] font-bold'>India - SkillsCapital for SAP & Enterprise Talent</p>
            <p className='text-black md:text-[16px] text-[16px] font-medium'>
  India&apos;s top SAP talent, combined with our AI-powered vetting, ensures unmatched expertise.
</p>
        </div>
        <div className="relative w-screen h-[350px] md:h-[584px]  md:w-[1280px] my-5 md:my-10">
        <Image
        src="/india.svg"
        alt="Enterprise"
        fill
        className="object-cover md:h-[584px] md:w-[1280px] z-0 rounded-[16px]"
        />
    
    <div className="absolute inset-0 flex items-center justify-between z-10 px-6">
  <span className="max-w-[700px]">
    <p className="md:text-[53px] text-[32px] font-bold mb-6">
      Work with Elite SAP Consultants who have delivered projects for Fortune 500 Companies.
    </p>

    <button className="rounded-[32px] bg-[#FCD980] cursor-pointer font-bold text-black w-[200px] sm:w-[400px] h-[40px] sm:h-[64px]">
      <span className="flex items-center justify-center">
        <p className="text-[12px] md:text-[16px]">Find Top SAP Talent Now</p>
        <Image src="/navarrow.svg" alt="Arrow" width={34} height={34} className="ml-2" />
      </span>
    </button>
  </span>
  <div className="hidden md:block w-[300px]" />
</div>

    
    </div>
    </div>
  )
}

export default India