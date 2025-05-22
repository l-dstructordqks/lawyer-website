import React from 'react'

export default function Footer() {
  return (
    <div className='flex w-full py-6 sm:py-7 px-9 sm:px-12 bg-black text-white justify-between text-xs sm:text-sm min-h-[150px]'>
        <div className='flex mx-auto min-w-[30vw] gap-6 items-center'>
            <p>Av. La cultura 756, Edificio Polo 1, San Sebastian, 18000, Cusco - Peru<span>© Copyright 2024 | Términos y Condiciones</span></p>
            <p>+51 988997996 <span>tuabogadito69masna@gmail.com</span></p>

            
            <a href="https://www.linkedin.com/" target='_blank'>
              <i class="fa-brands fa-linkedin text-white fa-2x"></i>
            </a>
            <a href="https://www.facebook.com/" target='_blank'>
              <i class="fa-brands fa-facebook text-white fa-2x"></i>
            </a>
            <a href="https://www.instagram.com/" target='_blank'>
              <i class="fa-brands fa-instagram text-white fa-2x"></i>
            </a>
        </div>

    </div>
  )
}
