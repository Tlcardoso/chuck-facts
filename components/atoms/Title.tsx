import React from 'react'

interface TitleProps {
    children: string
}

const Title = ({children}: TitleProps) => {
  return (
    <h2 className="text-5xl font-semibold pb-3">{children}</h2>
  )
}

export { Title }