import React from 'react'
import Header from '../component/Header.jsx'
import { IoSearch, IoFastFood } from 'react-icons/io5'
import { FaCoffee, FaIceCream } from 'react-icons/fa'
import { ReactTyped } from 'react-typed'
import Navbar from '../component/Navbar.jsx'

export default function WelcomePage() {
  return (
    <>
      <Header />

      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-2xl xl:text-3xl font-bold mb-5 '>Lagi <ReactTyped className='text-blue-500'
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
        <div className='flex relative items-center w-80 h-10 xl:w-[600px] '>
          <IoSearch className='absolute right-8 text-gray-500 text-xl font-bold' />
          <input className='w-full h-full border-2 transition-all duration-100 hover:bg-gray-100 border-gray-300 outline-none rounded-full py-2 px-10 focus:border-[3px] focus:border-blue-500' type="text" placeholder='Lagi Mau Makan apa?' />
        </div>
        <div className='flex items-center gap-16 xl:gap-20 mt-10'>
          <div className=' flex flex-col items-center'>
            <div className='w-14 h-14 bg-[#E3F2FD] flex-col xl:hover:bg-transparent transition-all border-2 border-blue-300 flex items-center justify-center rounded-xl cursor-pointer'>
              <IoFastFood className='text-3xl text-gray-800' />
            </div>
            <p>Makanan</p>
          </div>
          <div className=' flex flex-col items-center'>
            <div className='w-14 h-14 bg-[#E8F5E9] xl:hover:bg-transparent transition-all border-2 border-green-300 flex items-center justify-center rounded-xl cursor-pointer'>
              <FaCoffee className='text-3xl text-gray-800' />
            </div>
            <p>Minuman</p>
          </div>
          <div className=' flex flex-col items-center'>
            <div className='w-14 h-14 bg-[#FFF3E0] xl:hover:bg-transparent transition-all border-2 border-orange-200 flex items-center justify-center rounded-xl cursor-pointer'>
              <FaIceCream className='text-3xl text-gray-800' />
            </div>
            <p>Cemilan</p>
          </div>
        </div>
      </div>

      <Navbar />
    </>
  )
}
