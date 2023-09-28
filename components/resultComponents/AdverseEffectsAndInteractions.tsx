"use client"
import React, { useEffect, useState } from 'react'
import findCommonKeys from '@/lib/findCommonKeys';
import adverseEffectsAndInteractions from '../../constants/adverseEffectsAndInteractions';
import Pin from '../textComponent/Pin';
import TextFilter from '../textComponent/TextFilter';

function AdverseEffectsAndInteractions( { searchResults } :any ) {
    const [commonKeys, setCommonKeys] = useState<string[]>([]);
    let resultKeys: string[], adverseEffectsAndInteractionsKeys: string[] = [];
    const [errorMessage, setErrorMessage] = useState<string>('');

    interface visibilityObject{
      [key: string]: boolean;
  }
    const [isVisible, setIsVisible] = useState<visibilityObject>({});
    const toggleVisibility = (item: string) => {
        setIsVisible((prevState) => ({
          ...prevState,
          [item]: !prevState[item] || false,
        }));
      };

  
    useEffect(() => {
        if(searchResults?.data?.[0]) {
            resultKeys= Object.keys(searchResults?.data[0]);
          adverseEffectsAndInteractionsKeys= adverseEffectsAndInteractions.map((field) => {return field.name});
          
          let res = findCommonKeys(resultKeys, adverseEffectsAndInteractionsKeys);
    
          setCommonKeys(res);
          setErrorMessage('');
    } else {
      setErrorMessage("...");
    }
    }, [searchResults])
  

  return (
    <div id='adverseEffectsAndInteractions'>
      <span className='item-header'><Pin /> Adverse Effects and Interactions</span>

      <section>
            {
                commonKeys.map(item => (
                    <article key={item}>
                        <b className='item-link'>
                          {
                            item.replace(/_/g, ' ')
                                .split(' ')
                                .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                .join(' ') + `\t \t`
                          }
                        </b>

                        {
                            isVisible[item] &&  
                            <p className='description'>
                                {adverseEffectsAndInteractions.filter(obj => obj.name === item)[0].description}
                            </p>
                        }
                        
                            <p className='item-content'>
                          {
                            <TextFilter text = {searchResults?.data[0][item]}/>                            
                          }
                        </p>
                    </article>
                ))
            }
          </section>
        <p>
            {errorMessage}
        </p>
    </div>
  )
}

export default AdverseEffectsAndInteractions;