import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../Nav/Navigation'

const Layout = () => {
  return (
    <>
      <Navigation />
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
