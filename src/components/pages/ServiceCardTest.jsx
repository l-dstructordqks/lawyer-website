import React from 'react'
import { icons } from '../../utils/dictionary'

export default function ServiceCardTest(props) {
    const { title, description, icon  } = props

    const IconComponent = icons[icon]
  return (
    <div className='min-w-[280px] bg-white text-gray-400 shadow-md hover:shadow-xl rounded-lg p-2 flex flex-col transition-shadow duration-300 w-full h-full'>
        
        <div className=' text-center'>
            <div className='flex mx-auto justify-center items-center w-[90%] gap-2'>
                
                {IconComponent && <IconComponent className="h-8 min-w-8 text-blue-900 text-gray-800" />}
                <h3 className='pt-3 pb-2 text-base md:text-lg font-semibold text-neutral-900'>
                {title}
                </h3>
            </div>
            <p className='py-2 px-3 md:px-6 text-justify text-gray-700 text-sm md:text-base'> 
                {description} 
            </p>
        </div>
            
    </div>
  )
}