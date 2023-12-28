import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ValleDeUco from "./components/ValleDeUco";
import NuestrosVinos from "./components/NuestrosVinos";
import Bodega from "./components/Bodega";
import Pampa from "./components/Pampa";
import Vision from "./components/Vision";
import Linea from "./components/Linea";
import Footer from "./components/Footer";
import NuestrosVinedos from "./components/NuestrosVinedos";
import MapaVinedos from "./components/MapaVinedos";
import "./App.css";
import Gualtallary from "./components/Gualtallary";
import VistaFlores from "./components/VistaFlores";
import PampaElCielo from "./components/PampaElCielo";
import ParajeAltamira from "./components/ParajeAltamira";
import Contacto from "./components/Contacto";
import FormContacto from "./components/FormContacto";
import BodegaComponente1 from "./components/Bodega/BodegaComponente1";
import BodegaComponente2 from "./components/Bodega/BodegaComponente2";
import BodegaComponente3 from "./components/Bodega/BodegaComponente3";
import BodegaComponente4 from "./components/Bodega/BodegaComponente4";
import BodegaComponente5 from "./components/Bodega/BodegaComponente5";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <ValleDeUco />
                <NuestrosVinos />
                <Bodega />
                <Pampa />
                <Vision />
                <Linea />
                <Footer />
              </>
            }
          />
          <Route
            path="/nuestrosVinedos"
            element={
              <>
                <Header />
                <NuestrosVinedos />
                <MapaVinedos />
                <Gualtallary />
                <VistaFlores />
                <PampaElCielo />
                <ParajeAltamira />
                <Footer />
              </>
            }
          />
          <Route
            path="/contacto"
            element={
              <>
                <Header />
                <Contacto />
                <MapaVinedos />
                <FormContacto />
                <Footer />
              </>
            }
          />
                    <Route
            path="/bodega"
            element={
              <>
                <Header />
            <BodegaComponente1 />
            <BodegaComponente2 />
            <BodegaComponente3 />
            <BodegaComponente4 />
            <BodegaComponente5 />
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
