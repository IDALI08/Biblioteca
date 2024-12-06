import React from 'react';
import { useNavigate } from 'react-router-dom';

const VistaLibros = () => {
  const navigate = useNavigate();

  const libros = [
    { id: 1, titulo: 'Título 1', autor: 'Autor 1', isbn: '12345' },
    { id: 2, titulo: 'Título 2', autor: 'Autor 2', isbn: '67890' },
  ];

  const handleEditar = (id) => {
    navigate(`/editar-libro/${id}`);
  };

  return (
    <div className="table-container">
      <h2>Lista de Libros</h2>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Autor</th>
            <th>ISBN</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {libros.map((libro) => (
            <tr key={libro.id}>
              <td>{libro.titulo}</td>
              <td>{libro.autor}</td>
              <td>{libro.isbn}</td>
              <td>
                <button onClick={() => handleEditar(libro.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VistaLibros;
