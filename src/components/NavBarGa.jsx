import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router'

export default function NavBarGa() {
    const [scrolled, setScrolled] = useState(false)
    
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
    <div id='nav' className={'flex fixed z-11 w-full py-6 sm:py-7 px-9 sm:px-12 justify-between text-2xl sm:text-3xl' + (scrolled ? ' bg-gray-900 text-white' : ' bg-transparent') + ' text-white duration-500'}>
      <NavLink to="/" end><h1 className='font-semibold'>JESUS SIDERAL L.C.</h1></NavLink>
      <nav className='hidden sm:flex gap-5 text-xl text-white'>
        <NavLink to="/" className='hover:font-semibold hover:text-amber-400 duration-300' end><h3>Inicio</h3></NavLink>
        <NavLink to="/nosotros" end className='hover:font-semibold hover:text-amber-400 duration-300'><h3>Nosotros</h3></NavLink>
        <NavLink to="/servicios" end className='hover:font-semibold hover:text-amber-400 duration-300'><h3>Servicios</h3></NavLink>
        <NavLink to="/contactenos" end className='hover:font-semibold hover:text-amber-400 duration-300'><h3>Contacto</h3></NavLink>
      </nav>
      
      <button className='sm:hidden'>BOTON MENU</button>
    </div>
  )
}
