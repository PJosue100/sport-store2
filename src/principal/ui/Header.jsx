import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../usuario/control/SesionUsuario";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  const { user } = useUser(); // Obtiene el usuario desde el contexto

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo-store.png" alt="Logo de la tienda" className="h-12" />
        </Link>

        {/* Barra de búsqueda */}
        <div className="flex-1 mx-6 max-w-lg hidden md:block">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Sección de usuario y carrito */}
        <div className="flex items-center gap-4">
          {/* Botón de cuenta */}
          <Link to={user ? "/cuenta" : "/iniciosesion"}>
            <button className="px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition-all duration-300 focus:ring-4 focus:ring-green-400">
              {user ? `${user.nombres} ${user.apellidos}` : "Mi cuenta"}
            </button>
          </Link>

          {/* Icono del carrito */}
          <Link to="/carrito" className="relative">
            <button className="p-2 text-white hover:text-gray-300 transition" aria-label="Carrito de compras">
              <FaShoppingCart size={26} />
            </button>
          </Link>
        </div>

        {/* Barra de búsqueda en móviles */}
        <div className="w-full mt-4 md:hidden">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full px-4 py-2 rounded-lg border border-gray-600 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
