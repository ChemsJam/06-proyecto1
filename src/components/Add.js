import React, { useState } from 'react'

export const Add = () => {

    const tituloComponente = "Añadir pelicula";

    const [peliState, setPeliState] = useState({
        titulo: "",
        descripcion: ""
    })

    const { titulo, descripcion } = peliState;

    const obtenerDatos = e => {
        e.preventDefault();
        //Obtener los datos del formulario
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Creamos el objeto
        let pelicula = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        
        //Guardamos el estado
        setPeliState(pelicula)

        //Guardar en el almacenamiento local
        guardarEnStorage(pelicula)
    }

        const guardarEnStorage = pelicula =>{

            //Conseguir los elementos que ya tenemos en LocalStorage
            let elementos = JSON.parse(localStorage.getItem("peliculas"));

            //Comprobar si es array
            if(Array.isArray(elementos)){
                //Añadir un elemento nuevo
                elementos.push(pelicula)
            }else{
                //Crear un array para añadir el elemento
                elementos = [pelicula]
            }

            localStorage.setItem("peliculas", JSON.stringify(elementos))
            //Guardar en el LocalStorage

            //Devolver objeto guardado
            return pelicula;
        }

    return (    
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>
            {(titulo && descripcion) && "Creaste la pelicula: " + titulo}
            <form onSubmit={obtenerDatos}>
                <input
                    type="text"
                    id='titulo'
                    name="titulo" />

                <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="30"
                    rows="10"></textarea>
                <input type="submit" name="Guardar" />
            </form>
        </div>
    )
}
