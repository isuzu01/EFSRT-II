import React from "react";
import { Link } from "react-router-dom";

import Button from "../components/Button";
import BannerSub from "../components/BannerSub";
import data from "../Data/Data";
import arrowDownIcon from '../img/arrow-down.png'


const Inicio =() =>{
  return(
    <main className="">
      <section >
        <div className="banner-ini">
          <div className="banner-ini-content">
            <h1>
              <span style={{color: 'var(--verde)'}}>PATH</span> OF <br/>
              <span style={{color: 'var(--rosa)'}}> STRENGTH</span>
            </h1>
            <p>Tu casa es el nuevo Gym</p>
            <div>
              <Button
                titulo={'EMPIEZA AHORA'}
              />
            </div>
            <div className="arrowDown">
              <a href="#categorias">
                ver mas
                <div className="flex flex-col justify-center">
                  <img src={arrowDownIcon} alt="ver mas"/>
                </div>                
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="categorias" className="container-categ">
        <h1>CATEGORIAS</h1>
        <div className="categorias">
          {
            data.categorias.map((categoria, index) => (
              <div key={index} className={`categoria ${categoria.clase}`}>
                <Link to={`/rutinas`}>
                  <img src={categoria.imagen_categoria} alt={categoria.categoria} />
                  <p>{categoria.categoria}</p>
                </Link>
                
              </div>
            ))
          }
        </div>
      </section>
      <section className="container-inst">
        <h1>NUESTROS INSTRUCTORES</h1>
        <div className="instructores">
          {
            (() => {
              const uniqueInstructors = new Set();
              const instructorElements = [];

              data.categorias.forEach((categoria) => {
                categoria.nombre_ejercicios.forEach((ejercicio) => {
                  if (!uniqueInstructors.has(ejercicio.instructor)) {
                    uniqueInstructors.add(ejercicio.instructor);
                    instructorElements.push(
                      <div key={ejercicio.instructor} className="instructor">
                        <Link to={`/rutinas`}>
                          <img src={ejercicio.imagen_instructor} alt={ejercicio.instructor} />
                          <p>{ejercicio.instructor}</p>
                        </Link>
                      </div>
                    );
                  }
                });
              });

              return instructorElements;
            })()
          }
        </div>
      </section>
      <section>
        <BannerSub/>
      </section>
    </main>
  )
}

export default Inicio