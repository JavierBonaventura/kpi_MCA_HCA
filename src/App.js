import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ValleDeUco from "./components/ValleDeUco";
import NuestrosVinos from "./components/NuestrosVinos";
import NuestrosVinosMob from "./components/NuestrosVinosMob";
import Bodega from "./components/Bodega";
import Vision from "./components/Vision";
import Linea from "./components/Linea";
import Footer from "./components/Footer";
import NuestrosVinedos from "./components/NuestrosVinedos";
import MapaVinedos from "./components/MapaVinedos";
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
import NosotrosComponente1 from "./components/Nosotros/NosotrosComponente1";
import NosotrosComponente2 from "./components/Nosotros/NosotrosComponente2";
import NosotrosComponente3 from "./components/Nosotros/NosotrosComponente3";
import NosotrosComponente4 from "./components/Nosotros/NosotrosComponente4";
import NosotrosComponente5 from "./components/Nosotros/NosotrosComponente5";
import VinosComponente1 from "./components/Vinos/VinosComponente1";
import VinosComponente2 from "./components/Vinos/VinosComponente2";
import VinosComponente3 from "./components/Vinos/VinosComponente3";
import VinosComponente4 from "./components/Vinos/VinosComponente4";
import VinosComponente5 from "./components/Vinos/VinosComponente5";
import VinosComponente6 from "./components/Vinos/VinosComponente6";
import VinosComponente7 from "./components/Vinos/VinosComponente7";
import VinosComponente8 from "./components/Vinos/VinosComponente8";
import VinosComponente9 from "./components/Vinos/VinosComponente9";
import VinosComponente10 from "./components/Vinos/VinosComponente10";
import VinosComponente11 from "./components/Vinos/VinosComponente11";

import HeroPress from "./components/press/hero";
import Files from "./components/press/files";
import HeroVino from "./components/singleVinos/hero";
import SliderHome from "./components/slider-home";
import SliderBodega from "./components/Bodega/slider-bodega";
import Wa from "./components/whatsapp";
import Wine1 from "./components/singleVinos/Wine1";
import Wine2 from "./components/singleVinos/Wine2";
import Wine3 from "./components/singleVinos/Wine3";
import NosotrosContent from "./components/Nosotros/content";

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
                <NuestrosVinosMob />
                <Bodega />
                <SliderHome />
                <Vision />
                <Linea />
                <Footer />
              </>
            }
          />
          <Route
            path="/vinedos"
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
                <SliderBodega />
                <BodegaComponente4 />
                <BodegaComponente5 />
                <Footer />
              </>
            }
          />
          <Route
            path="/nosotros"
            element={
              <>
                <Header />
                <NosotrosComponente1 />
                <NosotrosContent />
                <NosotrosComponente3 />

                <Linea />
                <Footer />
              </>
            }
          />
          <Route
            path="/vinos"
            element={
              <>
                <Header />
                <VinosComponente1 />
                <VinosComponente2 />
                <VinosComponente3 />
                <VinosComponente4 />
                <VinosComponente5 />
                <VinosComponente11 />
                <VinosComponente6 />
                <VinosComponente9 />
                <VinosComponente7 />
                <VinosComponente8 />
                <VinosComponente10 />
                <Footer />
              </>
            }
          />
          <Route
            path="/press"
            element={
              <>
                <Header />
                <HeroPress />
                <Files />
                <Footer />
              </>
            }
          />
          <Route
            path="/vino-detalle"
            element={
              <>
                <Header />

                <HeroVino />
                <Wine1 />
                <Wine2 />
                <Wine3 />
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
