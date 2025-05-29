import React from 'react'

export default function BgImage(props) {
    const { id, title, introText, image } = props
  return (
    <div>
        
        <div id={id} className={(introText ? 'min-h-[70vh] sm:min-h-[90vh] ' : 'min-h-[50vh] sm:min-h-[70vh] ')+'z-8 absolute top-0 w-screen bg-black/50 flex flex-col text-white'}>
            <div className={'z-10 absolute ' + (introText ? 'top-3/5 md:top-2/3 ' : 'top-2/3 ') + 'left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center min-w-[75vw] py-5'}>
                <h2 className={'font-bold uppercase ' + (introText ? 'text-3xl md:text-5xl lg:text-6xl ' : 'text-4xl md:text-5xl lg:text-6xl ') + 'mx-auto text-center  tracking-wider pb-4'}>{title}</h2>
                {introText && (
                    <p className='text-base sm:text-lg md:text-xl  font-normal pt-1'>{introText}</p>
                )}
            </div>
            
        
        </div>
        <div style={{ backgroundImage: `url(${image})` }} className={(introText ? 'min-h-[70vh] sm:min-h-[90vh] ' : 'min-h-[50vh] sm:min-h-[70vh] ')+ 'w-screen  bg-cover bg-center text-center content-center'}></div>
    </div>
  )
}
