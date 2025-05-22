import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
  return (
    <div className='flex fixed z-11 w-full py-6 sm:py-7 px-9 sm:px-12 bg-gray-900 text-white justify-between text-2xl sm:text-3xl'>
      <NavLink to="/" end><h1 className='font-semibold'>JESUS SIDERAL L.C.</h1></NavLink>
      <nav className='hidden sm:flex gap-5 text-xl text-white'>
        <NavLink to="/" className='hover:font-semibold hover:text-amber-400 duration-300' end>Inicio</NavLink>
        <NavLink to="/nosotros" end className='hover:font-semibold hover:text-amber-400 duration-300'>Nosotros</NavLink>
        <NavLink to="/servicios" end className='hover:font-semibold hover:text-amber-400 duration-300'>Servicios</NavLink>
        <NavLink to="/contactenos" end className='hover:font-semibold hover:text-amber-400 duration-300'>Contactenos</NavLink>
      </nav>
      
      <button className='sm:hidden'>BOTON MENU</button>
    </div>
  )
}
