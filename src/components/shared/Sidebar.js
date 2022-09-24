import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import imgLogo from '../../assets/white-logo-icon.png'
import { navLinks } from '../shared/utils/NavDB.js'

function Sidebar() {

    const [activeNavItem, setActiveNavItem] = useState();

  return (
    <div className='flex flex-col gap-y-5 items-center py-8 w-20 bg-gray-900'>
        <Link to='/' className='p-2 bg-opacity-20 rounded-xl bg-primary-bg' >
            <img className='w-8 h-8' src={imgLogo} alt="WA Utilities Logo" />
        </Link>

        <div className='flex flex-col gap-y-5'>
            <div>
                {
                    navLinks.map((navLink) => (
                        <div onClick={() => setActiveNavItem(navLink.id)} className={`${activeNavItem === navLink.id ? "bg-gray-800 py-[1px] pl-2 rounded-l-xl relative before:absolute  before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0.5 before:shadow-inverse-top after:absolute after:w-1 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0.5 after:shadow-inverse-bottom" : "pl-2"}`}>
                            <Link 
                            key={navLink.key} 
                            to={navLink.path} 
                            className={`p-2 my-4 mr-4 ml-3 bg-opacity-20 rounded-xl bg-primary-bg flex items-center ${activeNavItem === navLink.id ? "text-white shadow-primary-sh bg-primary-bg" : "text-primary-bg"}`}>
                            {navLink.icon}
                        </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default Sidebar