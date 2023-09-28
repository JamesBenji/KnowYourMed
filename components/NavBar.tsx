'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

  const [barsClicked, setBarsClicked] = useState<boolean>(false);
  const toggleMenu = () => {
    setBarsClicked(!barsClicked)
  }

  return (
    <div className='mb-1'>
        <div className='sm:h-2 bg-slate-800 p-0 mt-0 w-full'></div>

        <div >

            <div className='flex bg-[#008080] shadow-lg justify-between text-white items-center w-full md:px-5'>

              <span className='italic font-semibold hover:underline sm:text-xl sm:px-1 md:text-2xl lg:text-3xl py-3 text-slate-200'>
                <Link href='/' className='flex-grow-2 flex-shrink-1 ml-10'>
                  KnowYourMED
                </Link>
              </span>

              <div className='sm:max-h-0 sm:overflow-hidden md:max-h-fit lg:max-h-fit flex  text-white text-base antialiased tracking-tight mr-10'>
                  <div className='hover:underline mx-4'><Link href='/'>Home</Link></div>
                  <div className='mx-4 hover:underline'><Link href='/how-to-use'>How to use</Link></div>
                  <div className='mx-4 hover:underline'><Link href='/search'>Search</Link></div>
              </div>

              <div className='sm:visible sm:px-2 md:hidden lg:hidden'>
                <FontAwesomeIcon icon={faBars} 
                  onClick={() => { toggleMenu(); }}
                />
              </div>

              
            </div>
             
             
             <div className={`sm:visible md:hidden lg:hidden ${barsClicked ? 'block':'hidden'} transition-all duration-500 bg-[#008080] overflow-hidden w-full flex justify-center text-white text-sm antialiased leading-tight tracking-tight`}>
                <div className='mx-2 hover:underline'><Link href='/'>Home</Link></div>
                <div className='mx-2 hover:underline'><Link href='/how-to-use'>How to use</Link></div>
                <div className='mx-2 hover:underline'><Link href='/search'>Search</Link></div>
              </div>

        </div>

        

    </div>
  )
}

export default NavBar