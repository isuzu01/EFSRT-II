import React from "react";
import { Link } from "react-router-dom";

import logo from '../img/logo.png';
import facebook from "../img/Facebook.png";
import twitter from "../img/Twitter.png";
import youtube from "../img/Youtube.png";

const Footer = () => {
  return (
    
    <footer>
      <div class="container footer">
        <div className="iconos">
          <div>
            <img 
            className="logo logo-footer" 
            src={logo} 
            alt="path-of-strength" 
            />
          </div>

          <div className="redes">
            <Link to="https://www.facebook.com" target="_blank">
              <img className="red-so" src={facebook} alt="facebook" />
            </Link>
            <Link to="https://x.com" target="_blank">
              <img className="red-so" src={twitter} alt="twitter" />
            </Link>
            <Link to="https://www.youtube.com" target="_blank">
              <img className="red-so" src={youtube} alt="youtube" />
            </Link>
            
          </div>
        </div>

        <div className="Terminos">
          <div className="copy">
            <h5>Copyright 2024 © Path of Strength. Todos los derechos reservados </h5>
          </div>
          <div>
            <h5> Terminos y Condiciones | Politicas de Privacidad</h5>            
          </div>
        </div>
      </div>      
    </footer>

  );
};

export default Footer;
