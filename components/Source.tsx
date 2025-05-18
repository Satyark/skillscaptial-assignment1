import React from 'react'
import Image from 'next/image'

type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
}

const cardData = [
    {
        image: '/consult.svg',
        title: 'SAP Consultants',
        description: 'Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.',
        buttonText: 'Explore SAP Consultants'
    },
    {
        image: '/glass.svg',
        title: 'Managed Teams',
        description: 'Scalable, fully managed SAP teams for end-to-end project delivery.',
        buttonText: 'Browse Managed Teams'
    },
    {
        image: '/sap.svg',
        title: 'SAP Consulting',
        description: 'SAP consulting and integration solutions to accelerate transformation.',
        buttonText: 'Access Top SAP Consulting'
    }]

const Card = ({image, title, description, buttonText}: CardProps) => {
    return (
        <div className='flex flex-col items-center gap-2 justify-center border border-gray-200 rounded-xl shadow-sm md:w-[413px]'>
            <Image src={image} alt='Source' width={413} height={340} className='rounded-xl'/>
            
            <span className='flex flex-col items-start justify-start ml-6 p-4 gap-5 text-left max-w-[413px]'>
                <p className='text-black md:text-[28px] text-[20px] font-bold'>
                    {title}
                </p>
                <p className='text-black md:text-[16px] text-[16px]'>
                    {description}
                </p>
            </span>
            <button className='rounded-[32px] bg-[#1A1F36] border font-archivo font-medium text-white w-[280px] sm:w-[365px] h-[40px] sm:h-[48px] mb-5 cursor-pointer'>
            <span className='flex items-center justify-center'>
            <p>{buttonText}</p>
            <Image src='/Arrow 1.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>

          </button>
        </div>
    )
}


const Source = () => {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <div className='flex flex-col items-center justify-center text-center'>
            <p className='text-black md:text-[53px] text-[32px] font-bold'>Source & Deploy SAP Expertise Seamlessly</p>
            <p className='text-black md:text-[16px] text-[16px] font-medium'>Our AI-driven platform powers three key engagement models.</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center text-center gap-4 mt-3'>
        {cardData.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
          buttonText={card.buttonText}
        />
      ))}
        </div>
    </div>
  )
}

export default Source