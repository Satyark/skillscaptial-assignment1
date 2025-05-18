import React from 'react'
import Image from 'next/image'
import { Card } from './Card'


const cardData = [
    {
        image: '/deeptech1.svg',
        title: 'End-to-End Fit Scoring',
        description: 'Combines all layers into a unified candidate readiness score for decision-making.',
    },
    {
        image: '/deeptech2.svg',
        title: 'Verified by External Assessments',
        description: 'Third-party evaluations validate core skills across SAP, ERP, and enterprise technologies.',
    },
    {
        image: '/deeptech3.svg',
        title: 'AI-Powered Matching',
        description: 'Machine learning algorithms analyze SAP resumes and job descriptions to ensure precise skill alignment.',
    },
    {
        image: '/deeptech4.svg',
        title: 'Human Insights for Cultural Fit',
        description: 'Industry experts assess soft skills and team compatibility for enterprise-ready placements.',
    }
]


const Deeptech = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5 md:my-10'>
       
        <div className='flex justify-between items-center bg-[#1A1F36] rounded-xl p-4 w-screen md:w-[1280px] mt-8'>
            <span className='flex items-center justify-center gap-2'>
                <Image src='/deeptech6.svg' alt='AI' width={32} height={38} />
                <p className='text-white text-[16px] md:text-[20px] font-bold'>Deep Tech AI-Driven Deep Vet</p>
            </span>
            <button className='rounded-[32px] bg-white cursor-pointer font-medium text-black w-[160px] h-[40px] sm:h-[48px]'>
            <span className='flex items-center justify-center'>
            <p className='text-[14px] md:text-[16px]'>Find Talent</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>
        </div>


        <div className='flex flex-col md:flex-row items-center justify-start text-center gap-4 mt-5 w-screen md:w-[1280px] h-screen md:h-[584px]'>
        <Image src='/deeptech.svg' alt='AI' width={554} height={584} className='hidden md:block' />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 m-3 md:ml-10">
        {cardData.map((card, index) => (
            <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            />
        ))}
        </div>
        </div>

        <button className='rounded-[32px] md:my-10 bg-[#FCD980] cursor-pointer font-bold text-black w-[200px] sm:w-[400px] h-[40px] sm:h-[64px]'>
            <span className='flex items-center justify-center'>
            <p className='text-[12px] md:text-[16px]'>Our Candidate Vetting Process</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>

    </div>
  )
}

export default Deeptech;