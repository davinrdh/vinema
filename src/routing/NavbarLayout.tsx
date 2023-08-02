// import React from 'react'
import { Outlet } from "react-router-dom"

import Header from "../shared/Header"
// import Sidebar from "../shared/Sidebar"

const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout