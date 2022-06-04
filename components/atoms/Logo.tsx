import Image from 'next/image'
import React from 'react'

interface LogoProps {
    url: string
    alt?: string
}

const Logo = ({url, alt}: LogoProps) => {
  return (
    <Image
        src={url}
        layout="fill"
        objectFit="cover"
        className=""
        alt={alt}
        priority
    />
  )
}

export { Logo }