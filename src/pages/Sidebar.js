// Sidebar.js
import React from 'react';

const Sidebar = () => {
  return (
    <aside className="fixed top-20 left-0 w-56 h-[calc(100%-80px)] bg-gradient-to-t from-[#265c4f] to-[#16362e] text-white transition-all duration-300 pt-14 z-20">
      <nav>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-home text-lg pr-2"></i> Inicio
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-chart-line text-lg pr-2"></i> Gráficos
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-table text-lg pr-2"></i> Tablas
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-cog text-lg pr-2"></i> Configuración
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-user text-lg pr-2"></i> Perfil
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-envelope text-lg pr-2"></i> Mensajes
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-bell text-lg pr-2"></i> Notificaciones
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-sign-out-alt text-lg pr-2"></i> Salir
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-question-circle text-lg pr-2"></i> Ayuda
        </button>
        <button className="block py-3 px-4 text-sm font-bold transition-all duration-300 hover:bg-[#1d463b] hover:translate-x-1">
          <i className="fas fa-info-circle text-lg pr-2"></i> Acerca de
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;
