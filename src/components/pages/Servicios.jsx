import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceSection from './ServiceSection'
import BgImage from '../BgImage'
import { NavLink } from 'react-router'
import { SERVICES } from '../../utils/services'

export default function Servicios( props ) {
  const { showService, serviceArr } = props;
  return (
    <div className='bg-gray-50'>
      <BgImage id={'section'} title={'Servicios'} image={'/servicios2.webp'}/>

      <div id='start' className='px-9 sm:px-14 md:px-28 pt-10 md:pt-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[40vh]'>
        <div className='max-w-[1100px] mx-auto'>
          
          <p className='px-2 py-9 sm:py-10 text-gray-900 text-base md:text-lg font-normal'>Ofrecemos asesoría y representación legal especializada en las áreas de Derecho civil y laboral, con un enfoque práctico y estratégico orientado a empresas y pymes. Entendemos los retos legales que enfrentan los negocios en el Perú y brindamos soluciones a medida que permiten tomar decisiones con seguridad jurídica. Nuestro compromiso es acompañarte en cada etapa del crecimiento de tu empresa, previniendo riesgos y resolviendo conflictos con eficacia y responsabilidad.
        </p>
        </div>
      </div>
      
      <div className='max-w-[1100px] mx-auto py-10 md:py-20 px-9'>
        <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2 pb-9'>Sectores Atendidos</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 place-items-center md:place-items-stretch'>
          {Object.entries(SERVICES).map(([id, service]) => (
            <ServiceCard
              key={id}
              id={id}
              func={showService}
              title={service.title}
              description={service.shortDescription}
              image={service.image}
            />
          ))}  
        </div>
      </div>

        {serviceArr ? 
        <ServiceSection serviceArr={serviceArr}/> : 
        <div className='flex justify-center min-w-full py-10 pb-20'>
           <NavLink to='/contactenos'>
              <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base mx-auto' >Contactanos</button>
            </NavLink>
          </div>
        }
          
        

    </div>
  )
}