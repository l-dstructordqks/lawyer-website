import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceSection from './ServiceSection'
import BgImage from '../BgImage'
import { NavLink } from 'react-router'
import { SERVICES } from '../../utils/services'
import { serviciosLegales } from '../../utils/services1'
import ServiceCardTest from './ServiceCardTest'

export default function Servicios( props ) {
  const { handleAreas, selectedArea } = props;
  const serviciosFiltrados = serviciosLegales.find(area => area.area === selectedArea)
  return (
    <div className='bg-gray-50'>
      <BgImage id={'section'} title={'Areas de Practica'} image={'/servicios2.webp'}/>

      <div id='start' className='px-9 sm:px-14 md:px-28 pt-10 md:pt-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[40vh]'>
        <div className='max-w-[1100px] mx-auto'>
          
          <p className='px-2 py-9 sm:py-10 text-gray-900 text-base md:text-lg font-normal'>Ofrecemos asesoría y representación legal especializada en las áreas de Derecho civil y laboral, con un enfoque práctico y estratégico orientado a empresas y pymes. Entendemos los retos legales que enfrentan los negocios en el Perú y brindamos soluciones a medida que permiten tomar decisiones con seguridad jurídica. Nuestro compromiso es acompañarte en cada etapa del crecimiento de tu empresa, previniendo riesgos y resolviendo conflictos con eficacia y responsabilidad.
        </p>
        </div>
      
      
      <div className='max-w-[1100px] mx-auto py-10 md:py-20 sm:px-9 border-none'>
        <div className='pb-5 flex flex-col sm:flex-row'>
          {serviciosLegales.map((area, index) => (
            <button
            key={index}
            onClick={() => handleAreas(area.area)}
            className="relative py-2 pr-4 text-base font-medium text-gray-600 transition-all text-left text-lg sm:text-xl md:text-2xl font-semibold mx-auto"
          >
            <h3
              className={`pb-1 border-b-2 transition-all duration-300 ${
                area.area === selectedArea
                  ? 'border-gray-900 text-neutral-900'
                  : 'border-transparent hover:text-gray-800'
              }`}
            >
              {area.area}
            </h3>
          </button>
            
          ))}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center md:place-items-stretch'>
          
          {serviciosFiltrados.servicios.map((servicio, index) => (
                <ServiceCardTest
                  key={index}
                  title={servicio.titulo}
                  icon={servicio.icon}
                  description={servicio.descripcion}
                />
              ))}
        </div>        
      </div>

      <div className='max-w-[1100px] mx-auto pt-10 md:pt-20'>
          <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2'>Confian en nosotros</h2>
          <p className='px-2 pt-8 pb-2 sm:py-10 text-gray-700 text-sm md:text-base'>
          Brindamos soluciones legales estratégicas a instituciones clave de Cusco y el Perú, incluyendo:
          </p>

          <div className='grid grid-cols-3 md:grid-cols-4 gap-2'>
              <div className='bg-green-800 p-1 max-h-[90px]'>
                <img src="/logomonteverde.png" alt="" />
              </div>
              <img src="/logogrc.png" className='max-h-[120px]' alt="" />
              <img src="/logogarabato.png" className='max-h-[120px]' alt="" />
              <img src="/logoemufec.png" className='max-h-[120px]' alt="" />
              <img src="/logocopesco.png" className='max-h-[120px]' alt="" />
              <img src="/logocafe.png" className='max-h-[120px]' alt="" />
              <img src="/logobtc.png" className='max-h-[120px]' alt="" />
              
          </div>
          <ul className='list-disc px-2 pl-4 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>
            <li className='pb-4'>
              EMUFEC, COSITUC y Sub CAFAE (gestión de contratos y defensa administrativa)
            </li>
            <li className='pb-4'>
              Municipalidades (procedimientos sancionadores y asesoría permanente)
            </li>
            <li className='pb-4'>
              GERCETUR y COPESCO (protección patrimonial y litigio turístico)
            </li>
            <li className='pb-4'>
            nstituciones Educativas (Monteverde, Cadí Garabato: defensa laboral y civil)
            </li>
          </ul>
          <p className='px-2 py-1 sm:py-10 text-gray-700 text-sm md:text-base'>
          Nuestra experiencia con entidades públicas y privadas garantiza resultados
          </p>
        </div>
      

      <div className='flex justify-center min-w-full py-10 pb-20'>
        <NavLink to='/contactenos'>
          <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base mx-auto' >Contactanos</button>
        </NavLink>
      </div>
        
      </div>
    </div>
  )
}

/*
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
        }*/