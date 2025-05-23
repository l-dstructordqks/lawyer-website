import React from 'react'

export default function ServiceCard(props) {
    const { id, title, description, image, func } = props
  return (
    <div className='relative min-h-[400px] min-w-[280px] flex flex-col bg-white rounded-sm shadow-md hover:shadow-xl text-gray-400 hover:text-amber-500 duration-300'>
        <div className='z-8 min-h-[50%] w-full bg-black/30 absolute rounded-t-sm left-0 top-0'></div>
        <div className='min-h-[50%] w-full bg-cover bg-center text-center content-center absolute rounded-t-sm left-0 top-0' style={{ backgroundImage: `url(${image})` }}></div>
        <div className=' text-center absolute top-[50%] left-0'>
            <h3 className='pt-3 pb-2 text-base md:text-lg font-semibold text-gray-900 text-gray-900 uppercase'>
                {title}
            </h3>
            <p className='py-2 px-3 text-justify text-gray-700 text-xs md:text-sm'> 
                {description} 
            </p>
        </div>
        <div id={id} onClick={func} className='z-9 absolute w-full h-full bg-transparent'></div>
            
    </div>
  )
}
