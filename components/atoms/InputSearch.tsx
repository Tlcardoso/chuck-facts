import React, { useState } from 'react'
import { BiSearchAlt } from 'react-icons/bi'

interface InputSearchProps {
    searchClick: (value: string) => void
}

const InputSearch = ({searchClick}: InputSearchProps) => {
    const [value, setValue] = useState('')

  return (
    <div className='w-full text-orange-900 flex items-center justify-center'>
        <div className='relative w-[95%] md:w-[50%]'>            
            <input 
                onChange={(e) => setValue(e.target.value)} 
                className=' w-full pl-8 pr-20 rounded-xl'
                placeholder='length must be between 3 and 120 characters'
            />

            <BiSearchAlt className='absolute top-1 left-1'/>

            <button 
                onClick={() => searchClick(value)}
                className='bg-orange-900 px-2 text-white rounded-full absolute right-0 active:bg-white active:text-orange-900'
            >
                Search
            </button>
        </div>
    </div>
  )
}

export default InputSearch