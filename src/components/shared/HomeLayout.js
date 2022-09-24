import React from 'react'
import Sidebar from './Sidebar'
import {Outlet} from 'react-router-dom'
import Header from './Header'

function HomeLayout() {
  return (
    <div className='flex w-full min-h-screen font-sans bg-gray-800'>
        <Sidebar />
        <main className='flex flex-col flex-1 gap-6 p-4'>
          <Header />
          {<Outlet/>}
        </main>
    </div>
  )
}

export default HomeLayout