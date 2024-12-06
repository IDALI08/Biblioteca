import React, { useState } from "react";

const CrearLibro = () => {
  const [libro, setLibro] = useState({
    titulo: "",
    autor: "",
    isbn: "",
    categoria: "",
    cantidad: "",
    disponible: "Sí",
  });

  // Función para manejar el cambio en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibro((prevLibro) => ({
      ...prevLibro,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Libro creado:", libro);
    
  };

  return (
    <div
      style={{
        backgroundColor: "#fef9f4",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "1000px",
        margin: "40px auto",
      }}
    >
      <h2
        style={{
          color: "#8b5d33",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Agregar Nuevo Libro
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="titulo"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#8b5d33",
            }}
          >
            Título
          </label>
          <input
            type="text"
            id="titulo"
            name="titulo"
            value={libro.titulo}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="autor"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#8b5d33",
            }}
          >
            Autor
          </label>
          <input
            type="text"
            id="autor"
            name="autor"
            value={libro.autor}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="isbn"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#8b5d33",
            }}
          >
            ISBN
          </label>
          <input
            type="text"
            id="isbn"
            name="isbn"
            value={libro.isbn}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="categoria"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#8b5d33",
            }}
          >
            Categoría
          </label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={libro.categoria}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="cantidad"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#8b5d33",
            }}
          >
            Cantidad
          </label>
          <input
            type="number"
            id="cantidad"
            name="cantidad"
            value={libro.cantidad}
            onChange={handleChange}
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="disponible"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
              color: "#8b5d33",
            }}
          >
            Disponible
          </label>
          <select
            id="disponible"
            name="disponible"
            value={libro.disponible}
            onChange={handleChange}
            style={inputStyle}
          >
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
        </div>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            backgroundColor: "#D8B38F",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Guardar Libro
        </button>
      </form>
    </div>
  );
};

// Estilo para los inputs
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "5px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  fontSize: "16px",
};

export default CrearLibro;
