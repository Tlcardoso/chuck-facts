import React from 'react'

interface factListCardProps {
  url: string
  alt: string
  fact: string
  upadateDate: string
}

const FactListCard = ({url, alt, fact, upadateDate}: factListCardProps) => {

  const dateFormat = (date: string) => {
    const event = new Date(date)
    return event.toDateString()
  }

  const date = dateFormat(upadateDate)

  return (
    <div className='w-full h-auto bg-white rounded-full flex items-center mb-4'>
      <img 
        className='h-[70px] w-[70px] m-2 rounded-full object-cover border-4 border-orange-800' 
        src={url} 
        alt={alt}
      />

      <div className='w-[60%] text-orange-800 text-xs md:text-base'>
        <p>{fact}</p>
        <p className='font-bold text-orange-900'>{date}</p>
      </div>
    </div>
  )
}

export { FactListCard }