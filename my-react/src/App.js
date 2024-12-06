import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Inicio from './components/Inicio';
import ResultadoBus from './components/ResultadoBus';
import FormularioReserva from './components/FormularioReserva';
import FormularioPrestamo from './components/FormularioPrestamo';
import Catalogo from './components/Catalogo';
import Historial from './components/Historial';
import ConfiguracionPerfil from './components/ConfiguracionPerfil';
import Login from './components/Login';
import Registro from './components/Registro';
import VistaLibros from './components/VistaLibros';
import NotFound from './components/NotFound';
import RestablecerContrasena from './components/RestablecerContrasena.js';
import EditarLibro from './components/EditarLibro';
import CrearLibro from './components/CrearLibro'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/resultado-busqueda" element={<ResultadoBus />} />
            <Route path="/formulario-reserva" element={<FormularioReserva />} />
            <Route path="/formulario-prestamo" element={<FormularioPrestamo />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/historial" element={<Historial />} />
            <Route path="/configuracion-perfil" element={<ConfiguracionPerfil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/libros" element={<VistaLibros />} />
            <Route path="/crear-libro" element={<CrearLibro />} /> {/* Nueva ruta */}
            <Route path="/editar-libro/:id" element={<EditarLibro />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/restablecer-contrasena" element={<RestablecerContrasena />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
