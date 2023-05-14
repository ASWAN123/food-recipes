import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineNotification } from 'react-icons/ai';


function Navbar() {
    let [showinput ,  setShowinput] = useState(false)

    return (
        <div className='fixed w-full top-0 z-10 flex justify-center  md:justify-between p-4  shadow-md bg-gradient-to-b from-gray-100 to-gray-50 items-center flex-wrap md:flex-nowrap gap-4 '>
            <div className='logo mr-auto md:mr-0  text-green-600 font-bold text-[25px] px-2 w-fit cursor-pointer'>Food recipes</div>
            <div className='flex items-center relative md:w-fit mx-auto  order-last w-full'>
                <BsSearch size={25} color='#999b9c' className='absolute right-6 hover:cursor-pointer md:hidden' />
                <input className='outline-none  h-10 rounded-lg px-4 w-full md:w-[600px] bg-[#f5f7f8]' placeholder = 'Search' type="text" name="" id="" />
                <BsSearch size={25} color='#999b9c' className='absolute right-6 cursor-pointer ' />
            </div>
            <div className='gap-6  md:order-last hidden md:flex '>
                <ul className='flex gap-8 items-center'>
                    <li className='hover:cursor-pointer hover:text-orange-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-orange-400'>Featured recipes</li>
                    <li className='hover:cursor-pointer hover:text-orange-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-orange-400'>Contact us</li>
                    <li className='hover:cursor-pointer hover:text-orange-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-orange-400'>About us</li>
                    <li className='hover:cursor-pointer hover:text-orange-300 border-b-2 border-b-transparent hover:border-b-2 hover:border-b-orange-400 whitespace-nowrap flex gap-1 items-center font-bold text-gray-600'><span>Subscribe</span><AiOutlineNotification size={18} className='hover:text-orange-300' /></li>
                    
                </ul>
            </div>
            <div></div>
        </div>
    )
}

export default Navbar;