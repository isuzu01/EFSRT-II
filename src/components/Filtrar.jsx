import React from "react";

const Filtrar =({titulo, map, setSelected, selected, filtrado})=> {
  
  return(
    <div>
        <select onChange={(e) => setSelected(e.target.value)} value={selected}>
          <option value="">Todas</option>
          {map.map((filtrado, index) => (
            <option key={index} value={filtrado}>{filtrado}</option>
          ))}
        </select>
    </div>
  )
}

export default Filtrar