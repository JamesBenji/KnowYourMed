import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
    const email = 'jamesbenjamin450@gmail.com';
  return (

    <div className='bg-[#008080] w-full text-white flex-col text-center mt-5'>
        
        <div className=''>
            &copy;&nbsp;{new Date().getFullYear()}&nbsp;|&nbsp; 
            <Link href='https://open.fda.gov/apis/'>OpenFDA API</Link>
        </div>

        

        <div className='flex lg:gap-4 items-center align-middle justify-center p-1'>
            <span>Get in touch with Benjamin via
            <Link href={'https://www.linkedin.com/in/mubiru-james-benjamin-b11a9218a'}> <FontAwesomeIcon icon={faLinkedin} width='20'/></Link>
            
            <Link href={`mailto:${email}`}><FontAwesomeIcon icon={faEnvelope} width='20'/></Link>
            </span>
        </div>

    </div>
  )
}

export default Footer