import React from 'react'
import Image from 'next/image'
import Deeptech from './Deeptech';
import Cognitive from './Cognitive';
import { Card } from './Card';

const cardData = [
    {
        image: '/ai.svg',
        title: 'Continuously Learning Models',
        description: 'Matching algorithms evolve with every project, improving accuracy over time.',
    },
    {
        image: '/Vector.svg',
        title: 'Trained on Real-World Data',
        description: 'Models are trained on 20,000+ consultant profiles and 1,000+ client project outcomes.',
    },
    {
        image: '/Frame 4236.svg',
        title: 'AI-Powered Precision',
        description: 'Instantly identifies best-fit SAP consultants using advanced AI/ML algorithms.',
    },
    {
        image: '/company.svg',
        title: 'Optimized for Enterprise Needs',
        description: 'Ensures high-relevance matches tailored to complex SAP delivery environments.',
    }
]


const AiPowered = () => {
  return (
    <div className='flex flex-col justify-center items-center my-5 md:my-10'>
        <div className='flex flex-col items-center justify-center text-center'>
            <p className='text-black md:text-[53px] text-[32px] font-bold'>AI-Powered Deep Vet 360</p>
            <p className='text-black md:text-[16px] text-[16px] font-medium'>Precision Hiring at Scale.</p>
        </div>

        <div className='flex justify-between items-center bg-[#1A1F36] rounded-xl p-4 w-screen md:w-[1280px] mt-8'>
            <span className='flex items-center justify-center gap-2'>
                <Image src='/Frame 4245.svg' alt='AI' width={32} height={38} />
                <p className='text-white text-[16px] md:text-[20px] font-bold'>Advanced ML-Powered Precision MatchTM</p>
            </span>
            <button className='rounded-[32px] bg-white cursor-pointer font-medium text-black w-[160px] h-[40px] sm:h-[48px]'>
            <span className='flex items-center justify-center'>
            <p className='text-[14px] md:text-[16px]'>Find Talent</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>
 
        </div>

        <div className='flex flex-col md:flex-row items-center justify-start text-center gap-4 mt-5 w-screen md:w-[1280px] h-screen md:h-[584px]'>
        <Image src='/SAP2.svg' alt='AI' width={554} height={584} className='hidden md:block' />
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
            <p className='text-[12px] md:text-[16px]'>Explore Our Vetting Process</p>
            <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>
          </button>
        <Deeptech/>
        <Cognitive/>

    </div>
  )
}

export default AiPowered;