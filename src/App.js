import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";

function App() {
  // Componente para manejar la selección del ducto por medio de la ruta
  const Wrapper = () => {
    const location = useLocation(); // Obtén la ubicación actual
    const navigate = useNavigate(); // Para redirigir al usuario
    const fullPath = location.pathname; // Obtén el pathname (nombre del ducto después del puerto)

    useEffect(() => {
      if (fullPath !== "/") {
        navigate("/"); // Redirige a la raíz si el pathname no es "/"
      }
    }, [fullPath, navigate]);

    return <MainPage path={fullPath === "/" ? "" : fullPath.slice(1)} />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={<Wrapper />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
