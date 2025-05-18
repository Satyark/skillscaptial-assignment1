import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer2 = () => {
  return (
    <div className='bg-[#0D0E0F] w-full'>
        <div className='flex flex-col md:flex-row justify-between items-center p-10'>
            <p className='text-white text-[26px] font-bold'>SkillsCapital</p>
            <div className='flex justify-center items-center gap-6'>
                <p className='text-white text-[20px] font-semibold'>Follow are socials</p>
                <Image src='/socials.svg' alt='facebook' width={150} height={24} className='cursor-pointer'/>
            </div>
        </div>

        <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 p-10'>
            <span className=' flex flex-col'>
                <p className='text-[20px] text-white'>Quick Links</p>
                <Link href='/' className='text-white text-[16px] mt-5 opacity-80'>SAP Talen Cloud</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>Enterprise Talent Cloud</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>AI-Powered Vetting</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>Tech Talent Solution</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>About Us</Link>
            </span>
            <span className=' flex flex-col'>
                <p className='text-[20px] text-white'>Support</p>
                <Link href='/' className='text-white text-[16px] mt-5 opacity-80'>Help</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>Conditions</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>Privacy</Link>
                <Link href='/' className='text-white text-[16px] mt-2 opacity-80'>Policy</Link>
            </span>
            <span className='flex flex-col'>
                <p className='text-[20px] text-white'>Get in touch</p>
                <span className='flex justify-start items-center gap-2 mt-5'>
                    <Image src='/Border.svg' alt='location' width={24} height={24} className='cursor-pointer'/>
                    <Link href='/' className='text-white text-[16px] opacity-80'>+91 123 465 789</Link>
                </span>
                
                <span className='flex justify-start items-center gap-2 mt-2'>
                    <Image src='/Border (1).svg' alt='location' width={24} height={24} className='cursor-pointer'/>
                    <Link href='/' className='text-white text-[16px] opacity-80'>info@skillscapital.io</Link>
                </span>

                <span className='flex justify-start items-center gap-2 mt-2'>
                    <Image src='/Border (2).svg' alt='location' width={24} height={24} className='cursor-pointer'/>
                    <Link href='/' className='text-white text-[16px] opacity-80'>Pune, India</Link>
                </span>
            </span>
        </div>
        <div className='w-full flex justify-center items-center p-5'>
        Copyright © 2025 All Rights Reserved.
        </div>
    </div>
  )
}

export default Footer2