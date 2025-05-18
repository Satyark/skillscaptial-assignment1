import React from 'react'
import Image from 'next/image'
import { Card } from './Card';


const cardData = [
    {
        image: '/cog1.svg',
        title: 'Bias-Free Evaluation',
        description: 'Delivers data-backed insights that reduce hiring bias and enhance fairness.',
    },
    {
        image: '/cog2.svg',
        title: 'Expertise Depth Evaluation',
        description: 'NLP algorithms extract and score domain knowledge and technical fluency in real time.',
    },
    {
        image: '/cog3.svg',
        title: 'AI-Assisted Behavioral Insights',
        description: 'Natural Language Processing analyzes video interview responses to assess personality traits.',
    },
    {
        image: '/cog4.svg',
        title: 'Behavioral Fit Mapping',
        description: 'Matches candidates to roles based on cognitive, interpersonal, and cultural alignment.',
    }
]



const Cognitive = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5 md:my-10'>
       
        <div className='flex justify-between items-center bg-[#1A1F36] rounded-xl p-4 w-screen md:w-[1280px] mt-8'>
            <span className='flex items-center justify-center gap-2'>
                <Image src='/cog.svg' alt='AI' width={32} height={38} />
                <p className='text-white text-[16px] md:text-[20px] font-bold'>Cognitive NLP-Processed Talent Persona</p>
            </span>
            <button className='rounded-[32px] bg-white cursor-pointer font-medium text-black w-[160px] h-[40px] sm:h-[48px]'>
            <span className='flex items-center justify-center'>
            <p className='text-[14px] md:text-[16px]'>Find Talent</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>
        </div>

          <div className='flex flex-col md:flex-row items-center justify-start text-center gap-4 mt-5 w-screen md:w-[1280px] h-screen md:h-[584px]'>
        <Image src='/cog5.svg' alt='AI' width={554} height={584} className='hidden md:block' />
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
            <p className='text-[12px] md:text-[16px]'>Discover Our Vetting Process</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>
    </div>
  )
}

export default Cognitive;