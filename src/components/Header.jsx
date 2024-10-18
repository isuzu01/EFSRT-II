import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from '../img/logo.png';
import NavBarItem from './NavBarItem';
import Button from "./Button";

const Header = ({openModal}) =>{
  const[isActive, setIsActive] = useState('')
  
  const handleClick = (namae) => {
    setIsActive(namae)
  }


  return(
    <header >
      <div className="container header">
        <div>
          <Link 
            to={'/'}
            onClick={() => handleClick('inicio')}
          >
            <img
              className="logo logo-header"
              src={logo}
              alt="path-of-strength"
            />
          </Link>
        </div>

        <nav>
          <ul>
            <NavBarItem
              url='/'
              titulo ='Inicio'
              className={`${isActive === 'inicio' ? 'iactivo' : 'noactivo'}`}
              onClick={() => handleClick('inicio')}
            />
            <NavBarItem
              url='/instructores'
              titulo ='instructores'
              className={`${isActive === 'instructores' ? 'iactivo' : 'noactivo'}`}
              onClick={() => handleClick('instructores')}
            />
            <NavBarItem
              url='/rutinas'
              titulo ='Rutinas'
              className={`${isActive === 'rutina' ? 'iactivo' : 'noactivo'}`}
              onClick={() => handleClick('rutina')}
            />
            <NavBarItem
              url='/suplementos'
              titulo ='Suplementos'
              className={`${isActive === 'suplementos' ? 'iactivo' : 'noactivo'}`}
              onClick={() => handleClick('suplementos')}
            />
            <NavBarItem
              url='/contacto'
              titulo ='Contacto'
              className={`${isActive === 'contacto' ? 'iactivo' : 'noactivo'}`}
              onClick={() => handleClick('contacto')}
            />
            <NavBarItem
              url='/suscripcion'
              titulo ='Suscripción'
              className={`${isActive === 'suscripcion' ? 'iactivo' : 'noactivo'}`}
              onClick={() => handleClick('suscripcion')}
            />
             <Button
             titulo={'Iniciar Sesión'}
             onclick={openModal}
             clasname={'login-btn'}
             ></Button>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header