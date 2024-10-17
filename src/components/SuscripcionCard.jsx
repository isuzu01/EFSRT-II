import React from "react";
import Button from "./Button";

const SuscripcionCard = ({className, titulo, children, precio, openModal}) => {

  return(
    <div className={`card ${className}`}>
      <h1>
        {titulo}
      </h1>
      <ul>
        {children}
      </ul>
      
      <div className="cont-card-btn">
        <p>{precio}</p>
        <Button
          onclick={openModal}
          titulo={'SUSCRIBIRSE'}
          clasname={'card-btn'}
        />
      </div>
    </div>
  )
}

export default SuscripcionCard