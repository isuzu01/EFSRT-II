import React from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const BannerSub = ()=>{
  const navigate = useNavigate()
  const handleClick = () =>{
      navigate('/suscripcion')
  }
  return(
    <div className="container-bannerSub">
      <div className="bannerSub">
        <div>
        <h1>¡SUSCRIBETE AHORA!</h1>
        <p>Da el paso y empieza a transformar tu vida</p>
      </div>
      <div>
        <Button
          titulo={'QUIERO UNIRME'}
          onclick={handleClick}
          clasname={'boton-bs'}
        />
      </div>
      </div>
      
    </div>
  )
}

export default BannerSub