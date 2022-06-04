import Image from 'next/image'
import React from 'react'

interface LogoProps {
    url: string
    alt?: string
}

const Logo = ({url, alt}: LogoProps) => {
  return (
        <img src={url} alt={alt} className="h-full"/>
  )
}

export { Logo }