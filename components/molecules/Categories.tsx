import React from 'react'
import { Button } from '../atoms/Button'
import { Title } from '../atoms/Title'

interface CategoriesProps {
    categories?: string[]
    onClick: (category: string) => void
}

const Categories = ({categories, onClick}: CategoriesProps) => {
  return (
    <div className="h-[475px] w-[100%] mt-[10px] lg:w-[25%] lg:mt-0 flex flex-col items-center pb-5 rounded-lg bg-orange-800 text-white">
        <Title>Categories</Title>

        <div className="w-full flex justify-around flex-wrap overflow-y-scroll scrollbar cy_categories">
            {
                categories?.map((category: string) => (
                    <Button
                        key={category}
                        onClick={() => onClick(category)}
                    >
                        {category}
                    </Button>
                ))
            }
        </div>
    </div>
  )
}

export { Categories }