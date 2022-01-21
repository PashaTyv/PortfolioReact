import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";

function Footer () {
   return (
<footer className="page-footer">
      <div className="container">
        <div className="social-icons">
          <a href="https://www.facebook.com/pasha.tyv"><i  title="Facebook"><AiFillFacebook/></i></a>
          <a href="https://www.instagram.com/pashatyv/"><i 
              title="Instagram"><AiFillInstagram/></i></a>
        </div>
      </div>
    </footer>
   )
}

export default Footer;
