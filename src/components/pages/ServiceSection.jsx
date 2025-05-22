import React from 'react'

export default function ServiceSection(props) {
   const { serviceArr } = props
   //console.log(serviceArr)
  return (
    <div id='service_section'>
        <div className='z-8 min-h-[40vh] absolute w-[100vw] bg-transparent'></div>
        <div className='min-h-[40vh] relative w-[100vw] bg-[url(assets/servicios1.jpg)] bg-cover bg-center text-center content-center'></div>

          <div className='bg-gray-50 px-9 sm:px-14 md:px-28 py-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[60vh]'>
            <div className='max-w-[1100px] mx-auto bg-white p-6 rounded-sm shadow-md hover:shadow-lg sticky mt-[-9rem] z-10'>
              <h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto pb-9'>{serviceArr.title}</h2>
              <p className='px-2 py-9 sm:py-10 text-gray-700 text-base'>{serviceArr.description}</p>

              {serviceArr.experience && (<h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto py-9'>Experience</h2>)}
              
              {serviceArr.experience && (<ul className='list-disc px-2 pl-4 py-9 sm:py-10 text-gray-700 text-base'>
                {serviceArr.experience.map((e, i) => {
                console.log(e);
                return <li key={i} className='pb-4'>{e}</li>
              })}
              </ul>)}

              {serviceArr.specific_services && (<h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto py-9'>Servicios en Especifico</h2>)}
              
              {serviceArr.specific_services && (<ul className='list-disc px-2 pl-4 py-9 sm:py-10 text-gray-700 text-base'>
                {serviceArr.specific_services.map((e, i) => {

                return <li key={i} className='pb-4'>{e}</li>
              })}
              </ul>)}
              
              
              
            </div>
            <div className='flex justify-center min-w-full py-6'>
            
            <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base mx-auto'>Contactanos</button>
          </div>
        </div>
    </div>
  )
}
