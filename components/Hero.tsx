import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


function Hero() {
  return (
        <div className='min-w-full'>            
                <div className='hero--bg lg:pt-3 sm:bg-sm-bg sm:bg-bottom'>
                    <div className='relative min-h-fit flex flex-col justify-start lg:ml-5'>
                        <p className='font-semibold text-[2rem] lg:w-1/3 text-[#56f0f0] sm:mt-14 sm:mb-10 md:mt-12 md:mb-10 lg:mt-2 lg:mb-10'>Get informed about your medicine</p> 
                        <p className='lg:w-1/3 sm:text-[#094d4df1] sm:backdrop-blur-sm-blur sm:bg-[#ffffff98] sm:rounded-md sm:p-2 sm:m-2 md:bg-none md:backdrop-blur-sm-blur md:bg-[#ffffff98] md:m-2 md:p-2 md:text-[#094d4df1] md:mt-0 lg:bg-none lg:backdrop-blur-none lg:bg-transparent lg:m-0 lg:p-0 lg:text-white lg:mt-0'>
                            A scoping review by Almeida et al. analyzed changes in access to health services during the COVID-19 pandemic and found that many people reported inadequate access to detailed information regarding their prescribed medications.
                            This lack of access to crucial medical information poses potential risks, such as improper dosage and unintended drug interactions. The study highlights the importance of improving access to accurate and easily understandable medication information, both in healthcare settings and through accessible educational resources, to enhance patient safety and medication adherence globally.
                        </p>
                        <Link href='https://doi.org/10.3390/ijerph19031749' className='text-[#56f0f0] hover:underline mb-3'>See the full paper</Link>
                        
                        <Link href='/search' className=' text-white border-[#56f0f0] border-[1px] hover:bg-[#008080] hover:shadow-md hover:shadow-[#56f0f0] transition-all duration-200 p-2 rounded-sm w-fit mb-12 font-semibold'>Search about your medicine today</Link>
                    </div>
                </div>
        </div>
       
  )
}

export default Hero