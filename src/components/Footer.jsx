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
            <p className='mx-auto text-center hover:text-white'>Av. La cultura 756, Edificio Polo 1, San Sebastian, 18000, Cusco - Peru<br/>© Copyright 2024 | Términos y Condiciones</p>
            
            <p className='mx-auto text-center hover:text-white'>+51 988997996 <br/>tuabogadito69masna@gmail.com</p>

            
        </div>

    </div>
  )
}
