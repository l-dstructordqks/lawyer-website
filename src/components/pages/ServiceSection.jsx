import React from 'react'
import { NavLink } from 'react-router'

export default function ServiceSection(props) {
   const { serviceArr } = props
   //console.log(serviceArr)
  return (
    <div id='service_section' className='py-15 md:py-20'>
        <div className='z-8 min-h-[40vh] absolute w-[100vw] bg-transparent'></div>
        <div style={{ backgroundImage: `url(${serviceArr.image})` }} className='min-h-[45vh] relative w-[100vw] bg-cover bg-center text-center content-center'></div>

          <div className='bg-gray-50  py-10 md:py-20 text-justify mx-auto font-light min-h-[60vh]'>
            <div className='mx-auto bg-white p-6 rounded-sm shadow-md hover:shadow-lg sticky mt-[-25vh] z-10 max-w-[90vw] md:max-w-[75vw]'>
              <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto p-2 pt-5'>{serviceArr.title}</h2>
              <p className='px-2 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>{serviceArr.description}</p>

              {serviceArr.experience && (<h2 className='text-neutral-900 text-left uppercase text-md sm:text-lg md:text-xl font-semibold mx-auto p-2'>Experiencia</h2>)}
              
              {serviceArr.experience && (<ul className='list-disc px-2 pl-4 py-5 sm:py-8 text-gray-700 text-sm md:text-base'>
                {serviceArr.experience.map((e, i) => {
                return <li key={i} className='pb-2'>{e}</li>
              })}
              </ul>)}

              {serviceArr.specific_services && (<h2 className='text-neutral-900 text-left uppercase text-md sm:text-lg md:text-xl font-semibold mx-auto p-2'>Servicios en Especifico</h2>)}
              
              {serviceArr.specific_services && (<ul className='list-disc px-2 pl-4 py-5 sm:py-8 text-gray-700 text-sm md:text-base'>
                {serviceArr.specific_services.map((e, i) => {

                return <li key={i} className='pb-4'>{e}</li>
              })}
              </ul>)}
              
              
              
            </div>
            <div className='flex justify-center min-w-full py-6'>

            <NavLink to='/contactenos'>
              <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base mx-auto' >Contactanos</button>
            </NavLink>
          </div>
        </div>
    </div>
  )
}
