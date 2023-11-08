import React from 'react';
import HeaderSection from './HeaderSection'
import ServicesSectionItem from './ServicesSectionItem';
import styled from 'styled-components';
import { MdCode, MdPhonelinkSetup } from 'react-icons/md';

const ServicesItemsStyles = styled.div`
  padding: 8rem 0;
  .services__allItems {
    display: flex;
    gap: 8rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServiceSection() {
  return (
    <ServicesItemsStyles>
     <div className='container'>
     <HeaderSection heading='Services' 
        subheading='What I will do for you' />
        <div className='services__allItems'>
            <ServicesSectionItem 
            icon={<MdCode/>}
            title="web Devolopment"
            desc="I develop the websites.I try to create high performance website with blazing fast speed."
            />
            <ServicesSectionItem 
            icon={<MdPhonelinkSetup/>}
            title='App Devolpment'
            desc='I am also learning mobile application. I create mobile app withe pretty UI. '/></div>
     </div>
    </ServicesItemsStyles>
  )
}
