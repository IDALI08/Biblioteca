import React from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from './assets/logo.jpeg'; 
import perfilIcon from './assets/perfil.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/configuracion-perfil');
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar">
      <div className="container-fluid">
        {/* Logo e Icono de Perfil */}
        <div className="d-flex align-items-center">
          <img src={logo} alt="Logo" className="profile-logo" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        {/* Título central visible solo en pantallas grandes */}
        <div className="navbar-title">
          <h5><strong>MARIO HUGO MARINO ORTIZ</strong></h5>
        </div>

        {/* Menú de navegación */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={{ color: '#ffffff' }}>Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/catalogo" style={{ color: '#ffffff' }}>Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/historial" style={{ color: '#ffffff' }}>Historial</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/libros" style={{ color: '#ffffff' }}>Libros</Link>
            </li>
          </ul>
        </div>

        {/* Icono de perfil */}
        <div className="profile d-flex align-items-center" onClick={handleProfileClick}>
          <img src={perfilIcon} alt="Perfil" className="profile-icon ms-3" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
