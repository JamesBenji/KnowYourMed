import React, { useEffect, useState } from 'react'
import findCommonKeys from '@/lib/findCommonKeys';
import idAndVersion from '@/constants/idAndVersion';
import Click from '../textComponent/Click';
import Pin from '../textComponent/Pin';
import TextFilter from '../textComponent/TextFilter';

function IdAndVersion({ searchResults }: any) {
    const [commonKeys, setCommonKeys] = useState<string[]>([]);
    let resultKeys: string[], idAndVersionKeys: string[] = [];
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
            idAndVersionKeys= idAndVersion.map((field) => {return field.name});
          
          let res = findCommonKeys(resultKeys, idAndVersionKeys);
    
          setCommonKeys(res);
          setErrorMessage('');
    } else {
        setErrorMessage("...");
      }
    }, [searchResults])
    
  return (
    <div id='idAndVersion'>
      <p className='item-header'><Pin/>ID and version</p>

      <section>
            {
                commonKeys.map(item => (
                    <article key={item}>
                        <b
                            onClick={() => {
                                toggleVisibility(item);
                            }}
                            className='item-link'
                        >
                            <Click />
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
                                {idAndVersion.filter(obj => obj.name === item)[0].description}
                            </p>
                        }
                            <p className='item-content'>
                          {
                            <TextFilter text = {searchResults?.data[0][item][0]}/>                            
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
)}

export default IdAndVersion