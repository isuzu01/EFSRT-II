import React from "react";
import { useNavigate } from 'react-router-dom';
import contacto from '../img/contacto.png'

const Contacto = () => {
  
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por contactarnos');
    navigate('/'); 
  
  };
  
  return(
    <main>
      <div className="c-container">
        <div>
          <h1>¡ Contactanos !</h1>
          <p>Llena el formulario con tus datos y a la brevedad nos contactaremos contigo.</p>
        </div>
        
        <div className="c-container-content">
          <form onSubmit={handleSubmit} className="contacto">
          <div className="group">
              <label>Tu nombre</label>
              <input
                type="text"
                name="name"
                required
              />
            </div>
            <div className="group">
              <label>Tu Correo electronico</label>
              <input
                type="email"
                name="email"
                required
              />
            </div>
            <div className="group">
              <label>Tu Mensaje</label>
              <textarea
                name="message"
                required
              ></textarea>
            </div>
            <button type="">
              Enviar
            </button>
          </form>
          <div> 
            <img src={contacto} alt='contacto.png'/>
          </div>
        </div>
      </div>
    </main>
  )

};





export default Contacto;