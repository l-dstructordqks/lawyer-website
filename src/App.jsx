import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'


//For make every route show from the beguining not from the scroll height
import ScrollToTop from './components/ScrollToTop.jsx'

//import Navbar from './components/Navbar'
import Home from './components/pages/Home.jsx'
import Nosotros from './components/pages/Nosotros.jsx'
import Servicios from './components/pages/Servicios.jsx'
import Contactenos from './components/pages/Contactenos.jsx'
import Footer from './components/Footer.jsx'
import NavBarGa from './components/NavBarGa.jsx'

import { generateServicesSection } from './utils/functions'

function App() {
  const [serviceArr, setServiceArr] = useState(null)
  const [scrollToService, setScrollToService] = useState(false)

  function showService(e) {
    let service = generateServicesSection(e.target.id)
    setServiceArr(service)

    //using useEffect to improve the behavior of the scroll
    setScrollToService(true)
  }
  //const [ navStyle, setNavStyle ] = useState( null )
  
  //FIXING SCROLL
  useEffect(() => {
    if(scrollToService && serviceArr) {
      const section = document.getElementById('service_section')
      //trying to fix the effect on movil size
      setTimeout(() => {
        if(section) {
          section.scrollIntoView({ behavior: 'smooth' })
        }
        // reset the flag TO STUDY
        setScrollToService(false)
      }, 100)
    }
  }, [serviceArr, scrollToService])

  return (
    <>
      <ScrollToTop />
      <NavBarGa />
      <main>
        <Routes>
          <Route index element={<Home />}/>
          <Route path="nosotros" element={<Nosotros />}/>
          <Route path="servicios" element={<Servicios showService={showService} serviceArr={serviceArr}/>}/>
          <Route path="contactenos" element={<Contactenos />}/>
        </Routes>
      </main>
      <Footer/>

    </>
  )
}

export default App
