export const GuardarEnStorage = (clave, elemento) =>{

    //Conseguir los elementos que ya tenemos en LocalStorage
    let elementos = JSON.parse(localStorage.getItem(clave));

    //Comprobar si es array
    if(Array.isArray(elementos)){
        //Añadir un elemento nuevo
        elementos.push(elemento)
    }else{
        //Crear un array para añadir el elemento
        elementos = [elemento]
    }

    localStorage.setItem(clave, JSON.stringify(elementos))
    //Guardar en el LocalStorage

    //Devolver objeto guardado
    return elemento;
}