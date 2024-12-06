import React from 'react';

function FormularioReserva() {
  const handleSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <div
      style={{
        backgroundColor: "#fef9f4", 
        padding: "30px",
        maxWidth: "700px",
        margin: "40px auto",
        borderRadius: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#8b5d33", 
          marginBottom: "20px",
        }}
      >
        Formulario de Reserva
      </h2>
      <form
        id="formulario-reserva"
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Título del Libro
          <input
            type="text"
            name="tituloLibro"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3",
              borderRadius: "5px",
              fontFamily: "'Poppins', sans-serif",
            }}
            required
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Nombre(s)
          <input
            type="text"
            name="nombre"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3",
              borderRadius: "5px",
              fontFamily: "'Poppins', sans-serif",
            }}
            required
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Apellido Paterno
          <input
            type="text"
            name="apellidoPaterno"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3",
              borderRadius: "5px",
              fontFamily: "'Poppins', sans-serif",
            }}
            required
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Apellido Materno
          <input
            type="text"
            name="apellidoMaterno"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3",
              borderRadius: "5px",
              fontFamily: "'Poppins', sans-serif",
            }}
            required
          />
        </label>
        <label style={{ display: "flex", flexDirection: "column" }}>
          Fecha de Reserva
          <input
            type="date"
            name="fechaReserva"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3",
              borderRadius: "5px",
              fontFamily: "'Poppins', sans-serif",
            }}
            required
          />
        </label>
        <div
          style={{
            gridColumn: "1 / -1", 
            textAlign: "center", // para botón
            marginTop: "20px",
          }}
        >
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              border: "none",
              backgroundColor: "#D8B38F", 
              color: "#fff",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "background-color 0.3s",
              fontFamily: "'Poppins', sans-serif",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#b08d74")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#D8B38F")}
          >
            Generar Reserva
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormularioReserva;
