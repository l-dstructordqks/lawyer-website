import React from 'react'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import BgImage from './BgImage'



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
        }} className='min-h-[90vh] text-white font-semibold text-4xl'
        >
          <SwiperSlide>
            <BgImage id={'section'} title={'Derecho Canabico'} introText={'Fijo que sales libre hoy, no escuches a los ternas Aliquam sodales imperdiet dolor, eu facilisis risus. Quisque at dignissim tellus. Morbi pretium felis scelerisque cursus fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla eu diam est.'} image={'/assets/image1.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BgImage id={'section'} title={'Asesoria  Legal  en  Cusco'} introText={'Cienporciento de resultados y cero porciento de etica Aliquam sodales imperdiet dolor, eu facilisis risus. Quisque at dignissim tellus. Morbi pretium felis scelerisque cursus fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada.'} image={'/assets/image1.jpg'}/>
          </SwiperSlide>
          <SwiperSlide>
            <BgImage id={'section'} title={'Derecho Animal'} introText={'Cienporciento de resultados y cero porciento de etica Aliquam sodales imperdiet dolor, eu facilisis risus. Quisque at dignissim tellus. Morbi pretium felis scelerisque cursus fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Interdum et malesuada.'} image={'/assets/image1.jpg'}/>
          </SwiperSlide>
        </Swiper>

        <div className="swiper-pagination absolute inset-x-0 bottom-0"></div>
      
      </div>
      <div id='start' className='bg-gray-50 px-9 sm:px-14 md:px-28 py-20 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[60vh]'>
        <div className='max-w-[1100px] mx-auto'>
          <h2 className='font-bold text-gray-900 uppercase text-xl sm:text-3xl md:text-4xl mx-auto py-2 text-center'>Jusus lujan sideral carrion</h2>
          <hr className='text-gray-900 font-bold' />
          <p className='px-2 py-9 sm:py-10 text-gray-700 text-base'>Nuestro Estudio se destaca por ofrecer servicios de asesoría legal oportuna con excelencia profesional y absoluta dedicación a sus clientes. Para ello contamos con amplio conocimiento de la legislación nacional y abogados especializados en las diversas áreas del derecho, lo que nos permite analizar los casos y las transacciones desde distintos ángulos, a fin de plantear soluciones que tomen en cuenta todos los posibles riesgos y contingencias a través de un servicio integral, en el que se brinda soluciones legales a problemas específicos, evaluando el contexto en que estos se presentan.
      </p>
        </div>
      </div>

      <div className='z-8 min-h-[40vh] absolute w-full bg-black/70 flex items-center justify-center'>
        <p className='text-justify px-15 text-white text-xl font-normal sm:max-w-[70%]'>
        <i class="fa-solid fa-quote-left px-3 fa-sm"></i>
        El estudio destaca entre sus competidores por su amplia experiencia. Cuentan con un enfoque comercial, entienden y aplican conocimientos jurídicos a los negocios.
        <i class="fa-solid fa-quote-right px-3 fa-sm"></i>
      </p>
      </div>
      <div className='min-h-[40vh] relative w-[100vw] bg-[url(assets/home.jpg)] bg-cover bg-center content-center'></div>

      <div className='bg-gray-50 text-sm px-9 sm:px-14 md:px-28 py-20 pt-30 text-justify mx-auto md:text-xl font-light'>
        <div className='max-w-[1100px] mx-auto flex flex-col sm:grid sm:grid-cols-2 gap-7'>
          <div className='text-center'>
            <i class="fa-regular fa-handshake fa-3x text-nuetral-900"></i>
            <h2 className='text-nuetral-900 uppercase sm:text-xl md:text-2xl font-semibold mx-auto pb-9'>Mision</h2>
            <p className='p-2 text-base text-justify'>Nam sollicitudin purus ac eros placerat auctor. Vivamus venenatis viverra dui, id faucibus ligula consectetur eu. Fusce lacinia venenatis sapien. Phasellus euismod erat eu pellentesque scelerisque. Praesent porttitor dapibus arcu et pretium. Maecenas at diam nulla.</p>
          </div>
          <div className='text-center'>
            <i class="fa-regular fa-eye fa-3x text-nuetral-900"></i>
            <h2 className='text-nuetral-900 text-center uppercase sm:text-xl md:text-2xl font-semibold mx-auto pb-9'>Vision</h2>
            <p className='p-2 text-base text-justify'>Nam sollicitudin purus ac eros placerat auctor. Vivamus venenatis viverra dui, id faucibus ligula consectetur eu. Fusce lacinia venenatis sapien. Phasellus euismod erat eu pellentesque scelerisque. Praesent porttitor dapibus arcu et pretium. Maecenas at diam nulla.</p>
          </div>
          
        </div>

        <div className='flex justify-center min-w-full py-20'>
            <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base'>Conoce Nuestros Servicios</button>
        </div>
        
      </div>
    </div>
  )
}
