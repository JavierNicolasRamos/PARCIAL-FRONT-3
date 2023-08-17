import { useState } from 'react'
import Form from './Form'
import Card from './Card';
import './App.css'

function App() {
  const [peliculas,setPeliculas]=useState([]);

  const addPeliculas = (pelicula)=>{
    setPeliculas([...peliculas,pelicula]);
  };
  
  
  
  return (
    <div className='App'>
      <h1>Registro de peliculas</h1>
      <Form onAddPelicula={addPeliculas}/>
      <Card peliculas={peliculas}/>
      
    </div>
  )
}

export default App
