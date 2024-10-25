import React, { useState } from "react";
import SuscripcionCard from "../components/SuscripcionCard";
import IniciarSesion from "../components/IniciarSesion";

const Suscripcion = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    console.log();
    setIsModalOpen(true);
};

const closeModal = () => {
    console.log(); 
    setIsModalOpen(false);
};

  return (
    <main className="container-card">
          <IniciarSesion isOpen={isModalOpen} onClose={closeModal}/>     
      <section className="content-card">
        <SuscripcionCard
          className={"mensual"}
          titulo={"suscripción mensual"}
          precio={"S/.39.90"}
          onclick={openModal}
        >
          <li>
            Acceso ilimitado a estrenos y contenido premium para darte aún más
            variedad.
          </li>
          <li>
            Disfruta de nuestra variedad de disciplinas: Fuerza, HIIT, Cardio,
            Yoga, Meditación y Más.
          </li>
          <li>Cancela cuando quieras sin costo.</li>
        </SuscripcionCard>
        <SuscripcionCard
          className={"anual"}
          titulo={"suscripción anual"}
          precio={"S/.450.00"}
          onclick={openModal}
        >
          <li>
            Acceso ilimitado a estrenos y contenido premium para darte aún más
            variedad
          </li>
          <li>Clases de todas las disciplinas por semana.</li>
          <li>
            Acceso ilimitado a más de 1500 videos exclusivos de entrenamiento.
          </li>
          <li>Directos y talleres mensuales gratuitos.</li>
        </SuscripcionCard>
      </section>  

    </main>
  );
};

export default Suscripcion;
