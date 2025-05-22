import React from 'react'

export default function ServiceCard(props) {
    const { id, title, description, image, func } = props
  return (
    <div onClick={func} className='relative z-9 min-h-[400px] min-w-[280px] flex flex-col bg-white rounded-sm shadow-md hover:shadow-lg text-gray-400 hover:text-amber-500 duration-300'>
        <div className='z-8 min-h-[50%] w-full bg-black/30 absolute rounded-t-sm left-0 top-0'></div>
        <div className='min-h-[50%] w-full bg-cover bg-center text-center content-center absolute rounded-t-sm left-0 top-0' style={{ backgroundImage: `url(${image})` }}></div>
        <div className=' text-center absolute top-[50%] left-0'>
            <h3 className='pt-3 pb-2 text-lg font-semibold text-gray-900 text-gray-900 uppercase'>
                {title}
            </h3>
            <p className='py-2 px-3 text-justify text-gray-700 text-sm'> 
                {description} 
            </p>
        </div>
        <div id={id} className='z-9 w-full h-full bg-transparent'></div>
            
    </div>
  )
}
