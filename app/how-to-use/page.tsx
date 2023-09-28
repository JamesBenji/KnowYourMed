import { faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

function HowToUse() {
  return (
    <div className='w-1/2 m-auto lg:mt-5'>
      <h1 className='heading--1'>Overview</h1>
      <p className='how-to--p'>
        <Link 
          href={'/'}
          className='underline point'
          >KnowYourMed
        </Link> 
          &nbsp;is an application that provides information about various drugs basing on the information made available by the&nbsp;
        <Link 
          href={'https://open.fda.gov/apis/'}
          className='underline point'
          >
          OpenFDA API.
        </Link>
      </p>
      <h1 className='heading--1'>How are drugs named? &nbsp;
        <span className='text-[#45a15f] underline'>
          (
            <FontAwesomeIcon icon={faPaperclip} width={20}/>&nbsp;
            <Link 
            href={'https://perplexity.ai/'}
            >Research made with Perplexity AI</Link>
            )
          </span>
      </h1>
      <img 
        src={'https://th.bing.com/th/id/OIP.xniRyxpM1ovuWWdQa-SJCgHaEK?pid=ImgDet&rs=1'}
        width={500}
        alt='Drug names on packaging'
        className='m-auto mb-5'
      />
      <p className='how-to--p'>When a drug is first discovered, it is given a <span className='point'>chemical name</span> that describes the atomic or molecular structure of the drug (Smith, 2007; Becker, 2013; Cho & Castañeda, 2019; World Health Organization [WHO], 2023). The chemical name is usually too complex and cumbersome for general use, so a shorthand version of the chemical name or a code name is developed for easy reference among researchers (Smith, 2007; Becker, 2013; Cho & Castañeda, 2019). When a drug is approved by the FDA, it is given a <span className='point'>generic (official) name</span>, which is assigned by an official body such as the United States Adopted Names (USAN) Council (Smith, 2007; Becker, 2013; WHO, 2023). 
      <br/><br />
      The generic name of a drug is usually more complicated and harder to remember than the brand name (WHO, 2023).
      If a drug is made by several companies, each company will also give the medicine a <span className='point'>brand (trade) name</span>. So one medicine may have a generic name and also have one or more brand names (Smith, 2007). The brand name is usually written most clearly on any packaging, but you will always see the generic name written somewhere on the packet (Smith, 2007). The name of the drug on the packaging will depend on whether it is a brand name or a generic name.

      <br /><br />Under the INN system, generic names for drugs are constructed out of affixes and stems that classify the drugs into useful categories while keeping related names distinguishable (WHO, 2023). A marketed drug might also have a <span className='point'>company code or compound code</span> (Smith, 2007; WHO, 2023).
      Drug names are often subject to legal regulation, including approval for new drugs (to avoid confusion with existing drugs) and on packaging to establish clear rules about adulterants and fraudulent or misleading labeling (Smith, 2007; WHO, 2023). A national formulary is often designated to define drug names (and purity standards) for regulatory purposes (WHO, 2023).

      <br /><br />In summary, drugs have three types of names: <span className='point'>chemical names</span>, <span className='point'>generic or nonproprietary names</span>, and <span className='point'>trade names</span> (Smith, 2007; Becker, 2013; Cho & Castañeda, 2019; WHO, 2023). The generic name is assigned by an official body such as the United States Adopted Names (USAN) Council, while the brand name is given by the company that manufactures the drug (Smith, 2007; Becker, 2013; WHO, 2023). The brand name is usually written most clearly on any packaging, but the generic name will also be included somewhere on the packet (Smith, 2007).
</p>

      <h1 className='heading--1'>Limitations</h1>
      <p className='how-to--p'>
        This application, however, does not provide inforamtion on drugs whose generic or brand names are not registered with the US FDA. For example, information on panadol, a prominent pain reliver in Uganda cannot be obtained using its well-known name. The names <span className='point'>Paracetamol</span> or <span className='point'>Acetaminophen</span> can be used in this instance.
      </p>
    </div>
  )
}

export default HowToUse