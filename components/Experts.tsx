import Image from 'next/image';
import React from 'react';

type CardProps = {
    image: string;
    title: string;
    description: string;
    buttonText: string;
    persona: string;
    availability: string;
    fit: string;
    score: string;
    readiness: string;
}

const cardData = [
    {
        image: '/exp1.svg',
        title: 'SAP FICO Consultant',
        description: 'Pre-vetted, ready-to-deploy SAP talent for on-demand projects & implementations.',
        buttonText: 'Explore SAP Consultants',
        persona: 'Analytical, structured, risk-aware',
        availability: 'Immediate',
        fit: 'BFSI, Manufacturing, 6+ years',
        score: '4.8/5 (based on 3 global clients)',
        readiness: 'Ready in 48 hours'
    },
    {
        image: '/exp2.svg',
        title: 'SAP MM / Ariba Consultant',
        description: 'Scalable, fully managed SAP teams for end-to-end project delivery.',
        buttonText: 'Browse Managed Teams',
        persona: 'Fast-learner, collaborative',
        availability: 'Immediate',
        fit: 'Pharma, Retail, 8+ years',
        score: '4.6/5 (based on 3 global clients)',
        readiness: 'Ready in 24 hours'
    },
    {
        image: '/exp3.svg',
        title: 'SAP SuccessFactors Lead',
        description: 'SAP consulting and integration solutions to accelerate transformation.',
        buttonText: 'Access Top SAP Consulting',
        persona: 'Empathetic, outcome-focused',
        availability: 'Immediate',
        fit: 'Telecom, Public Sector, 6+ years',
        score: '5/5 (based on 3 global clients)',
        readiness: '85%'
    }]

const Card = ({image, title, buttonText, persona, availability, fit, score, readiness}: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-center border border-gray-200 rounded-xl shadow-sm md:w-[413px]'>
            <Image
            src={image}
            alt='Source'
            width={413}
            height={340}
            className='w-[200px] sm:w-[300px] md:w-[413px] h-auto rounded-t-xl'
            />
            <div className='bg-white rounded-b-xl'>
            <span className='flex flex-col items-start justify-start mx-6 p-4 gap-2 text-left max-w-[413px]'>
                <p className='text-black text-[14px] md:text-[16px] font-bold'>
                  Role:  {title}
                </p>
                <div className='w-full h-[1px] bg-black' />
                <span>
                    <p className='text-black text-[14px] font-bold'>JD Match: 85%</p>
                    <Image src='/exp.svg' alt='Star' width={16} height={16} className='w-full'/>
                </span>
                <div className='w-full h-[1px] bg-black' />
                <div className="space-y-2 w-full hidden md:block ">
                    <div className="flex justify-between text-black text-[14px]">
                    <span className="font-bold">Persona:</span>
                    <p>{persona}</p>
                    </div>
                    <div className="flex justify-between text-black text-[14px]">
                    <span className="font-bold">Availability:</span>
                    <p>{availability}</p>
                    </div>
                    <div className="flex justify-between text-black text-[14px]">
                    <span className="font-bold">Domain Fit:</span>
                    <p>{fit}</p>
                    </div>
                    <div className="flex justify-between text-black text-[14px]">
                    <span className="font-bold">Reference Score:</span>
                    <p>{score}</p>
                    </div>
                    <div className="flex justify-between text-black text-[14px]">
                    <span className="font-bold">Readiness:</span>
                    <p>{readiness}</p>
                    </div>
                </div>

            </span>
            <button className='rounded-[32px] bg-[#1A1F36] border font-archivo font-medium text-white w-[280px] sm:w-[365px] h-[40px] sm:h-[48px] mb-5 cursor-pointer'>
            <span className='flex items-center justify-center'>
            <p className='text-[14px] font-bold'>View Full Prosona Report</p>
            <Image src='/Arrow 1.svg' alt='Arrow' width={34} height={34} className='ml-2' />
            </span>

          </button>
          </div>
        </div>
    )
}

const Experts = () => {
  return (
    <div className="relative w-screen h-[1400px] md:h-[1100px] mb-10">
    <Image
      src="/ent.svg"
      alt="Enterprise"
      fill
      className="object-cover w-full h-full z-0"
    />
  
    <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center px-6">
        <span className='mb-6'>
        <p className=" md:text-[53px] text-[32px] font-bold">Meet Our Elite SAP Experts</p>
        <p className="text-[16px] font-medium">Selected experts with knowledge and a history of successful delivery.</p>
        </span>

      <div className="md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
        {cardData.map((card, index) => (
            <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            persona={card.persona}
            availability={card.availability}
            fit={card.fit}
            score={card.score}
            readiness={card.readiness}
            />
        ))}
        </div>
        <button className='rounded-[32px] bg-[#FCD980] text-black w-[280px] sm:w-[365px] h-[40px] sm:h-[48px] my-5 cursor-pointer'>
            <span className='flex items-center justify-center'>
            <p className='text-[14px] font-bold'>View More SAP Consultants</p>
            <Image src="/navarrow.svg" alt="Arrow" width={34} height={34} className="ml-2" />
            </span>

          </button>
    </div>
   
  </div>
  
  )
}

export default Experts