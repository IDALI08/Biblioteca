import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResultadoBus.css";

const ResultadoBus = () => {
  const navigate = useNavigate();
  const [showActions, setShowActions] = useState(false); // Estado para mostrar la columna de acción

  const handleReservar = () => {
    // Redirige al formulario de reserva
    navigate("/formulario-reserva");
  };

  const handlePedirPrestado = () => {
    // Redirige al formulario de préstamo
    navigate("/formulario-prestamo");
  };

  return (
    <div className="resultado-bus-container">
      <h2 className="resultado-title">Resultados de la búsqueda</h2>
      <table className="resultado-table">
        <thead>
          <tr>
            <th>Autor</th>
            <th>Título</th>
            {showActions && <th>Acción</th>} {/* Solo muestra la columna "Acción" si showActions es true */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Autor del libro…</td>
            <td>Título del libro…</td>
            {showActions && (
              <td>
                <button className="btn reservar-btn" onClick={handleReservar}>
                  Reservar
                </button>
                <button className="btn pedir-prestado-btn" onClick={handlePedirPrestado}>
                  Pedir prestado
                </button>
              </td>
            )}
          </tr>
          {/* Agrega más filas según sea necesario */}
        </tbody>
      </table>
      {/* Botón de "Reservar" */}
      {!showActions && (
        <button
          onClick={() => setShowActions(true)} // Activa la columna de acción
          style={{ marginTop: "20px", padding: "8px 16px" }}
        >
          Reservar
        </button>
      )}
    </div>
  );
};

export default ResultadoBus;
