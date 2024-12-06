import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarLibro = () => {
  const { id } = useParams();
  const [libro, setLibro] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const libroMock = {
      id,
      titulo: "Título de prueba",
      autor: "Autor de prueba",
      isbn: "1234567890",
      categoria: "Novela",
      cantidad: "5",
    };
    setLibro(libroMock);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLibro({ ...libro, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Libro actualizado:", libro);
    navigate("/libros");
  };

  if (!libro) {
    return <p style={{ textAlign: "center", color: "#8b5d33" }}>Cargando datos...</p>;
  }

  return (
    <div
      style={{
        backgroundColor: "#fef9f4",
        padding: "50px",
        maxWidth: "900px",
        margin: "60px auto",
        borderRadius: "15px",
        boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.15)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#8b5d33",
          fontWeight: "bold",
          fontSize: "30px",
          marginBottom: "40px",
        }}
      >
        Editar Información del Libro
      </h2>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold", marginBottom: "10px", color: "#8b5d33" }}>
              Título:
            </span>
            <input
              type="text"
              name="titulo"
              value={libro.titulo}
              onChange={handleChange}
              style={{
                padding: "15px",
                border: "1px solid #e0d5c3",
                borderRadius: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
              required
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold", marginBottom: "10px", color: "#8b5d33" }}>
              Autor:
            </span>
            <input
              type="text"
              name="autor"
              value={libro.autor}
              onChange={handleChange}
              style={{
                padding: "15px",
                border: "1px solid #e0d5c3",
                borderRadius: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
              required
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold", marginBottom: "10px", color: "#8b5d33" }}>
              ISBN:
            </span>
            <input
              type="text"
              name="isbn"
              value={libro.isbn}
              onChange={handleChange}
              style={{
                padding: "15px",
                border: "1px solid #e0d5c3",
                borderRadius: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
              required
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold", marginBottom: "10px", color: "#8b5d33" }}>
              Categoría:
            </span>
            <input
              type="text"
              name="categoria"
              value={libro.categoria}
              onChange={handleChange}
              style={{
                padding: "15px",
                border: "1px solid #e0d5c3",
                borderRadius: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
              required
            />
          </label>
          <label style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: "bold", marginBottom: "10px", color: "#8b5d33" }}>
              Cantidad:
            </span>
            <input
              type="number"
              name="cantidad"
              value={libro.cantidad}
              onChange={handleChange}
              style={{
                padding: "15px",
                border: "1px solid #e0d5c3",
                borderRadius: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "16px",
              }}
              required
              min="1"
            />
          </label>
        </div>
        <button
          type="submit"
          style={{
            marginTop: "40px",
            padding: "15px 40px",
            border: "none",
            backgroundColor: "#D8B38F",
            color: "#fff",
            borderRadius: "10px",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
            transition: "background-color 0.3s",
            display: "block",
            margin: "0 auto",
            fontFamily: "'Poppins', sans-serif",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#b08d74")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#D8B38F")}
        >
          Guardar Cambios
        </button>
      </form>
    </div>
  );
};

export default EditarLibro;
