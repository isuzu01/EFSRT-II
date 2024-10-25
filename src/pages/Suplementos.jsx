import React, { useEffect, useMemo, useState } from "react";
import dataSup from "../Data/DataSub";
import Filtrar from "../components/Filtrar";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import BannerSub from "../components/BannerSub";

const Suplementos = () => {
  const [filtersuplemento, setfiltersuplemento] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");

  const allSuplementos = useMemo(() => {
    const allSuplementos1 = dataSup.Productos.map((categoria) => ({
      ...categoria,
    }));

    return allSuplementos1;
  }, []);

  useEffect(() => {
    const filtersuplemento = allSuplementos.filter((categorias) => {
      const matchesCategoria =
        selectedCategoria === "" || categorias.categoria === selectedCategoria;

      return matchesCategoria;
    });

    setfiltersuplemento(filtersuplemento);
  }, [selectedCategoria, allSuplementos]);

  const categorias = [
    ...new Set(dataSup.Productos.map((cat) => cat.categoria)),
  ];
  return (
    <main className="con">
      <section>
        <div className="filtros suple ">
          <h1>Suplementos</h1>

          <Filtrar
            titulo={"categoria"}
            map={categorias}
            setSelected={setSelectedCategoria}
            selected={selectedCategoria}
            filtrado={"categoria"}
          />
        </div>
      </section>
      <section>
        <div className="contenedorImg1">
          {filtersuplemento.map((x) => (
            <div key={x.id} id={x.id} className=" contenImg">
              <div className="imagenSup">
                <img src={x.imagen_categoria} alt={x.categoria} />
              </div>
              <div className="supDes">
                <p>
                  {x.nombre} ({x.categoria})
                </p>
                <p className="span">{x.precio}</p>
              </div>

              <Link to={`/suplementos/${x.id}`}>
                <Button clasname="btnSup" titulo={"Ver Producto"} />
              </Link>
            </div>
          ))}
        </div>
      </section>
      <section>
        <BannerSub/>
      </section>
    </main>
  );
};

export default Suplementos;
