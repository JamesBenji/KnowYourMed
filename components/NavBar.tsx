import React from 'react'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='lg:mb-2'>
        <div className='h-5 bg-slate-800 p-0 mt-0 '></div>

        <div className='flex bg-[#008080] shadow-lg justify-between lg:px-[10rem] text-white items-center'>
            <span className='italic font-semibold hover:underline text-2xl py-3 text-slate-200'><Link href='/'>KnowYourMED</Link></span>

            <div className='flex '>
                <div className='lg:mx-10 hover:underline'><Link href='/'>Home</Link></div>
                <div className='lg:mx-12 hover:underline'><Link href='/search'>Search</Link></div>
                <div className='lg:mx-12 hover:underline'><Link href='/about'>About</Link></div>
            </div>
        </div>
    </div>
  )
}

export default NavBar