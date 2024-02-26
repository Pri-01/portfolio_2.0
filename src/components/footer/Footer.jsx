import React from 'react'
import {FaTwitter, FaFacebook,FaInstagram } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa6";
import './footer.css'
import Typed from 'typed.js';


const Footer = () => {

    const el = React.useRef(null);
    React.useEffect(() => {
      const typed = new Typed(el.current, {
        strings: [
         'Priyansu Bhattacharya',
        ],
        typeSpeed: 50,
        loop: true,
      });
  
      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

  return (
    <footer className="footer">
        <div className="footer__container container grid">
        <div className="footer__socials">
            <a href="" className="footer__social-link">
                <FaTwitter/>
            </a>
            <a href="https://www.facebook.com/priyansu.bhattacharya.79/" className="footer__social-link">
                <FaFacebook/>
            </a>
            <a href="https://www.linkedin.com/in/priyansu-bhattacharya-5b3bb425b/" className="footer__social-link">
                <FaLinkedin/>
            </a>
            <a href="https://www.instagram.com/pri__yansu_/" className="footer__social-link">
                <FaInstagram/>
            </a>
        </div>

        <p className="footer__copyright text-cs">
            Copyright&copy;  <span>2024</span> || All Rights Reserved
        </p>

        <p className="footer__copyright text-cs">
            Developed by <span><span ref={
                el
                } /></span>
        </p>
        </div>
    </footer>
  )
}

export default Footer
