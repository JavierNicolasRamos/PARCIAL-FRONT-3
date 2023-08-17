import React, { useState } from "react";
import "./styles/Form.css"; // Import your CSS file for styling

function Form({ onAddPelicula }) {
  const [titulo, setTitulo] = useState("");
  const [director, setDirector] = useState("");
  const [tituloError, setTituloError] = useState("");
  const [directorError, setDirectorError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (titulo.trim().length < 3 || titulo.trim().startsWith(" ")) {
      setTituloError(
        "El título debe tener al menos 3 caracteres y no debe comenzar con espacio en blanco."
      );
      return;
    }

    if (director.length < 6) {
      setDirectorError("El nombre del director debe tener al menos 6 caracteres.");
      return;
    }

    onAddPelicula({ titulo, director });

    setTitulo("");
    setDirector("");
    setTituloError("");
    setDirectorError("");
  };

  return (
    <form onSubmit={handleSubmit} className="minimalist-form">
      <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input
          type="text"
          id="titulo"
          placeholder="Ingrese el título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        {tituloError && <p className="error">{tituloError}</p>}
      </div>
      <div className="form-group">
        <label htmlFor="director">Director:</label>
        <input
          type="text"
          id="director"
          placeholder="Ingrese el director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        {directorError && <p className="error">{directorError}</p>}
      </div>
      <button type="submit" className="submit-button">
        Enviar
      </button>
    </form>
  );
}

export default Form;