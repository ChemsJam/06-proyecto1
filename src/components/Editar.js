import React from 'react'

export const Editar = ({pelicula, ConseguirPeliculas, setEditar, setListadoState}) => {

    const guardarEdicion = (e, id) =>{
        e.preventDefault();
        
        //conseguir target
        let target = e.target;

        //Buscar el indice del objeto de la pelicula a actualizar
        const peliculas_alm = ConseguirPeliculas();

        const indice = peliculas_alm.findIndex(pelicula => pelicula.id === id);

        //Crear objeto con el indice
        let pelicula_editada = {
            id,
            titulo: target.titulo.value,
            descripcion: target.descripcion.value,

        }


        peliculas_alm[indice] = pelicula_editada;

        // Guardar nuevo array de objetos en localstorage

        localStorage.setItem("peliculas", JSON.stringify(peliculas_alm));
        
        // actualizar estados
        setListadoState(peliculas_alm);
        setEditar(0);
        

    }

  return (
    <div className='edit_form'>
        <hr/>
        <h3 className='title'>Editar pelicula</h3>
        <form onSubmit={e => guardarEdicion(e, pelicula.id)}>
            <input  
                type='text'
                name='titulo'
                className='titulo_editado'
                defaultValue={pelicula.titulo}/>

            <textarea 
                name='descripcion'
                defaultValue={pelicula.descripcion}
                className='descripcion_editada'    
            />

            <input
                type='submit'
                className='editar'
                value="Actualizar"
            />

        </form>
        
    </div>
  )
}
