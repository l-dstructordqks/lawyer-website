import React from 'react'
import ServiceCard from './ServiceCard'
import ServiceSection from './ServiceSection'
import BgImage from './BgImage'

export default function Servicios( props ) {
  const { showService, serviceArr } = props;
  return (
    <div className='bg-gray-50'>
      <BgImage id={'section'} title={'Servicios'} image={'src/assets/servicios2.webp'}/>

      <div id='start' className='bg-gray-50 px-9 sm:px-14 md:px-28 py-10 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[50vh]'>
        <div className='max-w-[1100px] mx-auto'>
          
          <p className='px-2 py-9 sm:py-10 text-gray-900 text-lg font-normal'>Nuestro Estudio se destaca por ofrecer servicios de asesoría legal oportuna con excelencia profesional y absoluta dedicación a sus clientes. Para ello contamos con amplio conocimiento de la legislación nacional y abogados especializados en las diversas áreas del derecho, lo que nos permite analizar los casos y las transacciones desde distintos ángulos, a fin de plantear soluciones que tomen en cuenta todos los posibles riesgos y contingencias a través de un servicio integral, en el que se brinda soluciones legales a problemas específicos, evaluando el contexto en que estos se presentan.
        </p>
        </div>
      </div>
      
      <div className='max-w-[1100px] mx-auto py-20 px-10 pb-30'>
        <h2 className='text-nuetral-900 text-left uppercase sm:text-xl md:text-2xl font-semibold mx-auto pb-10'>Sectores Atendidos</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 place-items-center sm:place-items-stretch'>
            
          <ServiceCard id={'1'} func={showService} title={'registro de marca'} description={'especializados en cualquier tipo de solicitud medica de consumo no restrictivo de la planta canabis'} image={'/src/assets/servicio01.jpg'}/>
          <ServiceCard id={'2'} func={showService} title={'derecho canabico'} description={'especializados en cualquier tipo de solicitud medica de consumo no restrictivo de la planta canabis'} image={'/src/assets/servicio02.jpg'}/>
          <ServiceCard id={'3'} func={showService} title={'comercio exterior y aduanas'} description={'Nuestro equipo brinda asesoría en operaciones de compraventa internacional, importación y exportación de bienes'} image={'/src/assets/servicio03.png'}/>
          <ServiceCard id={'4'} func={showService} title={'laboral y contractual'} description={'Nuestro especializados en cualquier tipo de solicitud consumo no restrictivo de exportación de bienes'} image={'/src/assets/servicio04.webp'}/>
          <ServiceCard id={'5'} func={showService} title={'visados y extrangeria'} description={'Nuestro especializados en cualquier tipo de solicitud consumo no restrictivo de exportación de bienes'} image={'/src/assets/servicio05.jpeg'}/>
          <ServiceCard id={'6'} func={showService} title={'licencias y permisos'} description={'Nuestro especializados en cualquier tipo de solicitud consumo no restrictivo de exportación de bienes'} image={'/src/assets/servicio06.avif'}/>
        </div>
      </div>

        {serviceArr ? 
        <ServiceSection serviceArr={serviceArr}/> : 
        <div className='flex justify-center min-w-full py-10 pb-20'>
            
            <button className='border bg-gray-800 text-white hover:bg-gray-700 hover:text-white p-4 border-[1px] border-solid rounded-sm whiteShadow duration-200 text-base mx-auto'>Contactanos</button>
          </div>
        }
          
        

    </div>
  )
}

/*<
GENERATOR.JSX
import { generateWorkout } from './utils/functions'
FUNCTION GENERATOR (PROPS) {
  <Button func={updateWorkout} text={'Formulate'}></Button> 
} 

APP.JSX
import { generateWorkout } from './utils/functions'

FUNCTION APP() {
  const [workout, setWorkout] = useState(null)
  const [poison, setPoison] = useState('individual')
  const [muscles, setMuscles] = useState([])
  const [goal, setGoal] = useState('strength_power')

  function updateWorkout() {
      if (muscles.length < 1) {
        return
      }
      let newWorkout = generateWorkout({poison, muscles, goal})
      //console.log(newWorkout)
      setWorkout(newWorkout)
      window.location.href = '#workout'
    }
    RETURN (
      <Generator 
          poison={poison}
          setPoison={setPoison}
          muscles={muscles}
          setMuscles={setMuscles}
          goal={goal}
          setGoal={setGoal}
          updateWorkout={updateWorkout}
      />
)}
  
*/