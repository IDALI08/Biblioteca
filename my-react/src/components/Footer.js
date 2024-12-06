import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#C29572',
        color: '#fff',
        padding: '40px 20px',
        width: '100%',
        fontFamily: '"Poppins", sans-serif',
        boxShadow: '0px -2px 8px rgba(0, 0, 0, 0.2)',
        display: 'flex',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        borderTop: '5px solid #B97F5A',
      }}
    >
      {/* Sección de contacto */}
      <div
        style={{
          flex: '1',
          padding: '20px',
          maxWidth: '600px',
        }}
      >
        <h3
          style={{
            fontSize: '20px',
            marginBottom: '20px',
            fontWeight: 'bold',
            textTransform: 'uppercase',
            letterSpacing: '1px',
          }}
        >
          Contáctanos
        </h3>
        <p style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <i
            className="fas fa-phone-alt"
            style={{ marginRight: '10px', fontSize: '18px', color: '#fff' }}
          ></i>
          <span style={{ color: '#fff' }}>(675) 878 1053</span>
        </p>
        <p style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <i
            className="fas fa-envelope"
            style={{ marginRight: '10px', fontSize: '18px', color: '#fff' }}
          ></i>
          <span style={{ color: '#fff' }}>
            bibliotecapublicamariohugomari@gmail.com
          </span>
        </p>
        <p style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
          <i
            className="fas fa-map-marker-alt"
            style={{ marginRight: '10px', fontSize: '18px', color: '#fff' }}
          ></i>
          <span style={{ color: '#fff' }}>
            Domicilio Conocido (en el Jardín Municipal), C.P. 34850
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
