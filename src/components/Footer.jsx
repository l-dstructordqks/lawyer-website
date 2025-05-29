import React from 'react'

export default function Footer() {
  return (
    <div className='w-full h-full py-8 sm:py-15 px-2 md:px-4 bg-black/93 text-gray-400 text-xs md:text-sm'>
        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr] lg:grid-cols-[2fr_1fr_1fr] mx-auto h-full gap-3 md:gap-3'>
            <div className='flex gap-3 mx-auto md:row-start-1 md:col-start-2 lg:col-start-3 items-center'>
              <a href="https://www.linkedin.com/" target='_blank'>
                <i className='fa-brands fa-linkedin hover:text-white fa-2x'></i>
              </a>
              <a href="https://www.facebook.com/" target='_blank'>
                <i className='fa-brands fa-facebook hover:text-white fa-2x'></i>
              </a>
              <a href="https://www.instagram.com/" target='_blank'>
                <i className='fa-brands fa-instagram hover:text-white fa-2x'></i>
              </a>
            </div>
            <div className='flex flex-col mx-auto text-center'>
              <p className='hover:text-white'>Av. La cultura 756, Edificio Polo 1, San Sebastian, 18000, Cusco - Peru</p>
              <p className='hover:text-white'>© Copyright 2024 | Términos y Condiciones</p>
            </div>

            <div className='flex flex-col mx-auto text-center'>
              <a href="https://wa.me/51951272475?text=VOTAME%20TU%20GAAA" target='_blank'>
                  <p className='duration-300 hover:text-white'>+51 999 999 999</p>
              </a>
              <a href="mailto:s404990099@gmail.com?subject=HI%20LAWYER!&body=I%20want%20a%20free%20trial">
                  <p className='duration-300 hover:text-white'>tuabogadito69masna@gmail.com</p>
              </a>
            </div>            
        </div>

    </div>
  )
}
