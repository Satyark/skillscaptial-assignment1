import Image from 'next/image'

type CardProps = {
    image: string;
    title: string;
    description: string;
}

export const Card = ({image, title, description}: CardProps) => {
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