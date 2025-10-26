import React from 'react'
import Header from '../component/Header.jsx'
import { IoSearch } from 'react-icons/io5'
import { ReactTyped } from 'react-typed'

export default function WelcomePage() {
  return (
    <>
      <Header />

      {/* mobile */}
      <div className='flex flex-col items-center justify-center xl:hidden'>
        <h1 className='text-3xl font-bold mb-5 '>Lagi <ReactTyped className='text-blue-500'
          strings={[
            "Lapar?",
            "Haus?",
            "Pengen Ngemil?",
            "Mau Makan Enak?",
          ]}
          typeSpeed={90}
          backSpeed={90}
          loop
        /></h1>
        <div className='flex relative items-center w-80 h-10 '>
          <IoSearch className='absolute right-8 text-gray-500 text-xl font-bold' />
          <input className='w-full h-full border-2 transition-all duration-100 hover:bg-gray-100 border-gray-300 outline-none rounded-full py-2 px-10 focus:border-[3px] focus:border-blue-500' type="text" placeholder='Lagi Mau Makan apa?' />
        </div>
      </div>
    </>
  )
}
