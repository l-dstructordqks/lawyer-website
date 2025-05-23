import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceSection from './ServiceSection'
import BgImage from '../BgImage'
import { NavLink } from 'react-router'

export default function Servicios( props ) {
  const { showService, serviceArr } = props;
  return (
    <div className='bg-gray-50'>
      <BgImage id={'section'} title={'Servicios'} image={'/servicios2.webp'}/>

      <div id='start' className='px-9 sm:px-14 md:px-28 pt-10 md:pt-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[40vh]'>
        <div className='max-w-[1100px] mx-auto'>
          
          <p className='px-2 py-9 sm:py-10 text-gray-900 text-base md:text-lg font-normal'>Nuestro Estudio se destaca por ofrecer servicios de asesoría legal oportuna con excelencia profesional y absoluta dedicación a sus clientes. Para ello contamos con amplio conocimiento de la legislación nacional y abogados especializados en las diversas áreas del derecho, lo que nos permite analizar los casos y las transacciones desde distintos ángulos, a fin de plantear soluciones que tomen en cuenta todos los posibles riesgos y contingencias a través de un servicio integral, en el que se brinda soluciones legales a problemas específicos, evaluando el contexto en que estos se presentan.
        </p>
        </div>
      </div>
      
      <div className='max-w-[1100px] mx-auto py-10 md:py-20 px-9'>
        <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2 pb-9'>Sectores Atendidos</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 place-items-center md:place-items-stretch'>
            
          <ServiceCard id={'1'} func={showService} title={'registro de marca'} description={'especializados en cualquier tipo de solicitud medica de consumo no restrictivo de la planta canabis'} image={'/servicio01.jpg'}/>
          <ServiceCard id={'2'} func={showService} title={'derecho canabico'} description={'especializados en cualquier tipo de solicitud medica de consumo no restrictivo de la planta canabis'} image={'/servicio02.jpg'}/>
          <ServiceCard id={'3'} func={showService} title={'comercio exterior y aduanas'} description={'Nuestro equipo brinda asesoría en operaciones de compraventa internacional, importación y exportación de bienes'} image={'/servicio03.png'}/>
          <ServiceCard id={'4'} func={showService} title={'laboral y contractual'} description={'Nuestro especializados en cualquier tipo de solicitud consumo no restrictivo de exportación de bienes'} image={'/servicio04.webp'}/>
          <ServiceCard id={'5'} func={showService} title={'visados y extrangeria'} description={'Nuestro especializados en cualquier tipo de solicitud consumo no restrictivo de exportación de bienes'} image={'/servicio05.jpeg'}/>
          <ServiceCard id={'6'} func={showService} title={'licencias y permisos'} description={'Nuestro especializados en cualquier tipo de solicitud consumo no restrictivo de exportación de bienes'} image={'/servicio06.avif'}/>
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