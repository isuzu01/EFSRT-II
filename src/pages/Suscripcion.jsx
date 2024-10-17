import React from "react";
import SuscripcionCard from "../components/SuscripcionCard";

const Suscripcion = () => {
  return (
    <main className="container-card">
      <section className="content-card">
        <SuscripcionCard
          className={"mensual"}
          titulo={"suscripción mensual"}
          precio={"S/.39.90"}
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
