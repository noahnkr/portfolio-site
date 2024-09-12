import './index.scss'
import Sidebar from '../Sidebar'
import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
    })
  }, [pathname])

  return null
}

const Layout = () => {
  return (
    <div className="App">
      <ScrollToTop />
      <Sidebar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
