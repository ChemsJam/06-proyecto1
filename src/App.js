import logo from './logo.svg';
import './App.css';
import { Listado } from './components/Listado';
import { Buscador } from './components/Buscador';
import { Add } from './components/Add';
import { useState } from 'react';


function App() {

  const [listadoState, setListadoState] = useState ([]);
    
  return (
    <div className="layout">
      {/* Cabecera */}
      <header className="header">
        <div className="logo">
          <div className="play"></div>
        </div>
        <h1>Mis Peliculas</h1>
      </header>

      <nav className="nav">
        <ul>
          <li><a href="/#">Inicio</a></li>
          <li><a href="/#">Peliculas</a></li>
          <li><a href="/#">Blog</a></li>
          <li><a href="/#">Contacto</a></li>
        </ul>
      </nav>

      {/* Contenido */}

      <Listado listadoState={listadoState} setListadoState={setListadoState}/>

      {/* barra lateral */}
      <aside className="lateral">
        <Buscador />
        <Add setListadoState={setListadoState}/>
      </aside>

      {/* Pie de pagina */}
      <footer className="footer">
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, at natus cum id facere sit nihil quam
          suscipit voluptate dicta, error quod ut sapiente impedit vel eius hic ex! Assumenda!</h3>
      </footer>
    </div>
  );
}

export default App;
