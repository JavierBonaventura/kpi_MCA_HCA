import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
// home
import Header_Home from "./components/Home/Header_Home";
import Servicios from "./components/Home/Servicios";
import Desde1976 from "./components/Home/Desde1976";
import AlgunosNumeros from "./components/Home/AlgunosNumeros";
import NuestrosProyectos from "./components/Home/NuestrosProyectos";
import Historias from "./components/Home/Historias";
import Impacto from "./components/Home/Impacto";
import EnMarcha from "./components/Home/EnMarcha";
import Footer from "./components/Home/Footer";
// projects
import Header from "./components/Projects/Header"; // Importa tu nuevo componente
import ProyectosEnMarcha from "./components/Projects/ProyectosEnMarcha";
// Contact
import ContactoForm from "./components/Contact/ContactoForm";
// Sobre Nosotrs
import SobreNosotros from "./components/About/SobreNosotros";
import SobreNosotrosArbol from "./components/About/SobreNosotrosArbol";
import SobreNosotrosVideo from "./components/About/SobreNosotrsVideo";
import SobreNosotrosValores from "./components/About/SobreNosotrosValores";
import SobreNosotrosNuestraHistoria from "./components/About/SobreNosotrosNuestraHistoria";

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
                <Impacto />
                <EnMarcha />
                <Footer />
              </>
            }
          />
          <Route
            path="/projects"
            element={
              <>
                <Header />
                <ProyectosEnMarcha />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <ContactoForm />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Header />
                <SobreNosotros />
                <SobreNosotrosArbol />
                <SobreNosotrosVideo />
                <SobreNosotrosValores />
                <SobreNosotrosNuestraHistoria />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
