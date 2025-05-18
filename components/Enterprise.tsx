import Image from 'next/image';
import React from 'react';

const cardData = [
    {
        image: '/ent1.svg',
        title: 'Instant Matching',
        description: 'Smart AI-driven selection of the top 1️% of SAP consultants.',
    },
    {
        image: '/ent2.svg',
        title: 'Guaranteed Quality',
        description: 'All consultants undergo a thorough vetting process prior to deployment.',
    },
    {
        image: '/ent3.svg',
        title: 'Seamless Replacements',
        description: 'Get a new consultant within 24 hours if needed.',
    }
]

type CardProps = {
    image: string;
    title: string;
    description: string;
}

const Card = ({image, title, description}: CardProps) => {
    return (
        <div className='flex flex-col bg-white items-start gap-2 justify-center border border-gray-200 rounded-xl shadow-sm  p-4'>
        <span className='flex items-center justify-start'>
            <Image src={image} alt='Source' width={39} height={36} className='rounded-md' />
        </span>

        <span className='flex flex-col items-start justify-start gap-5 text-left max-w-[413px] mt-4'>
            <p className='text-black md:text-[28px] text-[20px] font-bold'>
            {title}
            </p>
            <p className='text-black md:text-[16px] text-[14px]'>
            {description}
            </p>
        </span>
        </div>

    )
};

const Enterprise = () => {
  return (
    <div className="relative w-screen md:h-[584px] h-screen mb-10">
    <Image
      src="/ent.svg"
      alt="Enterprise"
      fill
      className="object-cover w-full h-full z-0"
    />
  
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <span className='mb-6'>
        <p className=" md:text-[53px] text-[32px] font-bold">Enterprise-Grade SAP Talent in 48 Hours</p>
        <p className="text-[16px] font-medium">No Compromise on Quality.</p>
        </span>

      <div className="md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
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
   
  </div>
  
  )
}

export default Enterprise