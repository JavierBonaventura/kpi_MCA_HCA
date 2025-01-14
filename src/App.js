import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Ruta principal */}
          <Route path="/" element={<MainPage />} />

          {/* Ruta comodín para manejar rutas inexistentes */}
          <Route path="*" element={<RouteLogger />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// Componente para manejar rutas y guardar la ubicación
function RouteLogger() {
  const location = useLocation();

  // Guardar la ruta en una variable
  const currentPath = location.pathname;
  console.log("Ruta actual:", currentPath);

  // Redirigir a la página principal (opcional)
  return <MainPage currentPath={currentPath} />;
}

export default App;
