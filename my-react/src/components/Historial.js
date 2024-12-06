import React from 'react';

function Historial() {
  // Datos de ejemplo para el historial
  const historialData = [
    { libro: 'De la tierra a la luna', autor: 'Julio Verne', fecha: '05/09/24 - 05/10/24' },
    // Puedes agregar más filas aquí si es necesario
  ];

  return (
    <div style={{
      backgroundColor: '#fef9f4', // Fondo cálido
      padding: '20px',
      maxWidth: '800px',
      margin: '20px auto',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    }}>
      <h2 style={{ textAlign: 'center', color: '#8b5d33', fontFamily: 'Poppins, sans-serif' }}>HISTORIAL</h2>
      
      {/* Tabla de Reservas */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#8b5d33', fontFamily: 'Poppins, sans-serif', marginBottom: '10px' }}>Reservas</h3>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          <thead>
            <tr>
              <th style={{
                backgroundColor: '#D8B38F', // Color beige
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Libro</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Autor</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Fecha</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Estado</th>
            </tr>
          </thead>
          <tbody>
            {historialData.map((entry, index) => (
              <tr key={index} style={{ borderBottom: '1px solid #e0d5c3' }}>
                <td style={{ padding: '10px' }}>{entry.libro}</td>
                <td style={{ padding: '10px' }}>{entry.autor}</td>
                <td style={{ padding: '10px' }}>{entry.fecha}</td>
                <td style={{ padding: '10px', color: '#4CAF50' }}>Activo</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tabla de Préstamos */}
      <div style={{ marginTop: '20px' }}>
        <h3 style={{ color: '#8b5d33', fontFamily: 'Poppins, sans-serif', marginBottom: '10px' }}>Préstamos</h3>
        <table style={{
          width: '100%',
          borderCollapse: 'collapse',
          fontFamily: 'Poppins, sans-serif',
          backgroundColor: '#ffffff',
          borderRadius: '8px',
          overflow: 'hidden',
        }}>
          <thead>
            <tr>
              <th style={{
                backgroundColor: '#D8B38F', // Color beige
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Libro</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Autor</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Fecha Préstamo</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Estado de Devolución</th>
              <th style={{
                backgroundColor: '#D8B38F',
                color: 'white',
                padding: '10px',
                textAlign: 'left',
              }}>Fecha Devolución</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding: '10px' }}>De la tierra a la luna</td>
              <td style={{ padding: '10px' }}>Julio Verne</td>
              <td style={{ padding: '10px' }}>05/09/24</td>
              <td style={{ padding: '10px', color: '#f44336' }}>Devuelto</td>
              <td style={{ padding: '10px' }}>05/10/24</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Historial;
