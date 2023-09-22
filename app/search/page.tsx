"use client"
import React, { useEffect, useState, useReducer } from 'react'
import { useRouter } from 'next/router';

const reducer = (state:any, action:any) => {
  switch(action.type){
    case 'updateName':
      return { ...state, drugName: action.payload };
  }
}

function SearchPage() {

  const [state, dispatch] = useReducer(reducer, { drugName: ''})

  const [count, setCount] = useState(0);

  const [dynamicText, setDynamicText] = useState('wise');
  const wordArray = ['good','enlightening','calming', 'wise'];

  const [searchResults, setSearchResults] = useState({});

  
  setTimeout(()=>{
    setDynamicText(wordArray[count]);
    setCount(count+1);
    if(count === 3) setCount(0);
  },3000);
  
  
  const handleClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    
    const router = useRouter();
    // e.preventDefault();
    const res1 = await fetch(`https://api.fda.gov/drug/label.json?search=active_ingredient:${state.drugName}&limit=1`);
    const data1 = await res1.json();

    const res2 = await fetch(`https://api.fda.gov/drug/label.json?search=brand_name:${state.drugName}&limit=1`);
    const data2 = await res2.json();

    const res3 = await fetch(`https://api.fda.gov/drug/label.json?search=generic_name:${state.drugName}&limit=1`);
    const data3 = await res3.json();

    const resultsArray = [ data1, data2, data3 ];

    const validRes = resultsArray.filter(result => result.hasOwnProperty("results"));

    if(!validRes){
      setSearchResults({"error": "No data found"})

    } else {

      const validData = validRes[0];

      const data = validData.results;

      console.log(data)

      setSearchResults(data);
    }
  }

  const[winHeight, setWinHeight] = useState(0);

  // useEffect(() => {
  //   if(typeof window !== 'undefined'){
  //     setWinHeight(window.innerHeight*0.8);
  //   }
  // },[])


  return (
    <section className='flex-col flex-1 bg-yellow-200 w-3/4 m-auto lg:mt-10 ' >
      <h1 className='font-semibold text-center text-3xl px-10 pt-0 pb-5'>It is {dynamicText} to know</h1>

    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

      <form className='flex-col items-center bg-blue-300' action='/results'>
        <input 
            type="text" 
            placeholder='Brand or Generic name'
            value={state?.drugName}
            onChange={(e) => dispatch({ type: 'updateName', payload: e.target.value})}
            className='p-2 w-3/4 border-[1px] border-[#008080] rounded-sm my-3 block mx-auto'
          />
          <button 
            type='submit'
            onClick={(e) => handleClick(e)}
            className='bg-[#008080] text-white p-2 w-full border-[#008080] text-md rounded-sm'
            >
              Search
          </button>
      </form>

        <div className='lg:col-span-2 bg-red-200 py-2 ml-2 px-5'>
          <h2 className='font-semibold text-xl'>Results</h2>
          <hr className='h-[1px] border-none bg-black' />
        </div>

      </div>
    </section>
  )
}

export default SearchPage