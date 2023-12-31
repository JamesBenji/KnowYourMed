import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

function Click() {
  return (
    <span>
        <FontAwesomeIcon icon={faPaperclip} width={15} className='fa-light text-[#45a15f]'/>
        &nbsp;&nbsp;&nbsp;&nbsp;
    </span>
  )
}

export default Click;