import React from 'react'
import { IoHome } from 'react-icons/io5'
import { FaClipboardList, FaPercentage } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

export default function Navbar() {

    return (
        <>
            {/* mobile */}
            <div className='fixed xl:hidden w-full h-20 bottom-0 left-0 bg-white backdrop-blur-lg shadow-lg flex items-center'>
                <div className='px-10 flex items-center w-full justify-center gap-20'>
                    <NavLink to={"/"} className={({ isActive }) => `flex flex-col items-center cursor-pointer ${isActive ? "text-blue-500" : "text-gray-700"}` }>
                        <IoHome className='text-3xl transition-all duration-200' />
                        <p>Home</p>
                    </NavLink>
                    <NavLink to={"/order"}  className={({ isActive }) => `flex flex-col items-center cursor-pointer ${isActive ? "text-blue-500" : "text-gray-700"}` }>
                        <FaClipboardList className='text-3xl transition-all duration-200' />
                        <p className=''>My Order</p>
                    </NavLink>
                    <NavLink to={"/discount"} className={({ isActive }) => `flex flex-col items-center cursor-pointer ${isActive ? "text-blue-500" : "text-gray-700"}` }>
                        <FaPercentage className='text-3xl text-gray-700 transition-all duration-200' />
                        <p>Discount</p>
                    </NavLink>
                </div>

            </div>
        </>
    )
}
