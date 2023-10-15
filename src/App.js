import React from 'react';
import Header from './components/Header';
import ValleDeUco from './components/ValleDeUco';
import NuestrosVinos from './components/NuestrosVinos';
import Bodega from "./components/Bodega"
import Pampa from "./components/Pampa"
import Vision from "./components/Vision"
import Linea from './components/Linea';
import Footer from "./components/Footer"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ValleDeUco />
      <NuestrosVinos />
      <Bodega />
      <Pampa />
      <Vision />
      <Linea />
      <Footer />
    </div>
  );
}

export default App;