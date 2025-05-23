import { useEffect } from 'react'
import { useLocation } from 'react-router'

export default function ScrollToTop() {
    const { pathname } = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: 'smooth',
        })
    }, [pathname])
  return null
}
/* useLoaction detect the chage of route and the useEffect calls to windo.scrollTo(0, 0) making that the window scrolls to the top automaticly each time you change the page*/