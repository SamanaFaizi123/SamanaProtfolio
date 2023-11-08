import React from 'react';
 import HeaderSection from './HeaderSection';
import PText from './PText';
import Button from './Button';
import AboutImg from "../assets/images/about-sec-img.jpg"
import styled from 'styled-components';

const AboutSectionStyles = styled.div `
padding:8rem 0;
.container{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    text-align:left;   
}
.aboutSection__right{
      flex:4;
    width:50%;
    height:400px;
}.section-title{
    text-align:left;   
}.para{
  
    margin-top:2rem;
    margin-left:0;
}.aboutSection__buttons{
    display:flex;
    align-items:center;
    justify-content:flex-start;
    gap:2rem;
    margin-top:2rem;
} @media only screen and (max-width: 950px) {
    .aboutSection__left {
      flex: 4;
    }
    .aboutSection__right {
      flex: 3;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection__left,
    .aboutSection__right {
      width: 100%;
    }
    .aboutSection__right {
      margin-top: 3rem;
    }
    .section-title {
      text-align: center;
    }
    .para {
      margin: 0 auto;
      margin-top: 2rem;
    }
    .aboutSection__buttons {
      flex-direction: column;
      gap: 0rem;
      .button-wrapper,
      a {
        width: 100%;
        text-align: center;
      }
    }
  }
    


`

export default function AboutSection() {
  return (
    <AboutSectionStyles>
        <div className='container'>
            <div className="aboutSection__left">

                < HeaderSection 
                subheading='Let me introduce myself!'
                heading='About me'
                />
                <PText>
                    I am a website developer from Herat,Afghanistan. I am learning
                    web devlopment in CTI(Code To Inspire) academy,
                    I try to create professional websites. I love coding and art ,and I 
                    always try to show unique views to the audience.
                </PText>
                <div className='aboutSection__buttons'>
                    < Button btnLink='/Projects' btnText='Works'/>
                    <Button btnLink='/about' btnText='Read More' outline />
                </div>
            </div>
            <div className='aboutSection__right'>
                < img src={AboutImg} alt='aboutImg'/>
            </div>
        </div>
    </AboutSectionStyles>
  );
}
