import React from 'react'

interface BackgroundProps {
    children?: any
}

const Background = ({children}: BackgroundProps ) => {
  return (
    <div className="w-full h-screen bg-slate-300">{children}</div>
  )
}

export { Background }