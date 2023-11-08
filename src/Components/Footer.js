import React from 'react';
import PText from './PText';
import FooterCol from './FooterCol';
import styled from 'styled-components';

const FooterStyle = styled.div`
padding-top: 10rem;
background-color: var(--deep-dark);
.container{
    display:flex;
    gap:3rem;
}.footer--col1{
    flex:2;
}.footer--col2,
.footer--col3,
.footer--col4{
    flex:1;
}.footer--col1--title{
    font-size:3.5rem;
    margin-bottom:1rem;

}.copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0; } }
    } }
`;

export default function Footer() {
  return (
    <FooterStyle>
   <div className='container'>
    <div className='footer--col1'>
        <h1 className='footer--col1--title'>
            Samana Faizi  </h1>
            <PText>
                A webdeveloper from Herat,Afghanistan.<br></br>
                I always try to make websites <br></br>that  have unique
                designs and also <br></br>has a good  performance rate.
            </PText>
    </div>
    <div className='footer--col2'>
        <FooterCol heading='Important Links'
        Links={[
            {
            title : "Home",
            path : "/",
            type:"Link"
        },
        {
            title : "About",
            path : "/about",
            type:"Link"
        },
        {
            title : "Projects",
            path : "/projects",
            type:"Link"
        },
        {
            title : "Contact",
            path : "/contact",
            type:"Link"
        },
    ]}
        />
    </div>
    <div className='footer--col3'>
    <FooterCol heading='Contact Info'
    Links={
        [
            {
                title:'+93780',
                path :'tel:+93780',
            },
            {
                title:'faizisamana@gmail.com',
                path:'mailto:faizisamana@gmail.com',
            },{
                title:'Bekrabad,Herat,Afghanistan',
                path:'http://google.com/maps'
            }
        ]
    }
    />

</div>
<div className='footer--col4'>
<FooterCol heading='Social Links' 
Links={
    [
        {
            title:'LinkeIn',
            path:'http://linkedin.com',
        },
        {
            title:'Instagram',
            path:'http://instagram.com',
        },
        {
            title:'Twitter',
            path:'http://twitter.com',
        },
    ]
}

/>
</div>
</div>
<div className='copyright'>
    <div className='container'>
        <PText>
            2023  - Code To Inspire | Designed By Samana   </PText>
    </div>
</div>
    </FooterStyle>
  )
}
