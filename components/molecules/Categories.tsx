import React from 'react'
import { Button } from '../atoms/Button'
import { Title } from '../atoms/Title'

interface CategoriesProps {
    categories?: string[]
    onClick?: () => void
}

const Categories = ({categories, onClick}: CategoriesProps) => {
  return (
    <div className="h-[95%] w-[25%] flex flex-col items-center pb-5 rounded-lg bg-orange-800 text-white">
        <Title>Categories</Title>

        <div className=" w-full flex justify-around flex-wrap overflow-y-scroll scrollbar">
            {
                categories?.map((category: string) => (
                    <Button
                        key={category}
                        onClick={onClick}
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