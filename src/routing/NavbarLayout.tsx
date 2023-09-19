// import React from 'react'
import { Outlet, useLocation } from "react-router-dom"

import Header from "../shared/Header"
import { useEffect } from "react"
import Footer from "../shared/Footer"
// import Sidebar from "../shared/Sidebar"

const Layout = () => {
  const location = useLocation()
  useEffect(()=> {
    window.scrollTo(0, 0)
  },[location.pathname])
  return (
    <>
        <Header />
        <Outlet />
        {/* <Footer /> */}
    </>
  )
}

export default Layout