import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import BgImage from './BgImage'

export default function Contactenos() {
  return (
    <div>
      <BgImage id={'section'} title={'Contacto'} image={'/assets/contacto.jpg'}/>

      <div id='start' className='bg-gray-50 px-9 sm:px-14 md:px-28 py-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[60vh]'>
        <div className='max-w-[1100px] mx-auto'>

          <p className='px-2 py-9 sm:py-10 text-gray-900 text-lg font-normal'>Nuestro equipo de profesionales está a su disposición
          Si tiene una consulta o desea recibir asesoría legal para su empresa, por favor complete el formulario
        </p>

        <h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto py-9'>Formulario de Contacto</h2>

        <form className='grid grid-cols-2 gap-2'>
          <div className='text-base col-span-2 flex flex-col p-2'>
            <label htmlFor="subject">
              <h2 className='font-medium'>Asunto:</h2>
            </label>
            <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' type="text" />
          </div>
          <div className='text-base flex flex-col p-2'>
            <label htmlFor="name">
              <h2 className='font-medium'>Nombre:</h2>
            </label>
            <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' type="text" />
          </div>
          <div className='text-base flex flex-col p-2'>
            <label htmlFor="surname">
              <h2 className='font-medium'>Apellidos:</h2>
            </label>
            <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' type="text" />
          </div>
          <div className='text-base flex flex-col p-2'>
            <label htmlFor="email">
              <h2 className='font-medium'>Correo:</h2>
            </label>
            <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' type="email" />
          </div>
          <div className='text-base flex flex-col p-2'>
            <label htmlFor="phone">
              <h2 className='font-medium'>Telefono o celular:</h2>
            </label>
            <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' type="number" />
          </div>
          <div className='text-base flex flex-col p-2 col-span-2'>
            <label htmlFor="company">
              <h2 className='font-medium'>Empresa:</h2>
            </label>
            <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' type="text" />
          </div>
          
          <div className='text-base flex flex-col p-2 col-span-2'>
            <label htmlFor="message">
              <h2 className='font-medium'>Mensaje:</h2>
            </label>
            <textarea className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg w-full h-full' name="message" id=""></textarea>
          </div>
          <div className='flex justify-center min-w-full py-20 col-span-2'>
            <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base' type='submit' >Enviar</button>
          </div>
          
        </form>

        <h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto py-9'>Oficinas</h2>
          
        <div className='p-10'>
          <img src="src/assets/ubication.png" alt="" />
        </div>

        <h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto py-9'>Otras maneras de contactarnos</h2>
        <div className='grid grid-cols-2'>
          <div className='flex gap-4 items-center'>
            <i class="fa-brands fa-whatsapp fa-2x"></i>
            <div>
              <p>WhatsApp oficial</p>
              <p>+51 999 999 999</p>
            </div>
          </div>

          <div className='flex gap-4 items-center'>
            <i class="fa-regular fa-envelope fa-2x"></i>
            <div>
              <p>Correo Corporativo</p>
              <p>tuabogadito69masna@gmail.com</p>
            </div>
          </div>
        </div>

        
        </div>
      </div>
    </div>

  )
}
