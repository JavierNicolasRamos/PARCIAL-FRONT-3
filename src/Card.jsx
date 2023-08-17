import React from "react";
import "./Card.css";

function Card({ peliculas }) {
  return (
    <div className="card-container">
      <h2>Películas</h2>
      {peliculas.map((pelicula, index) => (
        <div key={index} className="card">
          <h3 className="card-title">
            Título: {pelicula.titulo}
          </h3>
          <p className="card-content">
            Director: {pelicula.director}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Card;