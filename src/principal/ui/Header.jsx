import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../usuario/control/SesionUsuario";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { user } = useUser(); // Obtiene el usuario desde el contexto

  return (
    <header className="bg-gray-800 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/">
          <img src="/logo-store.png" alt="Logo" className="h-10" />
        </Link>

        {/* Barra de búsqueda */}
        <div className="flex-1 mx-6 max-w-lg">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg border border-gray-500 bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Botón de cuenta */}
        <div>
        <Link to={user ? "/cuenta" : "/iniciosesion"}>
          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition">
            {user ? `${user.nombres} ${user.apellidos}` : "Mi cuenta"}
          </button>
        </Link>

        {/* Icono del carrito */}
        <Link to="/carrito" className="ml-4">
          <button className="p-2 text-white hover:text-gray-300 transition">
            <FaShoppingCart size={24} />
          </button>
        </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;