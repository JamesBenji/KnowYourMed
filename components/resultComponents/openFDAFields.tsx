import React, { useState, useEffect} from 'react'
import findCommonKeys from '@/lib/findCommonKeys';
import openFDAFields from '@/constants/openFDAFields';
import Pin from '../textComponent/Pin';
import Click from '../textComponent/Click';
import TextFilter from '../textComponent/TextFilter';

function OpenFDAFields( { searchResults }: any) {
    const [commonKeys, setCommonKeys] = useState<string[]>([]);
    const [errorMessage, setErrorMessage] = useState<string>('');
    let resultKeys: string[], openFDAKeys: string[] = [];

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
        if(searchResults.data?.[0]) {
            resultKeys= Object.keys(searchResults?.data[0].openfda);
          openFDAKeys= openFDAFields.map((field) => {return field.name});
          console.log(searchResults?.data[0].openfda)
          
          let res: string[] = findCommonKeys(resultKeys, openFDAKeys);
          setCommonKeys(res);
          setErrorMessage('');
      } else {
        setErrorMessage("...");
      }
    }, [searchResults])
    console.log(typeof searchResults?.data?.[0].openfda)


  return (
    <div id='openFDAFields'>
        <span className='item-header'><Pin />OpenFDA Fields</span>
           <section>
               {
                  commonKeys.map(item => (
                      <article key={item}>
                          <b className='item-link'
                            onClick={() => {
                              toggleVisibility(item);
                          }}
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
                                {openFDAFields.filter(obj => obj.name === item)[0].description}
                            </p>
                        }
                          
                          {
                          
                            <p className='item-content'>
                              {
                                (Object.keys(searchResults?.data[0].openfda[item]).length > 0) &&
                                 <TextFilter text = {searchResults?.data[0].openfda[item][0]}/>                            
                              }
                          </p>
                                                    
                        }
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

export default OpenFDAFields;