import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Hero() {
  return (
    <div>
        <div className='flex max-w-3/4 mx-1'>
            <div className='shadow lg:min-w-[629px] lg:min-h-[417px]'>
                <Image 
                src='/img-1-pill.jpg'
                width={629}
                height={417}
                alt='Swallowing a pill'
                />
            </div>
            
            <div className='mx-5 flex-col'>
                    <p className='font-semibold text-center text-[2rem] lg:mb-[1rem] '>Get informed about your medicine</p> 
                    <p className='text-justify flex-grow'>
                    A scoping review by Almeida et al. analyzed changes in access to health services during the COVID-19 pandemic and found that many people reported inadequate access to detailed information regarding their prescribed medications.
                    This lack of access to crucial medical information poses potential risks, such as improper dosage and unintended drug interactions. The study highlights the importance of improving access to accurate and easily understandable medication information, both in healthcare settings and through accessible educational resources, to enhance patient safety and medication adherence globally.
                    </p>
                    
                    <Link href='https://doi.org/10.3390/ijerph19031749' className='text-[#008080] hover:underline'>See the full paper</Link>

                <p className='my-9 font-semibold text-[#008080] text-2xl'>
                    Search about your medicine today
                </p>
                <Link href='/search' className=' text-white bg-[#008080] p-2 rounded-sm'>Make a search</Link>
            </div>          
        </div>
       
    </div>
  )
}

export default Hero