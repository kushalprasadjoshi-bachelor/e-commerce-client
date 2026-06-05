import React from 'react'
import Navbar from '../components/partials/Navbar'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
  return (
    <main class='dynamic-x-padding'>
        <header>
            <Navbar />
        </header>

        <main>
            <Outlet />
        </main>
      
    </main>
  )
}

export default HomeLayout
