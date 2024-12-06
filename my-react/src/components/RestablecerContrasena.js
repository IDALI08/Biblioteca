import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RestablecerContrasena = () => {
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [confirmarContrasena, setConfirmarContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nuevaContrasena !== confirmarContrasena) {
      setError('Las contraseñas no coinciden.');
      setMensaje('');
      return;
    }

    try {
      await axios.post('/api/restablecer-contrasena', { nuevaContrasena });
      setMensaje('¡Contraseña restablecida con éxito!');
      setError('');
      setTimeout(() => navigate('/login'), 3000);
    } catch (err) {
      setError('Hubo un problema al restablecer la contraseña. Inténtalo de nuevo.');
      setMensaje('');
    }
  };

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fef6e4, #f7d9c4)",
        padding: "30px",
        maxWidth: "500px",
        margin: "40px auto",
        borderRadius: "15px",
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.2)",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        
    
        <h2
          style={{
            color: "#8b5d33",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          Restablecer Contraseña
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "#6c5240",
            marginTop: "5px",
          }}
        >
          Crea una nueva contraseña para recuperar tu acceso.
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div>
          <label style={{ display: "block", fontWeight: "500", color: "#6c5240", marginBottom: "5px" }}>
            Nueva Contraseña
          </label>
          <input
            type="password"
            value={nuevaContrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
            style={{
              padding: "12px",
              border: "1px solid #d4c4b5",
              borderRadius: "8px",
              fontFamily: "'Poppins', sans-serif",
              width: "100%",
              boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>
        <div>
          <label style={{ display: "block", fontWeight: "500", color: "#6c5240", marginBottom: "5px" }}>
            Confirmar Contraseña
          </label>
          <input
            type="password"
            value={confirmarContrasena}
            onChange={(e) => setConfirmarContrasena(e.target.value)}
            style={{
              padding: "12px",
              border: "1px solid #d4c4b5",
              borderRadius: "8px",
              fontFamily: "'Poppins', sans-serif",
              width: "100%",
              boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.1)",
            }}
            required
          />
        </div>
        <button
          type="submit"
          style={{
            padding: "12px",
            background: "linear-gradient(90deg, #e6af81, #d89261)",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
        >
          Restablecer Contraseña
        </button>
      </form>
      {mensaje && (
        <p
          style={{
            marginTop: "20px",
            color: "green",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          {mensaje}
        </p>
      )}
      {error && (
        <p
          style={{
            marginTop: "20px",
            color: "red",
            textAlign: "center",
            fontSize: "14px",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default RestablecerContrasena;
