import React from "react";

import data from "../Data/Data";
import { useParams } from "react-router-dom";
import Button from "./Button";

const VideoDetalle = () => {
  const { categoriaId, videoId } = useParams();
  const categoria = data.categorias.find((cat) => cat.clase === categoriaId);
  const ejercicio = categoria.nombre_ejercicios.find(
    (ejercicio) => ejercicio.id === videoId
  );

  if (!ejercicio) {
    return <p>Video no encontrado</p>;
  }

  return (
    <main>
      <div className="contenedor-video">
        <div>
          <div className="video-d">
            <video controls>
              <source src={ejercicio.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <h3>{ejercicio.nombre} </h3>
            <div className="inst-perfil">
              <div>
                <img
                  src={ejercicio.imagen_instructor}
                  alt={ejercicio.imagen_instructor}
                />
              </div>
              <h4>{ejercicio.instructor}</h4>
            </div>
            <p>{ejercicio.descripcion}</p>
            <Button clasname="cate-btn" titulo={categoria.categoria} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default VideoDetalle;
