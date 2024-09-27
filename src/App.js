import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header_Home from "./components/Header_Home";
import Servicios from "./components/Servicios";
import Desde1976 from "./components/Desde1976";
import AlgunosNumeros from "./components/AlgunosNumeros"
import NuestrosProyectos from "./components/NuestrosProyectos";
import Historias from "./components/Historias";
import Impacto from "./components/Impacto";
import EnMarcha from "./components/EnMarcha";
import Footer from "./components/Footer";


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header_Home />
                <Servicios />
                <Desde1976 />
                <AlgunosNumeros />
                <NuestrosProyectos />
                <Historias />
                <Impacto/>
                <EnMarcha/>
                <Footer/>

              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
