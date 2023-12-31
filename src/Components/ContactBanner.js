import React from 'react';
import PText from './PText';
import Button from './Button';
import styled from 'styled-components';

const ContactBannerStyle =styled.div`
padding:10rem 0;
.contactBanner--wrapper{
    background-color:var(--deep-dark);
    border-radius:12px;
    padding:5rem 0rem;
    text-align:center;
}.contactBanner--heading{
    font-size:4rem;
    margin-bottom:2rem;
}
@media only screen and (max-width: 768px) {
    .contactBanner--heading {
      font-size: 2.8rem;
    }
  }

`
export default function ContactBanner() {
  return (
    <ContactBannerStyle>
        <div className='container'>
            <div className='contactBanner--wrapper'>
                <PText >
                    Have a Project in mind!
                    </PText>
                    <h3 className='contactBanner--heading'>
                        Let me help you:</h3>
                        <Button btnText='Contact Now' btnLink='/contact'/>
            </div>
</div>
    </ContactBannerStyle>
  )
}

