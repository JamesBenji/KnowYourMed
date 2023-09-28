"use client"
import React, { useEffect, useState, useReducer } from 'react'
import { useRef, RefObject } from 'react';
import AbuseOverdose from '@/components/resultComponents/AbuseOverdose';
import AdverseEffectsAndInteractions from '@/components/resultComponents/AdverseEffectsAndInteractions';
import OpenFDAFields from '@/components/resultComponents/openFDAFields';
import ClinicalPharmacology from '@/components/resultComponents/ClinicalPharmacology';
import IdAndVersion from '@/components/resultComponents/IdAndVersion';
import IndicatorsUsageDosage from '@/components/resultComponents/IndicatorsUsageDosage';
import PatientInformation from '@/components/resultComponents/PatientInformation';
import Reference from '@/components/resultComponents/Reference';
import SpecialPopulations from '@/components/resultComponents/SpecialPopulations';
import WarningsAndPrecautions from '@/components/resultComponents/WarningsAndPrecautions';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faLink, faMapPin } from '@fortawesome/free-solid-svg-icons';
import Loading from './loading';

const reducer = (state:any, action:any) => {
  switch(action.type){
    case 'updateName':
      return { ...state, drugName: action.payload };
  }
}

function SearchPage() {

  const [state, dispatch] = useReducer(reducer, { drugName: ''});
  const [count, setCount] = useState(0);
  const [searchResults, setSearchResults] = useState({});
  const [notFound, setNotFound] = useState<boolean>(true);
  const [clickedSearch, setClickedSearch] = useState<boolean>(false);
  const [randomDrug, setRandomDrug] = useState<string>('Ibuprofen')
  const [navigationClicked, setNaviationClicked] = useState<boolean>(false);
  const inputRef: RefObject<HTMLInputElement> = useRef(null);
  const submitRef: RefObject<HTMLButtonElement> = useRef(null);
  
  const generateRandomDrug = () => {
    const randomSearchMade= ['Paracetamol', 'Ibuprofen', 'Naproxen', 'aspirin'];

    setRandomDrug(prev => { return randomSearchMade[Math.floor(Math.random() * randomSearchMade.length)]})
  }


  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    e.preventDefault();
    setClickedSearch(true);
      const res1 = await fetch(`https://api.fda.gov/drug/label.json?search=active_ingredient:${state.drugName}&limit=1`);
      const data1 = await res1.json();
      const res2 = await fetch(`https://api.fda.gov/drug/label.json?search=brand_name:${state.drugName}&limit=1`);
      const data2 = await res2.json();
      const res3 = await fetch(`https://api.fda.gov/drug/label.json?search=generic_name:${state.drugName}&limit=1`);
      const data3 = await res3.json();

      const resultsArray = [ data1, data2, data3 ];
      resultsArray.length > 0 && setClickedSearch(false)
      const validRes = resultsArray.filter(result => result.hasOwnProperty("results"));

      if(validRes.length === 0){
        setNotFound(true);
        setSearchResults(prev => ({...prev, error: "No data found"}))
      } else {
        const validData = validRes[0];
        const data = validData.results;
        setNotFound(false);
        setSearchResults(prev => ({...prev, data: data}));
    }
  }


  const handleRandomSearchClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (inputRef.current) {
      inputRef.current.value = randomDrug;
      inputRef.current.focus();
      dispatch({ type: 'updateName', payload: randomDrug})
      generateRandomDrug();
    }
  }

  const toggleNavigation = () => {
    setNaviationClicked(!navigationClicked);
  }

  return (
    <section className='flex-col flex-1 w-3/4 m-auto lg:mt-0 max-h-[80vh] overflow-y-scroll p-0' >
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative lg:gap-5'>
      <form className='flex-col items-center border-[2px] border-gray-300 p-1 rounded-sm h-fit pb-2 lg:sticky lg:top-1'>
        <input 
            type="text" 
            placeholder='Brand or Generic name'
            value={state?.drugName}
            onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value})}
            className='p-2 w-3/4 border-[1px] border-[#008080] rounded-sm my-2 block mx-auto '
            ref={inputRef}
          />

          <div className='lg:sticky lg:top-48'>
            <button 
              type='submit'
              onClick={(e) => handleClick(e)}
              className={clickedSearch ? 'btn-click' : 'btn-norm'}
              ref={submitRef}              
              >
                Search
            </button>

            <div className='flex-col px-5 mt-3'>
              <h2 className='text-xl my-1 flex justify-between items-center'>
                <span>
                  <FontAwesomeIcon icon={faMapPin} width={10} className=''/>&nbsp;&nbsp;
                  Navigation
                </span>

                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => toggleNavigation()}
                    className='md:hidden'
                  />
              </h2>
              <div className={`text-base sm:${navigationClicked ? 'block':'hidden'} md:block`}>
                
                  <Link href={'#abuseOverdose'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Abuse and Overdose</Link>
                  <br />
                  <Link href={'#adverseEffectsAndInteractions'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Adverse Effects and Interactions</Link>
                  <br />
                  <Link href={'#clinicalPharmacology'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Clinical Pharmacology</Link>
                  <br />
                  <Link href={'#idAndVersion'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;ID and version</Link>
                  <br />
                  <Link href={'#indicatorsUsageDosage'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Indicators Usage and Dosage</Link>
                  <br />
                  <Link href={'#openFDAFields'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;OpenFDA Fields</Link>
                  <br />
                  <Link href={'#patientInformation'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Patient information</Link>
                  <br />
                  <Link href={'#reference'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Reference</Link>
                  <br />
                  <Link href={'#specialPopulations'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Special populations</Link>
                  <br />
                  <Link href={'#warningsAndPrecautions'} className='hover:underline'><FontAwesomeIcon icon={faLink} width={15} className='text-[#008080]'/>&nbsp;Warnings and Precautions</Link>
                  <br />

                  <button className='item-link text-sm text-left p-0'>Feeling quite lost? Look at a random search values</button>
                  <span className='ml-2'>
                    <button 
                      // ref={randomBtnRef}
                      type='button'
                      onClick={(e) => {
                        handleRandomSearchClick(e);
                      }}                
                    >
                      {randomDrug}
                    </button>
                  </span>
              </div>
            </div>
          </div>
          
      </form>

        <div className='lg:col-span-2 py-2 ml-2 px-5 relative'>
          {clickedSearch ? 
              <Loading /> : 
              (
                notFound ? (
                  <p className='font-light text-lg'>No results here</p>
                ) : (
                  <div className='px-1 overflow-y-hidden sm:text-xl md:text-xl lg:text-2xl'>
                    <AbuseOverdose searchResults={searchResults}/>
                    <AdverseEffectsAndInteractions searchResults={searchResults}/>
                    <ClinicalPharmacology searchResults={searchResults}/>
                    <IdAndVersion searchResults={searchResults}/>
                    <IndicatorsUsageDosage searchResults={searchResults}/>
                    <OpenFDAFields searchResults={searchResults}/>
                    <PatientInformation searchResults={searchResults}/>
                    <Reference searchResults={searchResults}/>
                    <SpecialPopulations searchResults={searchResults}/>
                    <WarningsAndPrecautions searchResults={searchResults}/>
                  </div>
                )
              )
          }

        </div>
      </div>

    </section>
  )
}

export default SearchPage;