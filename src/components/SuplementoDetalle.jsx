import React, { useState } from "react";
import { useParams } from "react-router-dom";
import dataSup from "../Data/DataSub";

const SuplementoDetalle = () => {
  const { suplementoId } = useParams();
  const suplementos = dataSup.Productos.find(
    (suplemento) => suplemento.id === suplementoId
  );

  const [cantidad, setCantidad] = useState(1);

  const handleChangeCantidad = (event) => {
    const nuevaCantidad = parseInt(event.target.value);
    setCantidad(nuevaCantidad);
  };

  const handlePedido = () => {
    alert(`Pedido realizado:
        Sopa: ${suplementos.nombre}
        Cantidad: ${cantidad}
        Precio Total: S/. ${suplementos.precio * cantidad}`);
    window.location.href = "/";
  };

  if (!suplementos) {
    return <div>Plato no encontrado</div>;
  }

  const precioTotal = suplementos.precio * cantidad;

  return (
    <main className="contenedor-sup-det">
      <div className="main-container">
        <div className="main-content">
          <div>
            <img
              className="product-image"
              src={suplementos.imagen_categoria}
              alt={suplementos.imagen_categoria}
            />
          </div>
          <div>
            <div>
              <p className="category">{suplementos.categoria}</p>
              <h3 className="product-name">{suplementos.nombre}</h3>
              <p className="description">
                <span className="description-label">Descripción</span>
                <br />
                {suplementos.descripcion}
              </p>
              <p className="unit-price">
                <span className="unit-price-label">
                  Precio unitario <br />
                </span>
                S/. {suplementos.precio}
              </p>
            </div>
            <div className="quantity-section">
              <label htmlFor="cantidad" className="quantity-label">
                Cantidad:
              </label>
              <input
                type="number"
                id="cantidad"
                name="cantidad"
                min="1"
                value={cantidad}
                onChange={handleChangeCantidad}
                className="quantity-input"
              />
              <p className="total-price">Precio Total:  {precioTotal}</p>
              <button onClick={handlePedido} className="order-button">
                Pedir
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SuplementoDetalle;
