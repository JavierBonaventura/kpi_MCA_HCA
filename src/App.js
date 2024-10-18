import React, { useEffect, useState } from "react";
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
import Header from "./components/Projects/Header";
import ProyectosEnMarcha from "./components/Projects/ProyectosEnMarcha";
// Contact
import ContactoForm from "./components/Contact/ContactoForm";
// Sobre Nosotros
import SobreNosotros from "./components/About/SobreNosotros";
import SobreNosotrosArbol from "./components/About/SobreNosotrosArbol";
import SobreNosotrosVideo from "./components/About/SobreNosotrsVideo";
import SobreNosotrosValores from "./components/About/SobreNosotrosValores";
import SobreNosotrosNuestraHistoria from "./components/About/SobreNosotrosNuestraHistoria";
// Servicios
import ServiciosOfrecidos from "./components/Services/ServiciosOfrecidos";
// Impacto
import Imapcto from "./components/Impacto/Impacto";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const WarningMessage = () => (
  <div style={{ textAlign: "center", padding: "20px",  color: "#333" }}>
    <h2>Este proyecto está diseñado para resoluciones mayores a 1280px.</h2>
    su resulucion es de : {window.innerWidth}
    
  </div>
);

function App() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1280);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        {isSmallScreen ? (
          <WarningMessage />
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <>
                   <Header />
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
            <Route
              path="/services"
              element={
                <>
                  <Header />
                  <ServiciosOfrecidos />
                  <Footer />
                </>
              }
            />
            <Route
              path="/impact"
              element={
                <>
                  <Header />
                  <Imapcto />
                  <Footer />
                </>
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
