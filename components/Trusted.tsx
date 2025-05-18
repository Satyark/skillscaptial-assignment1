import Image from "next/image";

type CardProps = {
    image: string;
    title: string;
    description: string;
}
const cardData = [
    {
        image: '/ai.svg',
        title: '"We skipped 2 rounds of interviews because of the Persona report."',
        description: '~ CTO, AI SaaS',
    },
    {
        image: '/Vector.svg',
        title: '“The match accuracy is unreal. Like having our own vetting panel on demand.”',
        description: '~ VP Engineering, EU Retail',
    },
    {
        image: '/Frame 4236.svg',
        title: '“They understood our JD better than our own HR team. Loved the accuracy.”',
        description: '~ VP Engineering, EU Retail',
    },
]
export const Card = ({image, title, description}: CardProps) => {
    return (
        <div className='flex flex-col bg-white items-start gap-2 justify-center border border-gray-200 rounded-xl shadow-sm  p-4'>
        <span className='flex items-center justify-start'>
            <Image src='/trust1.svg' alt='Source' width={39} height={36} className='rounded-md my-5' />
        </span>

        <span className='flex flex-col items-start justify-start gap-5 text-left max-w-[413px] mt-4'>
            <p className='text-black md:text-[28px] text-[20px] font-bold'>
            {title}
            </p>
            <p className='text-[#282938] md:text-[16px] text-[14px] font-light'>
            {description}
            </p>
        </span>
        </div>

    )
};

const AiPowered = () => {
    return (
      <div className='flex flex-col justify-center items-center my-5 md:my-10'>
          <div className='flex flex-col items-center justify-center text-center'>
              <p className='text-black md:text-[53px] text-[32px] font-bold'>Trusted by Global Enterprises & SAP Leaders</p>
              <p className='text-black md:text-[16px] text-[16px] font-medium'>Genuine outcomes from authentic teams that have experienced the change.</p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 m-3">
        {cardData.map((card, index) => (
            <Card
            key={index}
            image={card.image}
            title={card.title}
            description={card.description}
            />
        ))}
        </div>
          <button className='rounded-[32px] md:my-10 bg-[#FCD980] cursor-pointer font-bold text-black w-[200px] sm:w-[400px] h-[40px] sm:h-[64px]'>
              <span className='flex items-center justify-center'>
              <p className='text-[12px] md:text-[16px]'>See More Success Stories</p>
              <Image src='/navarrow.svg' alt='Arrow' width={34} height={34} className='ml-2' />
              </span>
            </button>
  
      </div>
    )
  }
  
  export default AiPowered;