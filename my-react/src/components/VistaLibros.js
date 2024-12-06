import React from "react";
import { useNavigate } from "react-router-dom";

const VistaLibros = () => {
  const navigate = useNavigate();

  // Función para manejar la redirección a la vista de editar libro
  const handleEditar = (id) => {
    navigate(`/editar-libro/${id}`); // Redirige a la ruta de edición con el ID
  };

  // Función para manejar la redirección a la vista de crear libro
  const handleCrear = () => {
    navigate("/crear-libro"); // Redirige a la vista de creación de libro
  };

  return (
    <div
      style={{
        backgroundColor: "#fef9f4", // Fondo cálido
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
        maxWidth: "1000px",
        margin: "40px auto",
      }}
    >
      {/* Encabezado */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h2
          style={{
            color: "#8b5d33",
            fontWeight: "bold",
            margin: 0,
          }}
        >
          Lista de Libros
        </h2>
        <button
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
          onMouseOver={(e) => (e.target.style.backgroundColor = "#b08d74")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#D8B38F")}
          onClick={handleCrear} // Se agrega el manejador para redirigir
        >
          Agregar Libro
        </button>
      </div>

      {/* Tabla de libros */}
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          textAlign: "left",
          color: "#4d3e36",
        }}
      >
        <thead>
          <tr>
            <th style={headerCellStyle}>Título</th>
            <th style={headerCellStyle}>Autor</th>
            <th style={headerCellStyle}>ISBN</th>
            <th style={headerCellStyle}>Categoría</th>
            <th style={headerCellStyle}>Cantidad</th>
            <th style={headerCellStyle}>Disponible</th>
            <th style={headerCellStyle}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {[ 
            { id: 1, titulo: "Título 1", autor: "Autor 1", isbn: "12345", categoria: "Categoría 1", cantidad: 10, disponible: "Sí" },
            { id: 2, titulo: "Título 2", autor: "Autor 2", isbn: "67890", categoria: "Categoría 2", cantidad: 5, disponible: "No" },
          ].map((libro) => (
            <tr key={libro.id}>
              <td style={cellStyle}>{libro.titulo}</td>
              <td style={cellStyle}>{libro.autor}</td>
              <td style={cellStyle}>{libro.isbn}</td>
              <td style={cellStyle}>{libro.categoria}</td>
              <td style={cellStyle}>{libro.cantidad}</td>
              <td style={cellStyle}>{libro.disponible}</td>
              <td style={cellStyle}>
                <button
                  style={buttonStyle}
                  onClick={() => handleEditar(libro.id)} // Aquí se redirige a la vista de edición
                >
                  Editar
                </button>
                <button
                  style={{
                    ...buttonStyle,
                    backgroundColor: "#FF6F61",
                  }}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Estilos comunes
const headerCellStyle = {
  borderBottom: "2px solid #e0d5c3",
  padding: "10px",
  fontWeight: "bold",
  color: "#8b5d33",
};

const cellStyle = {
  padding: "10px",
  borderBottom: "1px solid #e0d5c3",
};

const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "#D8B38F",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  fontSize: "14px",
  fontWeight: "bold",
  cursor: "pointer",
  marginRight: "5px",
  transition: "background-color 0.3s",
};

export default VistaLibros;
