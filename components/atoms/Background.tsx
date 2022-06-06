import React from 'react'

interface BackgroundProps {
    children?: any
}

const Background = ({children}: BackgroundProps ) => {
  return (
    <div className="w-screen h-screen bg-slate-200">{children}</div>
  )
}

export { Background }