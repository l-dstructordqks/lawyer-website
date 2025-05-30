import React from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { NavLink } from 'react-router'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import BgImage from '../BgImage'



export default function Home() {
  return (
    <div>
      <div className='relative'>
        <Swiper 
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect='fade'
        loop={false}
        /*navigation
        pagination={{ clickable: true}}*/
        autoplay={{ 
          delay: 7000,
          disableOnInteraction: false
        }}
        navigation= {{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination= {{
          clickable: true
        }} className='min-h-[70vh] text-white font-semibold'
        >
          <SwiperSlide>
            <BgImage id={'section'} title={'Asesoria legal Integral en Cusco'} introText={'Con un enfoque personalizado en cada uno de nuestros clientes, ofrecemos soluciones jurídicas completas, adaptadas a las necesidades específicas de cada caso.'} image={'/image1.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BgImage id={'section'} title={'Defensa Jurídica Transparente y Eficaz'} introText={'Nos caracterizamos por actuar con total transparencia, explicando cada paso del proceso legal de forma clara y comprensible. Nuestro compromiso es ofrecer una defensa sólida.'} image={'/slider02.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BgImage id={'section'} title={'Compromiso con tus Derechos'} introText={'Tu tranquilidad es nuestra prioridad. Trabajamos con firmeza y empatía para proteger tus intereses, defendiendo tus derechos con responsabilidad, respeto y una atención cercana en todo momento.'} image={'/slider01.jpg'}/>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination absolute inset-x-0 bottom-0"></div>
      
      </div>
      <div id='start' className='bg-gray-50 px-9 sm:px-14 md:px-28 py-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[60vh]'>
        <div className='max-w-[1100px] mx-auto'>
          <h2 className='font-bold text-gray-900 uppercase text-xl sm:text-3xl md:text-4xl mx-auto py-2 text-center'>Jusus lujan sideral carrion</h2>
          <hr className='text-gray-900 font-bold' />
          <p className='px-2 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>Nuestro Estudio se destaca por ofrecer servicios de asesoría legal oportuna con excelencia profesional y absoluta dedicación a sus clientes. Para ello contamos con amplio conocimiento de la legislación nacional, especializados en las diversas áreas del derecho, lo que nos permite analizar los casos y las transacciones desde distintos ángulos, a fin de plantear soluciones que tomen en cuenta todos los posibles riesgos y contingencias a través de un servicio integral, en el que se brinda soluciones legales a problemas específicos, evaluando el contexto en que estos se presentan.
      </p>
        </div>
      </div>

      <div className='z-8 min-h-[30vh] md:min-h-[40vh] absolute w-full bg-black/70 flex items-center justify-center'>
        <p className='text-justify px-15 text-white text-base md:text-xl font-normal sm:max-w-[70%]'>
        <i className='fa-solid fa-quote-left px-3 fa-sm'></i>
        El estudio destaca entre sus competidores por su amplia experiencia. Cuentan con un enfoque comercial, entienden y aplican conocimientos jurídicos a los negocios.
        <i className='fa-solid fa-quote-right px-3 fa-sm'></i>
      </p>
      </div>
      <div className='min-h-[30vh] md:min-h-[40vh] relative w-[100vw] bg-[url(/home.jpg)] bg-cover bg-center content-center'></div>

      <div className='px-9 sm:px-14 md:px-28 py-20 md:pt-30 text-justify mx-auto md:text-xl font-light'>
        <div className='max-w-[1100px] mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-8'>
          <div className='text-center'>
            <i className='fa-regular fa-handshake fa-2x md:fa-3x text-neutral-900'></i>
            <h2 className='text-neutral-900 uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto pb-7'>Mision</h2>
            <p className='p-2 text-justify text-sm md:text-base'>Brindar servicios legales de alta calidad, con un enfoque ético, personalizado y eficiente, orientado a la protección de los derechos e intereses de nuestros clientes. Nos comprometemos a ofrecer asesoría y representación jurídica clara, honesta y estratégica, adaptada a las particularidades de cada caso.</p>
          </div>
          <div className='text-center'>
            <i className='fa-regular fa-eye fa-2x md:fa-3x text-neutral-900'></i>
            <h2 className='text-neutral-900 uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto pb-7'>Vision</h2>
            <p className='p-2 text-justify text-sm md:text-base'>Ser un referente en el ámbito jurídico por nuestra excelencia profesional, compromiso humano y resultados efectivos. Aspiramos a consolidarnos como un despacho confiable e innovador, reconocido por su integridad, cercanía con el cliente y capacidad para ofrecer soluciones jurídicas integrales en un entorno legal en constante evolución.</p>
          </div>
          
        </div>

        <div className='flex justify-center min-w-full pt-15 pb-3'>
          <NavLink to='/servicios'>
            <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base'  >Conoce Nuestros Servicios</button>
          </NavLink>
        </div>
        
      </div>
    </div>
  )
}
