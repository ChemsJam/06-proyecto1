import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Add = ({setListadoState}) => {

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

        
        setListadoState(elementos =>{
            return [...elementos, pelicula]
        });

        //Guardar en el almacenamiento local   
        GuardarEnStorage("peliculas", pelicula);
        
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
