import Image from 'next/image';
import React from 'react'

function 
Hero() {
  return (
<div className="w-full h-[799px] relative flex items-center bg-gradient-to-r from-[#002C59] from-50%">
  {/* Background image in right half */}
  <div className="absolute top-0 right-0 w-1/2 h-full z-0 hidden md:block">
    <Image
      src="/image 2150.svg"
      alt="Hero"
      fill
      className="object-cover"
    />
  </div>

  {/* Left content */}
  <div className="relative z-10 w-1/2 px-8 text-white hidden md:block">
  <div className='flex flex-col items-center justify-start text-left'>
            <p className='text-white md:text-[53px] text-[32px] font-bold'>Unleash SAP & Tech Excellence with AI/ML Talent Cloud</p>
            <p className='text-white md:text-[16px] text-[16px] font-medium'>Find and deploy elite SAP consultants, managed teams, and consulting expertise instantly with AI-driven precision.</p>
  </div>
  <div className='flex justify-center items-start mt-10'>
    <div className='w-[125px]'>
      <p className='text-white text-[20px]'>20,000+</p>
      <p className='text-white text-[14px]'>Vetted SAP Tech Consultants+</p>
    </div>
    <div className='w-[1px] h-[40px] bg-white mt-5' />
    <div className='w-[125px] ml-5'>
      <p className='text-white text-[20px]'>1000+</p>
      <p className='text-white text-[14px]'>Global Clients & SAP Projects</p>
    </div>
    <div className='w-[1px] h-[40px] bg-white mt-5' />
    <div className='w-[125px] ml-5'>
      <p className='text-white text-[20px]'>10+ Years</p>
      <p className='text-white text-[14px]'>Average Experience per Consultant</p>
    </div>
    <div className='w-[1px] h-[40px] bg-white mt-5' />
    <div className='w-[125px] ml-5'>
      <p className='text-white text-[20px]'>20M+</p>
      <p className='text-white text-[14px]'>Man-Hours of 
      SAP Expertise</p>
    </div>
  </div>
  <div className='flex flex-col md:flex-row my-3'>
      <button className='rounded-[32px] md:my-10 bg-[#FCD980] cursor-pointer font-bold text-black sm:w-[300px] h-[40px] sm:h-[64px]'>
      <span className='flex items-center justify-center'>
      <p className='text-[12px] md:text-[16px]'>Find SAP Experts Now</p>
    </span>
    </button>

    <button className='rounded-[32px] md:my-10 bg-transparent cursor-pointer font-bold text-white w- sm:w-[300px] h-[40px] sm:h-[64px]'>
      <span className='flex items-center justify-center'>
      <p className='text-[12px] md:text-[16px]'>Explore Talent Cloud</p>
      <Image src='/Arrow 1.svg' alt='Arrow' width={34} height={34} className='ml-2' />
      </span>
    </button>
      </div>
  </div>
  <div className='block md:hidden'>
  <div className='flex flex-col md:flex-row my-3'>
      <button className='rounded-[32px] md:my-10 bg-[#FCD980] cursor-pointer font-bold text-black sm:w-[300px] h-[40px] sm:h-[64px]'>
      <span className='flex items-center justify-center'>
      <p className='text-[12px] md:text-[16px]'>Find SAP Experts Now</p>
    </span>
    </button>

    <button className='rounded-[32px] md:my-10 bg-transparent cursor-pointer font-bold text-white w- sm:w-[300px] h-[40px] sm:h-[64px]'>
      <span className='flex items-center justify-center'>
      <p className='text-[12px] md:text-[16px]'>Explore Talent Cloud</p>
      <Image src='/Arrow 1.svg' alt='Arrow' width={34} height={34} className='ml-2' />
      </span>
    </button>
      </div>
  </div>
</div>



//     <section
//     className="w-full h-screen bg-no-repeat bg-cover bg-center"
//     style={{
//       backgroundImage: `
//         url('/hero1.svg'),
//         url('/hero2.svg')
//       `,
//       backgroundBlendMode: 'overlay', // optional: use 'multiply', 'screen', etc.
//     }}
//   >
//     <div className="text-white text-center p-10">
//       <h1 className="text-5xl font-bold">Welcome to My Site</h1>
//       <p className="mt-4 text-lg">With two-image layered backgrounds!</p>
//     </div>
//   </section>


  )
}

export default Hero;