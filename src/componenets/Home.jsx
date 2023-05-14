import React from 'react'
import Navbar from './Navbar'
import Categories from './Categories'
import Recipe from './Recipe'


function Home() {
    return (
        <div className='flex flex-col gap-2 '>
            <Navbar />
            <Categories/>
            <div className='w-full md:w-[80%] md:mx-auto flex flex-col md:grid md:grid-cols-3 gap-6 items-center justify-center p-4'> 
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
                <Recipe />
            </div>
        </div>
  )
}

export default Home