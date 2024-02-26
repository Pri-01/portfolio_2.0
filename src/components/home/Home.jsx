import React from 'react'
import profileImg from "../../assets/profile-img.png"
import shapeOne from "../../assets/shape-1.png"
import shapeTwo from "../../assets/shape-2.png"
import { FaLinkedin } from "react-icons/fa6";
import {FaTwitter, FaFacebook,FaInstagram } from "react-icons/fa"
import './home.css'
import CV from '../../assets/Priyansu_resume.pdf'
import Typed from 'typed.js';

const Home = () => {

    const el = React.useRef(null);
    const el2 = React.useRef(null);


    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
         'and I am a passionate Web developer',
         'and I am a passionate frontend developer',
         'and I am a passionate web designer',
         'and I am a passionate React deveoper',
         'and I am a passionate Web developer',
        ],
        smartBackspace: true,
        typeSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);


      React.useEffect(() => {
        const typed = new Typed(el2.current, {
          strings: [
           'Priyansu ',
          ],
          typeSpeed: 50,
          loop: true,
        });
    
        return () => {
          // Destroy Typed instance during cleanup to stop animation
          typed.destroy();
        };
      }, []);

  return  (<section className="home" id='home'>
    <div className="home__wrapper">
    <div className="home__container container">
        <p className="home__subtitle text-cs">
            Hello, <span>My name is</span>
        </p>

        <h1 className="home__title text-cs">
            <span><span ref={
                el2
                } /></span>
        </h1>

        <p className="home__job">
            {/* <span className="text-cs">A </span> <b>Web Developer</b> */}
            <span className="text-cs"><span ref={
                
                el
                } /></span>
        </p>


        <div className="home__img-wrapper">
            <div className="home__banner">
                <img src={profileImg} alt="" className='home__profile'/>
            </div>

            <p className="home__data home__data-one">
                <span className="text-lg">
                    3<b>rd</b>
                </span>
                <span className="text-sm text-cs">
                    year of <span>B.Tech</span>
                </span>
            </p>

            <p className="home__data home__data-two">
                <span className="text-lg">
                   04
                </span>
                <span className="text-sm text-cs">
                    completed <span>projects</span>
                </span>
            </p>

            <img src={shapeOne} alt="" className='shape shape__1'/>
            <img src={shapeTwo} alt="" className='shape shape__2'/>
            <img src={shapeTwo} alt="" className='shape shape__3'/>
        </div>

        <p className="home__text">
            an aspiring B tech student in information technology . Eager to explore the intersection of technology and creativity.
        </p>

        <div className="home__socials">
            <a href="" className="home__social-link">
                <FaTwitter/>
            </a>
            <a href="https://www.facebook.com/priyansu.bhattacharya.79/" className="home__social-link">
                <FaFacebook/>
            </a>
            <a href="https://www.linkedin.com/in/priyansu-bhattacharya-5b3bb425b/" className="home__social-link">
                <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/pri__yansu_/" className="home__social-link">
                <FaInstagram/>
            </a>
        </div>

        <div className="home__btns">
            <a download='' href={CV} className="btn text-cs">Download CV</a>

            <a href="#skills" className="hero__link">
                My Skills
            </a>
        </div>
    </div>

    <div className="section__deco deco__left">
        <img src={shapeOne} alt="" className="shape" />
    </div>
    </div>

    <div className="section__bg-wrapper">
        <span className='bg__title'>Web Developer</span>
    </div>
  </section>
  )
}

export default Home
