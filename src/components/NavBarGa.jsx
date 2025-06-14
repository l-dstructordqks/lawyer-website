import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'

export default function NavBarGa() {
    const [scrolled, setScrolled] = useState(false)
    const [toggleMenu, setToggleMenu] = useState(false)
    
    //const startContentHeight = #startContent.offsetHeight
    useEffect(() => {
        const handleScroll = () => {
            
            const height = window.scrollY
            
            if (height > 75){
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        // ESTUDIA AAAA
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
  return (
    <div id='nav' className={'flex fixed z-11 w-full py-2 sm:py-3 px-9 sm:px-12 justify-between' + (scrolled ? ' bg-gray-900 text-white' : ' bg-transparent') + ' text-white duration-500 items-center'}>
      <NavLink to="/" end>
      <div className='flex items-center justify-center align-center gap-1 h-[60px] sm:h-[70px] lg:h-[75px] lg:pl-2'>
        <img className='h-full w-auto object-contain max-h-[90%]' src="/logoimagen.png" alt="" />
        <img className='h-full w-auto object-contain' src="/logotexto.png" alt="logo" />
      </div>
      
      </NavLink>
      <nav className='hidden md:flex gap-5 lg:text-lg text-white'>
        <NavLink to="/" className='hover:font-bold hover:text-amber-400 duration-300' end><h3 className='lg:px-2 uppercase font-semibold'>Inicio</h3></NavLink>
        <NavLink to="/nosotros" end className='hover:font-bold hover:text-amber-400 duration-300'><h3 className='lg:px-2 uppercase font-semibold'>Nosotros</h3></NavLink>
        <NavLink to="/servicios" end className='hover:font-bold hover:text-amber-400 duration-300'><h3 className='lg:px-2 uppercase font-semibold'>Servicios</h3></NavLink>
        <NavLink to="/contactenos" end className='hover:font-bold hover:text-amber-400 duration-300'><h3 className='lg:px-2 uppercase font-semibold'>Contacto</h3></NavLink>
      </nav>
      
      <button onClick={() => setToggleMenu(true)} className='md:hidden'>
        <i class="fa-solid fa-bars"></i>
      </button>
      
      <div className={'fixed bg-gray-900/93 w-full h-full top-0 ' + (toggleMenu ? 'left-0 ' : 'left-[100%] ') + 'duration-500'}>
        <div className='text-right pt-7 pr-9'>
          <button onClick={() => setToggleMenu(false)} className='sm:hidden'>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
        <nav className='sm:flex gap-5 text-lg text-white pl-9 pt-13 font-bold'>
          <NavLink to="/" onClick={() => setToggleMenu(false)} className='hover:font-semibold hover:text-amber-400 duration-300' end><h3 className='p-2 uppercase'>Inicio</h3></NavLink>
          <NavLink to="/nosotros" onClick={() => setToggleMenu(false)} className='hover:font-semibold hover:text-amber-400 duration-300' end><h3 className='p-2 uppercase'>Nosotros</h3></NavLink>
          <NavLink to="/servicios" onClick={() => setToggleMenu(false)} className='hover:font-semibold hover:text-amber-400 duration-300' end><h3 className='p-2 uppercase'>Servicios</h3></NavLink>
          <NavLink to="/contactenos" onClick={() => setToggleMenu(false)} className='hover:font-semibold hover:text-amber-400 duration-300' end><h3 className='p-2 uppercase'>Contacto</h3></NavLink>
        </nav>
      </div>

      
    </div>
  )
}
