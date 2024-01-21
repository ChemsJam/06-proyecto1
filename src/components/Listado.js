import React, { useCallback, useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

  const [editar, setEditar] = useState(0)

  // const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    ConseguirPeliculas();

  }, []);


  const ConseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("peliculas"));

    setListadoState(peliculas)
    return peliculas;
  }

  const borrarPelicula = (id) => {
    //Conseguir las peliculas almacenadas
    let peliculas_alm = ConseguirPeliculas();

    //filtrar las paliculas para eliminar la que queremos
    let nuevo_array_peliculas = peliculas_alm.filter(pelicula => pelicula.id !== parseInt(id));
    //Actualizar estado del listado
    setListadoState(nuevo_array_peliculas)
    //Actualizar datos en localStorage
    localStorage.setItem("peliculas", JSON.stringify(nuevo_array_peliculas))

  }
  return (
    <section className="content">
      {listadoState != null ?
        listadoState.map(pelicula => {
          return (
            <article
              key={pelicula.id}
              className="peli-item">
              <h3 className="title">{pelicula.titulo}</h3>
              <p className="description">
                {pelicula.descripcion}
              </p>
              <button className="edit" onClick={() => { setEditar(pelicula.id) }}>Editar</button>
              <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Eliminar</button>

              {/*Mostrar alert para editar*/}
              {editar === pelicula.id && (
                <Editar
                  pelicula={pelicula}
                  ConseguirPeliculas={ConseguirPeliculas}
                  setEditar={setEditar}
                  setListadoState={setListadoState}
                />
              )}
            </article>
          )
        })
        : <h2>No hay ninguna pelicula en la pagina :O</h2>
      }

    </section>
  )
}
