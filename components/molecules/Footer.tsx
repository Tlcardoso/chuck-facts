import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { Logo } from '../atoms/Logo'

const Footer = () => {
  return (
    <footer className='w-screen  flex flex-col justify-evenly items-center bg-orange-900 text-white'>
      <div className='h-[100px] mt-4'>
        <Logo
          url="/images/chuck-logo-white.png" 
          alt="chuck facts logo with chucknorris silhouette in the center"
        />
      </div>

      <div className='w-[80%] flex flex-col mt-4 border-t-2 flex justify-center pt-4'>

        <div className='text-center'>
          <p className='font-bold'>Developed by</p>
          <p>Thiago Cardoso</p>
        </div>

        <div className='flex justify-center my-2 '>
          <a href="https://github.com/Tlcardoso" className='cy_footer'>
            <AiFillGithub className='w-[30px] h-[30px] mr-2'/>
          </a>

          <a href="https://www.linkedin.com/in/thiago-cardoso-a97472222/">
            <AiFillLinkedin className='w-[30px] h-[30px]'/>
          </a>
        </div>

      </div>

    </footer>
  )
}

export { Footer }