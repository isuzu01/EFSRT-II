import React from "react";
import Button from "./Button";

const SuscripcionCard = ({className, titulo, children, precio, onclick}) => {

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
          onclick={onclick}
          titulo={'SUSCRIBIRSE'}
          clasname={'card-btn'}
        />
      </div>
    </div>
  )
}

export default SuscripcionCard