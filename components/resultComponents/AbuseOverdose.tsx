import React, { useEffect, useState } from 'react';
import fieldsAbuse from '../../constants/fields_abuse';
import findCommonKeys from '@/lib/findCommonKeys';
import Pin from '../textComponent/Pin';
import TextFilter from '../textComponent/TextFilter';



function AbuseOverdose({ searchResults }: any) {
  const [commonKeys, setCommonKeys] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');
  let resultKeys: string[], fieldAbuseKeys: string[] = [];

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
      
      fieldAbuseKeys= fieldsAbuse.map((field) => {return field.name});
      
      let res = findCommonKeys(resultKeys, fieldAbuseKeys);
      setCommonKeys(res);
      setErrorMessage('');

  } else {
        setErrorMessage("...");
      }
  }, [searchResults]);

  return (
    <div id='abuseOverdose'>
      <span className='item-header'>
        <Pin />Abuse and Overdose
      </span>
          <section>
            {
                commonKeys.length > 0 ? (
                  commonKeys.map(item => (
                    <article key={item}>
                        <b className='item-link'
                          onClick={() => {
                            toggleVisibility(item);
                        }}
                        >
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
                                {fieldsAbuse.filter(obj => obj.name === item)[0].description}
                            </p>
                        }
                        
                            <p className='item-content'>
                          {
                            <TextFilter text = {searchResults?.data[0][item]}/>                            
                          }
                        </p>
                        
                    </article>
                ))
                ) : (
                  <p>
                    No results
                  </p>
                )
            }
          </section>
        
    </div>
  )
}

export default AbuseOverdose;