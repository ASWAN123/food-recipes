import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai'

function Recipe() {


    return (
        <div className='flex flex-col gap-2 relative shadow-md rounded-lg bg-gray-50 ' >
            <img className='w-full h-[300px]  rounded-t-lg hover:cursor-pointer  ' src="https://img.taste.com.au/s2Pk5nLv/w643-h428-cfill-q90/taste/2010/01/our-favourite-lasagne-118950-2.jpg" alt="" />
            <div className=' flex flex-col gap-2 item-details md:px-2 md:pb-3 md:pt-2'>
                <p className='absolute mb-3 md:mb-0 bottom-8 left-4 text-white text-[20px] md:static md:text-black shadow-inner md:shadow-none '>Baby Spinach Omelet</p>
                <div className='flex gap-2 absolute bottom-4 left-4 md:static md:text-black '>
                    <AiFillStar className=' text-orange-400'/>
                    <AiFillStar className=' text-orange-400'/>
                    <AiFillStar className=' text-orange-400'/>
                    <AiFillStar className=' text-orange-400'/>
                    <AiFillStar className=' text-orange-400'/>
                </div>
                <AiFillHeart  size={30} className='absolute  bottom-4  right-4  text-red-500 '/>
            </div>
        </div>
    )
}

export default Recipe