import React, { useRef } from 'react'
//import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import BgImage from '../BgImage'
import Map from '../Map'

import emailjs from '@emailjs/browser'




export default function Contactenos() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault

    emailjs
      .sendForm('contact_lawyer_service', '__ejs-test-mail-service__', form.current, { publicKey: 'Gqi1IlU4_D8xVNIU-',
      })
      .then(
        () => {
          console.log('SUCCESS!!!')
        },
        (error) => {
          console.log('FAILED :(', error.text)
        }
      )
  }
  return (
    <div>
      <BgImage id={'section'} title={'Contacto'} image={'/contacto.jpg'}/>

      <div id='start' className='px-9 sm:px-14 md:px-28 py-10 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[40vh]'>
        <div className='max-w-[1100px] mx-auto'>
          
          <p className='px-2 py-9 sm:py-10 text-gray-900 text-base md:text-lg font-normal'>Nuestro equipo de profesionales está a su disposición
          Si tiene una consulta o desea recibir asesoría legal para su empresa, por favor complete el formulario
          </p>
        </div>
        <div className='max-w-[1100px] mx-auto pt-10 md:pt-20'>  

          <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2'>Formulario de Contacto</h2>

          <form ref={form} onSubmit={sendEmail} className='grid grid-cols-2 gap-2 pt-5'>
            <div className='text-base col-span-2 flex flex-col p-2'>
              <label htmlFor="subject">
                <h2 className='font-medium'>Asunto:</h2>
              </label>
              <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' id='subject' type="text" />
            </div>
            <div className='text-base col-span-2 sm:col-span-1 flex flex-col p-2'>
              <label htmlFor="name">
                <h2 className='font-medium'>Nombre:</h2>
              </label>
              <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' id='name' type="text" />
            </div>
            <div className='text-base col-span-2 sm:col-span-1 flex flex-col p-2'>
              <label htmlFor="surname">
                <h2 className='font-medium'>Apellidos:</h2>
              </label>
              <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' id='surname' type="text" />
            </div>
            <div className='text-base col-span-2 sm:col-span-1 flex flex-col p-2'>
              <label htmlFor="email">
                <h2 className='font-medium'>Correo:</h2>
              </label>
              <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' id='email' type="email" />
            </div>
            <div className='text-base col-span-2 sm:col-span-1 flex flex-col p-2'>
              <label htmlFor="phone">
                <h2 className='font-medium'>Telefono o celular:</h2>
              </label>
              <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' id='phone' type="number" />
            </div>
            <div className='text-base flex flex-col p-2 col-span-2'>
              <label htmlFor="company">
                <h2 className='font-medium'>Empresa:</h2>
              </label>
              <input className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg' id='company' type="text" />
            </div>
            
            <div className='text-base flex flex-col p-2 col-span-2'>
              <label htmlFor="message">
                <h2 className='font-medium'>Mensaje:</h2>
              </label>
              <textarea className='px-2 py-1 labelShadow bg-wite border border-[1px] border-[color:#D0D5DD] rounded-sm h-[40px] text-lg w-full h-full' name="message" id='message'></textarea>
            </div>
            <div className='flex justify-center min-w-full pt-8 col-span-2'>
              <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base' type='submit' >Enviar</button>
            </div>
            
          </form>
        </div>
        <div className='max-w-[1100px] mx-auto pt-10 md:pt-20'>
          <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2'>Oficinas</h2>
          
          <Map/>
          
        </div>

        <div className='max-w-[1100px] mx-auto pt-10 md:pt-20'>
          <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2'>Otras maneras de contactarnos</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 px-2 py-9 sm:py-10'>
            <div className='flex gap-4 items-center'>
              <i className='fa-brands fa-whatsapp fa-2x'></i>
              <div className='px-2 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>
                <p className='font-normal'>WhatsApp Oficial</p>
                <a href="https://wa.me/51951272475?text=VOTAME%20TU%20GAAA" target='_blank'>
                  <p className='duration-300 hover:font-semibold'>+51 999 999 999</p>
                </a>
                
              </div>
            </div>

            <div className='flex gap-4 items-center'>
              <i className='fa-regular fa-envelope fa-2x'></i>
              <div className='px-2 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>
                <p className='font-normal'>Correo Corporativo</p>
                <a href="mailto:s404990099@gmail.com?subject=HI%20LAWYER!&body=I%20want%20a%20free%20trial">
                  <p className='duration-300 hover:font-semibold'>tuabogadito69masna@gmail.com</p>
                </a>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>

  )
}
