import React, { useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

interface factListCardProps {
  url: string
  alt: string
  fact: string
  upadateDate: string
}

const FactListCard = ({url, alt, fact, upadateDate}: factListCardProps) => {
  const [closed, setClosed] = useState(false)


  const handleClose = () => {
    setClosed(true)
  }

  const dateFormat = (date: string) => {
    const event = new Date(date)
    return event.toDateString()
  }

  const date = dateFormat(upadateDate)

  return (
    <div className={closed ? `hidden` : `w-full h-auto bg-white rounded-full flex items-center relative mb-4 cy_card`}>
      <img 
        className='h-[70px] w-[70px] m-2 rounded-full object-cover border-4 border-orange-800' 
        src={url} 
        alt={alt}
      />

      <div className='w-[60%] overflow-x-clip text-orange-800 text-xs md:text-base'>
        <p>{fact}</p>
        <p className='font-bold text-orange-900'>{date}</p>
      </div>

      <AiFillCloseCircle 
        className='absolute right-5 h-[15px] w-[15px] sm:h-[30px] sm:w-[30px] cursor-pointer text-orange-900'
        onClick={handleClose}
      />
    </div>
  )
}

export { FactListCard }