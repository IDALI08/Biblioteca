import React from "react";

function FormularioPrestamo() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para enviar el formulario
  };

  return (
    <div
      style={{
        backgroundColor: "#fef9f4", // Fondo cálido
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
          color: "#8b5d33", // Marrón oscuro
          marginBottom: "20px",
        }}
      >
        Formulario de Préstamo
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          Nombre(s)
          <input
            type="text"
            name="nombre"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3", // Borde suave
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
          Domicilio
          <input
            type="text"
            name="domicilio"
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
          Tel.
          <input
            type="tel"
            name="telefono"
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
          Fecha de Préstamo
          <input
            type="date"
            name="fechaPrestamo"
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
          Fecha de Devolución
          <input
            type="date"
            name="fechaDevolucion"
            style={{
              padding: "10px",
              border: "1px solid #e0d5c3",
              borderRadius: "5px",
              fontFamily: "'Poppins', sans-serif",
            }}
            required
          />
        </label>
      </form>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <input type="checkbox" required />
        <p
          style={{
            marginLeft: "10px",
            color: "#8b5d33",
            fontSize: "14px",
            maxWidth: "90%",
          }}
        >
          Me responsabilizo a entregar en buen estado y a tiempo el libro
          solicitado.
        </p>
      </div>
      <button
        type="submit"
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          border: "none",
          backgroundColor: "#D8B38F", // Beige cálido
          color: "#fff",
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background-color 0.3s",
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          fontFamily: "'Poppins', sans-serif",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#b08d74")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#D8B38F")}
      >
        Generar Ficha
      </button>
    </div>
  );
}

export default FormularioPrestamo;
