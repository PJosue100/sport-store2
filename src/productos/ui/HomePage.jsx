import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetchProductos from "../repositorio/useFetchProductos";
import ProductoController from "../control/ProductoController";
import { useCart } from "../../pedidos/control/SesionPedido";

function HomePage() {
  const { productos, error } = useFetchProductos();
  const [listaProductos, setListaProductos] = useState([]);
  const { addProduct } = useCart();

  useEffect(() => {
    if (productos.length > 0) {
      ProductoController.setProductos(productos);
      setListaProductos(ProductoController.getProductos());
    }
  }, [productos]);

  if (error) {
    return <p className="text-red-500 text-center mt-4">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto px-4 pt-24 pb-20">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-green-400">Nuestros Productos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listaProductos.map((p) => (
          <div key={p.id} className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 flex flex-col">
            <img
              src={p.imagenUrl}
              alt={p.descripcion}
              className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
              onClick={() => addProduct({ idProducto: p.id, descripcion: p.descripcion, precio: p.precio, cantidad: 1 })}
            />
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-gray-100">{p.descripcion}</h2>
            </div>
            <p className="text-lg font-bold text-green-400 mt-2">Q {p.precio.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
