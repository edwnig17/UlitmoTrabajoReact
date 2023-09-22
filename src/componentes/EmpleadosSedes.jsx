import React, { useState } from 'react';

function EmpleadosYSedes() {
  const [empleados, setEmpleados] = useState([]);
  const [sedes, setSedes] = useState([]);
  const [nuevoEmpleado, setNuevoEmpleado] = useState('');
  const [nuevaSede, setNuevaSede] = useState('');
  const [empleadoSeleccionado, setEmpleadoSeleccionado] = useState(null);
  const [sedeSeleccionada, setSedeSeleccionada] = useState(null);

  const agregarEmpleado = () => {
    if (nuevoEmpleado.trim() !== '') {
      setEmpleados([...empleados, { nombre: nuevoEmpleado }]);
      setNuevoEmpleado('');
    }
  };

  const agregarSede = () => {
    if (nuevaSede.trim() !== '') {
      setSedes([...sedes, { nombre: nuevaSede }]);
      setNuevaSede('');
    }
  };

  const eliminarEmpleado = (index) => {
    const empleadosActualizados = [...empleados];
    empleadosActualizados.splice(index, 1);
    setEmpleados(empleadosActualizados);
  };

  const eliminarSede = (index) => {
    const sedesActualizadas = [...sedes];
    sedesActualizadas.splice(index, 1);
    setSedes(sedesActualizadas);
  };

  const handleEditarEmpleado = (index) => {
    setEmpleadoSeleccionado(index);
  };

  const handleEditarSede = (index) => {
    setSedeSeleccionada(index);
  };

  const actualizarEmpleado = () => {
    if (empleadoSeleccionado !== null) {
      const empleadosActualizados = [...empleados];
      empleadosActualizados[empleadoSeleccionado].nombre = nuevoEmpleado;
      setEmpleados(empleadosActualizados);
      setEmpleadoSeleccionado(null);
      setNuevoEmpleado('');
    }
  };

  const actualizarSede = () => {
    if (sedeSeleccionada !== null) {
      const sedesActualizadas = [...sedes];
      sedesActualizadas[sedeSeleccionada].nombre = nuevaSede;
      setSedes(sedesActualizadas);
      setSedeSeleccionada(null);
      setNuevaSede('');
    }
  };

  return (
    <div>
      <h2>Empleados y Sedes</h2>
      <h3>Empleados</h3>
      <input
        type="text"
        placeholder="Nuevo empleado"
        value={nuevoEmpleado}
        onChange={(e) => setNuevoEmpleado(e.target.value)}
      />
      <button onClick={agregarEmpleado}>Agregar Empleado</button>
      <ul>
        {empleados.map((empleado, index) => (
          <li key={index}>
            {empleadoSeleccionado === index ? (
              <div>
                <input
                  type="text"
                  value={nuevoEmpleado}
                  onChange={(e) => setNuevoEmpleado(e.target.value)}
                />
                <button onClick={actualizarEmpleado}>Guardar</button>
              </div>
            ) : (
              <div>
                {empleado.nombre}
                <button onClick={() => eliminarEmpleado(index)}>Eliminar</button>
                <button onClick={() => handleEditarEmpleado(index)}>Editar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <h3>Sedes</h3>
      <input
        type="text"
        placeholder="Nueva sede"
        value={nuevaSede}
        onChange={(e) => setNuevaSede(e.target.value)}
      />
      <button onClick={agregarSede}>Agregar Sede</button>
      <ul>
        {sedes.map((sede, index) => (
          <li key={index}>
            {sedeSeleccionada === index ? (
              <div>
                <input
                  type="text"
                  value={nuevaSede}
                  onChange={(e) => setNuevaSede(e.target.value)}
                />
                <button onClick={actualizarSede}>Guardar</button>
              </div>
            ) : (
              <div>
                {sede.nombre}
                <button onClick={() => eliminarSede(index)}>Eliminar</button>
                <button onClick={() => handleEditarSede(index)}>Editar</button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EmpleadosYSedes;
