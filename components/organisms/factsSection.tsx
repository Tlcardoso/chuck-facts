import React from 'react'
import { Categories } from '../molecules/Categories'
import { FactsPhoto } from '../molecules/Facts'

interface FactsProps {
  newFacts?: () => void
  children?: string | any
  categories?: string[]
  factsByCategory: (category: string) => void

}

const FactsSection = ({newFacts, children, categories, factsByCategory}: FactsProps) => {
  return (
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-between my-6">
        <FactsPhoto 
          url="/images/chuck-norris.png" 
          alt="chuck norris with a red shirt looking at the photo"
          onClick={newFacts}
        >
            {children}
        </FactsPhoto>

        <Categories onClick={factsByCategory} categories={categories}/>
      </div>
  )
}

export { FactsSection }