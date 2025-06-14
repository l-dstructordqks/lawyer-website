import React from 'react'
import BgImage from '../BgImage'

export default function Nosotros() {
  return (
    <div className='bg-gray-50'>
      <BgImage id={'section'} title={'Nosotros'} image={'/nosotros1.jpg'}/>

      <div className='px-9 sm:px-14 md:px-28 py-10 text-justify mx-auto text-sm sm:text-base md:text-xl font-light min-h-[40vh]'>
        <div className='max-w-[1100px] mx-auto'>
          
          <p className='px-2 py-9 sm:py-10 text-gray-900 text-base md:text-lg font-normal'>En nuestro despacho, creemos que cada cliente merece una atención jurídica cercana, clara y eficaz. Con años de experiencia y una vocación firme por la justicia, nos dedicamos a ofrecer soluciones legales personalizadas, respaldadas por un profundo conocimiento del Derecho y un compromiso absoluto con la verdad y la ética profesional. Nuestra prioridad es escucharte, entender tu situación y acompañarte con responsabilidad en cada paso del camino legal.
      </p>
          
        </div>
        <div className='max-w-[1100px] mx-auto pt-10 md:pt-20'>
          <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2'>Nuestra Filosofia</h2>
          <p className='px-2 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>
          Creemos que el ejercicio del Derecho debe estar al servicio de las personas, con ética, empatía y excelencia profesional. Nuestra filosofía se basa en tres pilares fundamentales.<br/>
          Compromiso, para asumir cada caso como si fuera propio.<br/>
          Transparencia, para que nuestros clientes comprendan cada paso del proceso;
          y eficacia, para lograr soluciones reales y sostenibles.<br/>
          Trabajamos con vocación, cercanía y responsabilidad, convencidos de que la confianza se construye con hechos, no con promesas.
          </p>
        </div>
        <div className='max-w-[1100px] mx-auto py-10 md:py-20'>
          <h2 className='text-neutral-900 text-left uppercase text-lg sm:text-xl md:text-2xl font-semibold mx-auto py-2'>Experience</h2>
          <ul className='list-disc px-2 pl-4 py-9 sm:py-10 text-gray-700 text-sm md:text-base'>
            <li className='pb-4'>
            Hemos acompañado a negocios en la redacción y revisión de contratos civiles y comerciales, resolución de conflictos con proveedores, clientes o socios, y en procesos de cobranza judicial y extrajudicial. Cada caso es analizado con enfoque preventivo y técnico, para minimizar contingencias y proteger el patrimonio de la empresa.
            </li>
            <li className='pb-4'>
            En el ámbito laboral, asesoramos en la gestión adecuada de las relaciones laborales, desde la contratación hasta la desvinculación de personal, asegurando el cumplimiento de la legislación vigente. Representamos a nuestros clientes ante la Sunafil, el Ministerio de Trabajo y el Poder Judicial, ofreciendo defensa sólida en procesos administrativos y judiciales.
            </li>
            <li className='pb-4'>
            Nuestra práctica se basa en la cercanía con cada empresa, entendiendo su dinámica, sector y necesidades específicas. Trabajamos de la mano con emprendedores y líderes empresariales para ofrecer una asesoría legal confiable, ágil y orientada a resultados que fortalezcan la continuidad y sostenibilidad del negocio.
            </li>
          </ul>
          <p className='px-2 py-5 md:py-10 text-gray-700 text-sm md:text-base'>
          En cada caso que asumimos, reafirmamos nuestro compromiso con la justicia, la ética y el servicio de calidad. Más que brindar asesoría legal, buscamos construir relaciones de confianza duraderas con nuestros clientes, acompañándolos con responsabilidad en cada etapa de su camino jurídico. Estamos aquí para escucharte, orientarte y defender tus derechos con firmeza y convicción.
          </p>
        </div>
      </div>
          
    </div>
  )
}
