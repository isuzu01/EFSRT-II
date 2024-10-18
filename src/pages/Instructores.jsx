import React, { useState, useEffect } from "react";

import data from "../Data/Data";

import bannerMaria from '../img/maria-banner.png';
import bannerSergio from '../img/sergio-banner.png';
import bannerMagaly from '../img/magali-banner.png';
import bannerMiguel from '../img/miguel-banner.png';
import maria from  "../img/maria.png";
import sergio from  "../img/sergio.png";
import magaly from  "../img/magali.png";
import miguel from  "../img/miguel.png";

const persona = [
  { id: 1, nombre: "María Rossich", info: "Soy Licenciada en Ciencias de la Actividad física y Deporte, tengo por misión personal ayudar al mayor número de mujeres para lograr su objetivo físico y bienestar.", image: maria, fondo: bannerMaria},
  { id: 2, nombre: "Sergio Peinado", info: "Soy creador de contenido enfocado en deporte y busco inspirar/motivar a otros a alcanzar un estilo de vida saludable, y el desarrollo personal.", image: sergio, fondo: bannerSergio},
  { id: 3, nombre: "Magaly Dalix", info: "Soy Fundadora de La Sala Magali en Barcelona, he desarrollado un método innovador que combina entrenamiento físico y mental", image: magaly, fondo: bannerMagaly},
  { id: 4, nombre: "Miguel Peinado", info: "Soy emprendedor en el ámbito del fitness y la salud, doy consejos sobre entrenamiento, nutrición y estilo de vida. También busco motivar a mi audiencia a llevar una vida más activa y saludable.", image: miguel, fondo: bannerMiguel},
];

const Instructores = () => {
  const [selectedInstructor, setSelectedInstructor] = useState(null);  
  const [filteredVideos, setFilteredVideos] = useState([]); 
  
  const allVideos = data.categorias.flatMap((categoria) => 
    categoria.nombre_ejercicios.map((ejercicio) => ({
      ...ejercicio,
      categoria: categoria.categoria,
    }))
  );

  useEffect(() => {
    if (selectedInstructor) {
      const filterVideos = allVideos.filter((video) => 
        video.instructor === selectedInstructor.nombre
      );
      setFilteredVideos(filterVideos);
    } else {
      setFilteredVideos([]);
    }
  }, [selectedInstructor]);

  const currentVideos = filteredVideos;
  const instructores = [...new Set(allVideos.map((vid) => vid.instructor))];
  
  const handleVerVideos = () => {
    alert(`Mostrando videos de ${selectedInstructor.nombre}`);
  };

  return (
    <main>
      <div className="Instructor-context">
        <h1>INSTRUCTORES</h1>
        <p>
          Reunimos a los <span className="sub"> mejores instructores </span> certificados de health, fitness y
          disciplinas enfocadas en el bienestar integral para ofrecerte todo en
          un solo lugar.
        </p>
      </div>
      <div className="contenedor-Inst">
        <div className="instructores">
          {persona.map((instructor) => (
            <div key={instructor.id} className={`instructor-item-${instructor.id}`}>
              <a href={"#instructor"+(persona.id)}>
                <img
                  src={instructor.image}
                  alt={instructor.nombre}
                  className="instructor-img"
                  onClick={() => setSelectedInstructor(instructor)}
                />
              </a>
            </div>
          ))}
        </div>

        <div id={"instructor"+persona.id} className="instructor-details-container"> 
          <div className="back-img" style={{ backgroundImage: selectedInstructor ? `url(${selectedInstructor.fondo})` : 'none', height: selectedInstructor ? `80vh` : '0'  }}></div>
          {selectedInstructor ? (
            <div className={`instructor-details instructor-details-${selectedInstructor.id}`}>
              <div className="contexto">
                <div className="contexto-texto">
                  <h2>{selectedInstructor.nombre}</h2>
                  <p>{selectedInstructor.info}</p>
                </div>
                <div>
                  <button onClick={handleVerVideos}>Ver Videos</button>
                </div>
              </div>
              <div className="video">
                <h4>¡Prueba mis Rutinas!</h4>
                <div className="solovideo">
                  {currentVideos.map((video, index) => (
                    <div key={index} className="video-todo">
                      <video controls>
                        <source src={video.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p>{video.nombre} - {video.instructor} ({video.categoria})</p>
                    </div>
                  ))}
                </div>                
              </div>
              
            </div>
          ) : (
            <div className="placeholder-text">
              <p>Haz clic en un instructor para ver más detalles.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Instructores;