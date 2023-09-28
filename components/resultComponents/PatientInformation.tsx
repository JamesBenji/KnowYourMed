import React, { useEffect, useState } from 'react'
import findCommonKeys from '@/lib/findCommonKeys';
import patientInformation from '@/constants/patientInformation';
import Pin from '../textComponent/Pin';
import Click from '../textComponent/Click';
import TextFilter from '../textComponent/TextFilter';

function PatientInformation({ searchResults }: any) {

    const [commonKeys, setCommonKeys] = useState<string[]>([]);
    let resultKeys: string[], patientInformationKeys: string[] = [];
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
            console.log("Patient information",searchResults?.data?.[0]['ask_doctor'])
            resultKeys= Object.keys(searchResults?.data[0]);
            patientInformationKeys= patientInformation.map((field) => {return field.name});
          
          let res = findCommonKeys(resultKeys, patientInformationKeys);
    
          setCommonKeys(res);
          setErrorMessage('');
    } else {
        setErrorMessage("...");
      }
    }, [searchResults])

  return (
    <div id='patientInformation'>
        <span className='item-header'><Pin />Patient information</span>

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
                                        {patientInformation.filter(obj => obj.name === item)[0].description}
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

export default PatientInformation;