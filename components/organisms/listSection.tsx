import React from 'react'
import { Title } from '../atoms/Title'
import { FactListCard } from '../atoms/FactListCard'

interface Fact {
  icon_url: string
  id: string
  url: string
  value: string
  updated_at: string
}
interface ListSectionProps {
  facts: Fact[]
}

const ListSection = ({facts}: ListSectionProps) => {

  return (
    <div className="w-full bg-orange-800 rounded-xl flex flex-col items-center justify-center text-white">
        <Title>List of Facts</Title>

        <div className='w-full px-[2%] max-h-[400px] overflow-y-scroll scrollbar'>
          {
            facts?.map(({value, id, updated_at}) => (
              <FactListCard 
                url={'/images/chuck-norris-smile.png'} 
                fact={value} 
                alt={'picture of chuck norris smiling'} 
                key={id}
                upadateDate={updated_at}
              />
            ))
          }
        </div>
    </div>
  )
}

export { ListSection }