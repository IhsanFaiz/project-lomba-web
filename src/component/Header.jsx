import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocation } from 'react-icons/io5'

export default function Header() {

    return (

        <>
            <div className='fixed w-full h-20 left-0 top-0 shadow-lg px-8 py-5 xl:px-10 xl-py-6 flex items-center justify-between'>
                <Link to={"/"}>
                    <h1 className='font-thin text-2xl xl:text-3xl'>My <span className='font-bold text-blue-500'>Warung</span></h1>
                </Link>
                <div className='flex items-center xl:hidden gap-5'>
                    <div>
                        <button className='flex items-center text-xl gap-1 bg-gray-500 px-2 py-px rounded-full text-white font-bold'><IoLocation className='text-gray-900'/> Location</button>
                    </div>
                    <button className='w-10 h-5 flex flex-col justify-between'>
                        <span className='bg-blue-500 w-full h-[6px] rounded-full'></span>
                        <span className='bg-blue-500 w-full h-[6px] rounded-full'></span>
                    </button>
                </div>
            </div>
        </>
    )
}
