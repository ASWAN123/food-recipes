import React from 'react'

function Categories() {
    const categories = ['Fruits', 'Vegetables', 'Grains', 'Protein Foods' , 'Dairy' ,  'kitchen' , 'sandwitch' , 'coscos']
  return (
    <div className='mt-[135px] md:mt-[90px] overflow-x-scroll md:mx-auto md:overflow-visible flex gap-4 items-center p-2 '>
        {
            categories.map((cat , index) => {
                return (<button className='bg-[#f5f7f8] hover:opacity-60 whitespace-nowrap rounded-lg px-3 py-2 text-[16px]  font-normal text-center ' key={index}>{cat}</button>)
            })
        }
    </div>
  )
}

export default Categories