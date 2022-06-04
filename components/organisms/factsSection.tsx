import React from 'react'
import { FactsPhoto } from '../molecules/Facts'

interface FactsProps {
  onClick?: () => void
  children: string
}

const FactsSection = ({onClick, children}: FactsProps) => {
  return (
      <div className="w-full h-full flex items-center px-[5%]">
        <FactsPhoto 
          url="/images/chuck-norris.png" 
          alt="chuck norris with a red shirt looking at the photo"
          onClick={onClick}
        >
            {children}
        </FactsPhoto>
      </div>
  )
}

export { FactsSection }