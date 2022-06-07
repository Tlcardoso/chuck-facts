import React from 'react'
import { Title } from '../atoms/Title'
import { FactListCard } from '../atoms/FactListCard'
import InputSearch from '../atoms/InputSearch'
import { Fact } from '../../types/fact'

interface ListSectionProps {
  facts: Fact[]
  searchClick: (value: string) => void
}

const ListSection = ({facts, searchClick}: ListSectionProps) => {

  return (
    <div className="w-full bg-orange-800 rounded-xl flex flex-col items-center justify-center text-white cy_search">
        <Title>List of Facts</Title>

        <InputSearch searchClick={searchClick}/>

        <div className='w-full px-[2%] max-h-[400px] mt-2 overflow-y-scroll scrollbar'>
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