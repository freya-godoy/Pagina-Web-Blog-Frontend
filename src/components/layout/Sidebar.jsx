import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [buscar, setBuscar] = useState("");
  const navegar = useNavigate();

  const hacerBUsqueda = (e) =>{
    e.preventDefault();
    let mi_busqueda = e.target.search_field.value;
    navegar("/buscar/"+mi_busqueda, {remplace:true})
  }
  return (
    <aside className="lateral">
      <div className="search">
        <h3 className="title">Buscador</h3>
        <form onSubmit={hacerBUsqueda}>
          <input type="text" name="search_field" />
          <input type="submit" id="search" value="Buscar"></input>
        </form>
      </div>

      {/* <div className="add">
        <h3 className="title">Añadir pelicula</h3>
        <form>
          <input type="text" id="title" placeholder="Titulo" />
          <textarea id="description" placeholder="Descripción"></textarea>
          <input type="submit" id="save" value="Guardar" />
        </form>
      </div> */}
    </aside>
  );
};

export default Sidebar;
