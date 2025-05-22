import React from 'react'

export default function BgImage(props) {
    const { id, title, introText, image } = props
  return (
    <div>
        
        <div id={id} className={(introText ? 'min-h-[70vh] sm:min-h-[90vh] ' : 'min-h-[50vh] sm:min-h-[70vh] ')+'z-8 absolute top-0 w-screen bg-black/50 flex flex-col'}>
            <div className='z-10 absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center min-w-[75vw] py-5'>
                <h2 className='font-bold text-white uppercase text-4xl md:text-5xl lg:text-6xl mx-auto text-center  tracking-wider pb-4'>{title}</h2>
                {introText && (
                    <p className='text-lg font-light pt-1'>{introText}</p>
                )}
            </div>
            
        
        </div>
        <div style={{ backgroundImage: `url(${image})` }} className={(introText ? 'min-h-[70vh] sm:min-h-[90vh] ' : 'min-h-[50vh] sm:min-h-[70vh] ')+ 'w-screen  bg-cover bg-center text-center content-center'}></div>
    </div>
  )
}
//absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
/*<h2 className='font-bold text-gray-900 uppercase text-4xl md:text-5xl lg:text-6xl mx-auto py-2 text-center absolute text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tracking-wider'>{title}</h2>
{introText && (
    <p className='text-lg font-light'>{introText}</p>
)}*/