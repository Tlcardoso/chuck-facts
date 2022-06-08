import React from 'react'
import { Title } from '../atoms/Title'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'
import Image from 'next/image'

interface FactsProps {
    url: string
    alt: string
    children: string
    onClick?: () => void
}

const FactsPhoto = ({ url, alt, children, onClick}: FactsProps) => {
  return (
    <div className='h-[475px] w-full lg:w-[70%] rounded-2xl relative border-8 border-orange-800 text-white cy_fact'>

        <div className="absolute z-10 mt-4 text-center w-full bg-orange-800">
            <Title>Facts</Title>
            <BsFillArrowRightSquareFill onClick={onClick} className=" absolute w-10 h-10 right-6 bottom-3 cursor-pointer"/>
        </div>
        
        <Image 
            src={url} 
            alt={alt} 
            layout="fill"
            objectFit="cover"
            priority
            className="w-full h-full rounded-lg brightness-50 object-cover"
        />

        <p className='absolute overflow-x-clip w-full bottom-[5%] text-sm sm:bottom-[30%] sm:text-xl font-semibold text-center px-[5%]'>
            {children}
        </p>
    </div>
  )
}

export { FactsPhoto }