import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocation, IoSearch } from 'react-icons/io5'
import AnimationText from './AnimationText'

export default function Header() {

    return (

        <>
            <div className='fixed w-full h-20 left-0 top-0 px-8 py-5 xl:px-20 xl:py-6 flex items-center justify-between  xl:gap-20'>
                <a href='/' className='font-thin text-2xl xl:text-3xl flex items-center gap-2'>
                    <AnimationText text={"My"} delay={1}/>
                    <AnimationText text={"Warung"} delay={3} className='font-bold text-blue-500'/>
                </a>

                {/* dekstop */}
                <div className='xl:flex hidden xl:gap-20'>
                    <div className='flex relative items-center w-[500px] h-10'>
                        <IoSearch className='absolute right-8 text-gray-500 text-xl font-bold' />
                        <input className='w-full h-full border-2 transition-all duration-100 hover:bg-gray-100 border-gray-300 outline-none rounded-full py-2 px-10 focus:border-[3px] focus:border-blue-500' type="text" placeholder='Lagi Mau Makan apa?'/>
                    </div>
                </div>

                {/* mobile */}
                <div className='flex items-center xl:hidden gap-5'>
                    <button className='w-10 h-5 flex flex-col justify-between'>
                        <span className='bg-blue-500 w-full h-[6px] rounded-full'></span>
                        <span className='bg-blue-500 w-full h-[6px] rounded-full'></span>
                    </button>
                </div>
            </div>
        </>
    )
}
