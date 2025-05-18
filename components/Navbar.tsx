import Image from 'next/image'
import React from 'react'
import Dropdown from '@/components/DropDown'

const Navbar = () => {
  return (
    <nav className='bg-white w-full h-[88px] mt-2'>
      <div className='w-full h-[88px] flex justify-between items-center px-4 sm:px-8 lg:px-20'>
        {/* Logo Section */}
        <div className='flex items-center'>
          <Image src='/logo.svg' alt='Logo Text' width={115} height={32} className='mx-2' />
        </div>

        {/* Navigation and Buttons */}
        <div className='flex items-center'>
          {/* Menu for larger screens */}
          <div className="hidden lg:grid grid-cols-5 items-center mr-">
                  <Dropdown title='SAP Talent Cloud'/>
                  <Dropdown title='Enterprise Talent Cloud'/>
                  <Dropdown title='AI-Powered Vetting'/>
                  <Dropdown title='Tech Talent Solutions'/>
                  <Dropdown title='About Us'/>

          </div>

          {/* Explore Button */}
          <button className='rounded-[32px] cursor-pointer border font-archivo font-medium text-black w-[160px] sm:w-[198px] h-[40px] sm:h-[48px]'>
            <span className='flex items-center justify-center'>
            <p>Find Talent</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden flex justify-end px-4">
        <button className="text-black">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 5h16M4 12h16m-7 7h7" />
          </svg>
        </button>
      </div>
    </nav>
  )
}

export default Navbar;
