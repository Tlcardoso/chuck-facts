import React from 'react'

interface ButtonProps {
    children: string
    onClick: () => void
}

const Button = ({children, onClick}: ButtonProps) => {
  return (
    <button 
        onClick={onClick} 
        className="text-orange-800
            w-[95%]
            bg-white
            px-5 md:px-10
            py-2 md:py-4
            shadow-md
            rounded-xl
            font-bold my-3
            hover:shadow-xl
            active:scale-90
            transition
            duration-150"
    >
        {children}
    </button>
  )
}

export { Button }