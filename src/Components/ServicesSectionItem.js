import React from 'react';
import { MdCode } from 'react-icons/md';
import PText from './PText';
import styled from 'styled-components';

const ItemStyles = styled.div`
  text-align: center;
  .servicesItem__icon {
    svg {
      width: 3rem;
    }
  }
  .servicesItem__title {
    font-size: 2.5rem;
    font-family: 'Montserrat SemiBold';
  }
  .para {
    margin-top: 2rem;
  }
`;

export default function ServicesSectionItem({
    icon =  <MdCode/>,title = "web Devolopment",desc ="I develop the websites.I try to create high performance website with blazing fast speed."
}) {
  return (
    <ItemStyles>
    <div className="servicesItem__icon">
      {icon}</div>
        <div className='servicesItem__title'>
            {title} </div>
            <PText>
                {desc}
            </PText>
    </ItemStyles>
  )
}

