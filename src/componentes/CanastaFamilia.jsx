import React, { useState } from 'react';

function CanastaFamiliar() {
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const agregarProducto = () => {
    if (nuevoProducto.trim() !== '') {
      setProductos([...productos, { nombre: nuevoProducto, compraRealizada: false }]);
      setNuevoProducto('');
    }
  };

  const eliminarProducto = (index) => {
    const productosActualizados = [...productos];
    productosActualizados.splice(index, 1);
    setProductos(productosActualizados);
  };

  const handleEditarProducto = (index) => {
    setProductoSeleccionado(index);
  };

  const actualizarProducto = () => {
    if (productoSeleccionado !== null) {
      const productosActualizados = [...productos];
      productosActualizados[productoSeleccionado].nombre = nuevoProducto;
      setProductos(productosActualizados);
      setProductoSeleccionado(null);
      setNuevoProducto('');
    }
  };

  const marcarComoComprado = (index) => {
    const productosActualizados = [...productos];
    productosActualizados[index].compraRealizada = true;
    setProductos(productosActualizados);
  };

  return (
    <div>
      <h2>Canasta Familiar</h2>
      <input
        type="text"
        placeholder="Nuevo producto"
        value={nuevoProducto}
        onChange={(e) => setNuevoProducto(e.target.value)}
      />
      <button onClick={agregarProducto}>Agregar</button>
      <ul>
        {productos.map((producto, index) => (
          <li key={index}>
            {productoSeleccionado === index ? (
              <div>
                <input
                  type="text"
                  value={nuevoProducto}
                  onChange={(e) => setNuevoProducto(e.target.value)}
                />
                <button onClick={actualizarProducto}>Guardar</button>
              </div>
            ) : (
              <div>
                {producto.nombre} - Compra Realizada: {producto.compraRealizada ? 'Sí' : 'No'}
                <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                <button onClick={() => handleEditarProducto(index)}>Editar</button>
                {!producto.compraRealizada && (
                  <button onClick={() => marcarComoComprado(index)}>Marcar como Comprado</button>
                )}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CanastaFamiliar;
