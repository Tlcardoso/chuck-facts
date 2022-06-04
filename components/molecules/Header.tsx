import React from 'react'
import { Logo } from '../atoms/Logo'

const Header = () => {
  return (
      <header className="h-1/6 bg-neutral-100 shadow-lg p-5 md:px-10 transform">
        <Logo 
            url="/images/chuck-logo.png" 
            alt="chuck facts logo with chucknorris silhouette in the center"
        />
      </header>
  )
}

export { Header }