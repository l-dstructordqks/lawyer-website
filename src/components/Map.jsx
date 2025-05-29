import { useEffect } from 'react'
import { Loader } from "@googlemaps/js-api-loader"

export default function Map() {
    useEffect(() => {
        const loader = new Loader({
            apiKey: 'AIzaSyA68pMrDXzyhFSHjdCXA1MPDCFWsY8HdCA',
            version: 'weekly',
            libraries: ['maps', 'marker'],
        })
        loader.load().then(async () => {
            const position = { lat: -13.531507, lng: -71.914731 }

            const { Map } = await google.maps.importLibrary('maps')
            const { AdvancedMarkerElement } = await google.maps.importLibrary('marker')

            const map = new Map(document.getElementById('map'), {
                zoom: 15.5,
                center: position,
                mapId: 'DEMO_MAP_ID',
                zoomControl: true,
            })

            new AdvancedMarkerElement({
                    map: map,
                    position: position,
                    title: 'Uluru',
            })
        })
    }, []);
  return (
    <div id='map' className='w-full h-[350px] sm:h-[400px]'></div>
  )
}
