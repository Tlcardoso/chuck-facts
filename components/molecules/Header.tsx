import React from 'react'
import { Logo } from '../atoms/Logo'

const Header = () => {
  return (
      <header className="h-1/5 bg-orange-800 shadow-md p-5 md:px-10 transform">
          <Logo url="/images/chuck-logo.png"/>
      </header>
  )
}

export { Header }