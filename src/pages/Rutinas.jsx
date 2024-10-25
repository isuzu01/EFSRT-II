import React, { useEffect, useMemo, useState } from "react";

import data from "../Data/Data";
import Filtrar from "../components/Filtrar";
import iconBuscar from "../img/icon-buscar.png";
import { Link } from "react-router-dom";

const Rutinas = () => {
  const [videosPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const [buscarItem, setBuscarItem] = useState("");
  const [filteredVideos, setFilteredVideos] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [selectedInstructor, setSelectedInstructor] = useState("");
  const [selectedNivel, setSelectedNivel] = useState("");

 

  const allVideos = useMemo(()=>{
    const allVideos1 = data.categorias.flatMap((categoria) =>
      categoria.nombre_ejercicios.map((ejercicio) => ({
        ...ejercicio,
        clase: categoria.clase,
        categoria: categoria.categoria,
      }))
    );
    return allVideos1;
  },[])


    console.log('fooooooooool')

  useEffect(() => {
    const filterVideos = allVideos.filter((video) => {
      const matchesCategoria =
        selectedCategoria === "" || video.categoria === selectedCategoria;
      const matchesInstructor =
        selectedInstructor === "" || video.instructor === selectedInstructor;
      const matchesNivel =
        selectedNivel === "" || video.nivel === selectedNivel;
      const matchesSearch =
        buscarItem === "" ||
        video.nombre.toLowerCase().includes(buscarItem.toLowerCase());
      return (
        matchesCategoria && matchesInstructor && matchesSearch && matchesNivel
      );
    });

    setFilteredVideos(filterVideos);
  }, [selectedCategoria, selectedInstructor, selectedNivel, buscarItem, allVideos]);

  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = filteredVideos.slice(
    indexOfFirstVideo,
    indexOfLastVideo
  );

  const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const categorias = [...new Set(data.categorias.map((cat) => cat.categoria))];
  const instructores = [...new Set(allVideos.map((vid) => vid.instructor))];
  const niveles = [...new Set(allVideos.map((vid) => vid.nivel))];

  return (
    <main>
      <section className="cont-filtros">
        <div className="buscador">
          <h1>Rutinas</h1>
          <div>
            <div className="lupa">
              <img src={iconBuscar} alt="buscar" />
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
            titulo={"categoria"}
            map={categorias}
            setSelected={setSelectedCategoria}
            selected={selectedCategoria}
            filtrado={"categoria"}
          />
          <Filtrar
            titulo={"instructor"}
            map={instructores}
            setSelected={setSelectedInstructor}
            selected={selectedInstructor}
            filtrado={"instructor"}
          />
          <Filtrar
            titulo={"nivel"}
            map={niveles}
            setSelected={setSelectedNivel}
            selected={selectedNivel}
            filtrado={"nivel"}
          />
        </div>
      </section>

      <section className="videos-list">
        <div className="videos-grid">
          {currentVideos.map((video) => (
            <Link  
              key={video.id}
              id={video.nombre} 
              to={`/rutinas/${video.clase}/${video.id}`}
            >
              <div className="video-item">
                <video controls>
                  <source src={video.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p>
                  {video.nombre} - {video.instructor} ({video.categoria})
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="pagination">
        {[...Array(totalPages).keys()].map((page) => (
          <button
            key={page}
            onClick={() => paginate(page + 1)}
            className={currentPage === page + 1 ? "active" : ""}
          >
            {page + 1}
          </button>
        ))}
      </div>
    </main>
  );
};

export default Rutinas;