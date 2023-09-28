import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

interface TextFilterProps{
    text?: string;
}

function TextFilter({ text = '' }: TextFilterProps) {
  const bulletPoints: string[] = text.split(/•|\*/).filter(point => point.trim() !== '');

  if (bulletPoints.length === 0) {
    return null; 
  }

  const heading = bulletPoints[0];
  const restOfTheText = bulletPoints.slice(1);

  return (
    <>
      <span>{heading} <br /></span>
      <span className='ml-0'>
        {
            restOfTheText.map((point, index) => (
                <span key={index} className='ml-2'>
                    <FontAwesomeIcon icon={faCircleExclamation} className='text-[#008080] font-light'/>
                    &nbsp;&nbsp;&nbsp;
                    {
                        point.trim()
                    }
                    <br />
                </span>
        ))}
      </span>
    </>
  );
}

export default TextFilter;

