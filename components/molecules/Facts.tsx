import React from 'react'
import { Title } from '../atoms/Title'
import { BsFillArrowRightSquareFill } from 'react-icons/bs'

interface FactsProps {
    url: string
    alt: string
    children: string
    onClick?: () => void
}

const FactsPhoto = ({ url, alt, children, onClick}: FactsProps) => {
  return (
    <div className='h-[95%] w-full lg:w-[70%] rounded-2xl relative border-8 border-orange-800 text-white'>

        <div className="absolute mt-4 text-center w-full bg-orange-800 z-10">
            <Title>Facts</Title>
            <BsFillArrowRightSquareFill onClick={onClick} className=" absolute w-10 h-10 right-6 bottom-3 cursor-pointer"/>
        </div>
        
        <img 
            src={url} 
            alt={alt} 
            className="w-full h-full rounded-lg brightness-50 object-cover"
        />

        <p className='absolute w-full bottom-[30%] text-xl font-semibold text-center px-[5%]'>
            {children}
        </p>
    </div>
  )
}

export { FactsPhoto }