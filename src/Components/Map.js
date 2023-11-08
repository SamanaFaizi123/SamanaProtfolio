import React from 'react';
import PText from './PText';
import styled from 'styled-components';
import MapImg from "../assets/images/map.jpg";

const MapStyles = styled.div`
background : url(${MapImg}) no-repeat center / cover;
min-height: 500px;
.container{
    position: relative;
    min-height: 400px;

}.map--card{
    position: absolute;
    right:42%;
    bottom: 42%;
    padding:2rem;
    background: var(--deep-dark);
    max-width: 400px;
    border-radius: 12px;
}.map--card--heading{
    font-size: 2rem;
    margin-bottom: 0.5rem;
   
}.map--card--link{
    display: inline-block;
    font-size:1rem;
    margin-top: 0.6rem;
    text-decoration: underline;
}  
@media only screen and (max-width: 768px) {
    background-position: 16% center ;
  }   @media only screen and (max-width: 400px) {
     .map__card {
      max-width: none;
       right: auto;
     }
   }

`

export default function Map() {
  return (
    <MapStyles>
        <div className='container'>
            <div className=' map--card'>
                <h3 className='map--card--heading'>
                    Here is me
                </h3>
                <PText>
                    Afghanistan Herat, Bakrabad Square,13 Fekri Saljoughi St

                </PText>
                <a href='https://maps.app.goo.gl/TBSuoqJATXRSXNVv9' target='_blank'
                 rel='noreferrer'
                 className='map--card--link'>
                    Open in Google Map </a>
                 </div>
        </div>
    </MapStyles>
  )
}
