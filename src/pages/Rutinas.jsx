import React, { useEffect, useState } from "react";

import data from "../Data/Data";
import Filtrar from "../components/Filtrar";
import iconBuscar from '../img/icon-buscar.png'
import { Link } from "react-router-dom";

const Rutinas = () =>{
  const [videosPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1); 
  const [buscarItem, setBuscarItem] = useState(''); 
  const [filteredVideos, setFilteredVideos] = useState([]); 
  const [selectedCategoria, setSelectedCategoria] = useState(''); 
  const [selectedInstructor, setSelectedInstructor] = useState(''); 
  const [selectedNivel, setSelectedNivel] = useState('');

  const allVideos = data.categorias.flatMap((categoria) => 
    categoria.nombre_ejercicios.map((ejercicio) => ({
      ...ejercicio,
      categoria: categoria.categoria,
    }))
  );

  useEffect(() => {
    const filterVideos = allVideos.filter((video) => {
      const matchesCategoria = selectedCategoria === '' || video.categoria === selectedCategoria;
      const matchesInstructor = selectedInstructor === '' || video.instructor === selectedInstructor;
      const matchesNivel = selectedNivel ==='' || video.nivel === selectedNivel;
      const matchesSearch = buscarItem === '' || video.nombre.toLowerCase().includes(buscarItem.toLowerCase());
      return matchesCategoria && matchesInstructor && matchesSearch && matchesNivel;
    });

    setFilteredVideos(filterVideos);
  }, [selectedCategoria, selectedInstructor,selectedNivel, buscarItem]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categorias = [...new Set(data.categorias.map((cat) => cat.categoria))];
  const instructores = [...new Set(allVideos.map((vid) => vid.instructor))];
  const niveles = [...new Set(allVideos.map((vid) => vid.nivel))];


  return(
    <main>
    <section className="cont-filtros">
      <div className="buscador">
        <h1>Rutinas</h1>
        <div>
        <div className="lupa">
          <img src={iconBuscar} alt="buscar"/>
        </div>
          
          <input 
            type="text" 
            placeholder="Buscar ejercicio..." 
            value={buscarItem}
            onChange={(e) => setBuscarItem(e.target.value)}
          />
        </div>
      </div>
      
      <div className="filtros">

        <Filtrar
          titulo={'categoria'}
          map={categorias}
          setSelected={setSelectedCategoria}
          selected={selectedCategoria}
          filtrado={'categoria'}
        />
         <Filtrar
          titulo={'instructor'}
          map={instructores}
          setSelected={setSelectedInstructor}
          selected={selectedInstructor}
          filtrado={'instructor'}
        />
        <Filtrar
          titulo={'nivel'}
          map={niveles}
          setSelected={setSelectedNivel}
          selected={selectedNivel}
          filtrado={'nivel'}
        />
        
      </div>
    </section>

      <section className="videos-list">
        <div className="videos-grid">
          {currentVideos.map((video, index) => (
            <Link>
               <div key={index} className="video-item">
            {/*
            <video controls>
                <source 
                  src={video.video} 
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
             <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${video.video}`}
              title={video.nombre}
              allow="picture-in-picture"
              allowFullScreen
            ></iframe>
             */}
              <div>
                <img
                  src={video.imagen_ejercicio}
                  alt={video.nombre}
                />
              </div>
              <p>{video.nombre} - {video.instructor} ({video.categoria})</p>
            </div>
            </Link>
           
          ))}
        </div>
      </section>


      <div className="pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <button key={page} onClick={() => paginate(page + 1)} className={currentPage === page + 1 ? 'active' : ''}>
            {page + 1}
          </button>
        ))}
      </div>
    </main>
  )
}

export default Rutinas