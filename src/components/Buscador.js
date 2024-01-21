import React, { useState } from 'react'

export const Buscador = ({listadoState, setListadoState}) => {

  const [busqueda, setBusquedaState] = useState("");
  const [noEncontrado, setNoEncontrado] = useState(false);

  const buscarPelicula = (e) => {
    // Crear estado y actualizar 
    setBusquedaState(e.target.value)

    // Filtrar
    let peliculas_encontradas = listadoState.filter(pelicula => {
      return pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase())
    });

    if(busqueda.length <= 1 || peliculas_encontradas <= 0){
      peliculas_encontradas = JSON.parse(localStorage.getItem("peliculas"))
      setNoEncontrado(true);
    }else{
      setNoEncontrado(false)
    }

    //Actualizar estado del listado principal con lo Logrado filtrar
    setListadoState(peliculas_encontradas)
  }
  return (
    <div className="search">
          <h3 className="title">Buscador: {busqueda}</h3>
          {(noEncontrado == true && busqueda.length > 1) && (
              <span className='no-encontrado'>No se ha encontrado ninguna coincidencia</span>
            )
          }
          

          <form>
            <input 
              type="text" 
              name="busqueda" 
              id="search_field"
              autoComplete='off'
              onChange={buscarPelicula}/>
              <button>Buscar</button>
          </form>
        </div>
  )
}
