import React from 'react';
 import HeroImage from "../assets/images/hero.jpg";
import PText from './PText';
import Button from './Button';
 import SocialMediaArrow from "../assets/images/social-media-arrow.svg";
 import ScrollDwonArrow from "../assets/images/scroll-down-arrow.svg";
import styled from 'styled-components';

const HeroStyles = styled.div`
  .hero {
 height:100vh ;
 min-height:1000px;
 width:100%;
 text-align:center;
 display:flex;
 align-items:center;
 justify-content:center;
 position:relative;
  }.hero__heading{
    font-size:2rem;
    margin-bottom:-2rem;
    position:relative;
    span{
      display:inline-block;
      width:100%;

    }.hero__name{
      font-size:4rem;
      font-family:'Montserrat SemiBold';
      
      color:rgb(137, 109, 36);
    }
  }.hero__img{
    max-width:500px;
    width:100%;
    height:550px;
    margin:0 auto;
    border:1px solid var(--gray-1)
    }.hero__info{
    margin-top:1rem;
    color:blue;  
  }
  }.hero__social,
  .hero__scrollDown {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero__social {
    left: 50px;
  }
  .hero__scrollDown {
    right: 50px;
  }
  
  .hero__social__indicator,
  .hero__scrollDown {
    width: 50px;
    p {
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img {
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero__scrollDown {
    img {
      max-height: 70px;
    }
  }

  .hero__social__text {
    ul {
      li {
        margin-bottom: 1rem;
        a {
          display: inline-block;
          font-size: 1rem;
          transform: rotate(-360deg);
          letter-spacing: 2.5px;
          margin-bottom: 4rem;
        }
      }
    }
  }  @media only screen and (max-width: 768px) {
    .hero {
      min-height: 750px;
    }
    .hero__heading {
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero__name {
        font-size: 4.5rem;
      }
    }
    .hero__img {
      height: 300px;
    }
    .hero__info {
      margin-top: 3rem;
    }
    .hero__social {
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero__social__indicator {
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero__social__text {
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero__scrollDown {
      right: 0;
      width: 20px;
      gap: 1rem;
      p {
        font-size: 1.3rem;
      }
    }
  }

`;


export default function HeroSection() {
  return (
    
    <HeroStyles>
       <div className='hero'>
      
        <div className='container'>
         
            <h1 className="hero__heading">
                <span>Hello, This is </span>
                <span className="hero__name">Samana Faizi</span>
                </h1>
                <div className= "hero__img">
                    < img  src={HeroImage} alt=''/>

                </div>
                <div className="hero__info">
                  < PText className="text">
                  I am learning web devlopment in CTI academy, for 2 years.
                  I love to design and make new web experiences for the people.
                  </PText>
                  <Button btnLink="/projects" btnText="See my works" />
                  
                    <div className="hero__social">
                      <div className="hero__social__indicator">
                        <p>Follow</p>
                        {<img src={SocialMediaArrow} alt="icon" /> }
                      </div>
                      <div className="hero__social__text">
                        <ul>
                          <li>
                            <a href='https://twitter.com/FaiziSamana?s=09' 
                              target="_blank"
                              rel="noreferrer">
                                Twitter
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href='https://instagram.com/samanafaizi?igshid=YWYwM2I1ZDdmOQ=='
                              target="_blank"
                              rel="noreferrer" >
                                Instagram
                            </a>
                          </li>
                        </ul>
                        <ul>
                          <li>
                            <a href="https://www.linkedin.com/in/samana-faizi-b9824a254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                              target="_blank"
                              rel="noreferrer" >
                                LinkedIn
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="hero__scrollDown">
                      <p>Scroll</p>
                      { < img src={ScrollDwonArrow} alt="ScrollDown Arrow"/> }
                    </div> 
                    </div>
                </div>
        </div>  
    </HeroStyles>
  )
}
