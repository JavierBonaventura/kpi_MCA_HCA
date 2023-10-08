import React from 'react';
import Header from './components/Header';
import ValleDeUco from './components/ValleDeUco';
import NuestrosVinos from './components/NuestrosVinos';
import Bodega from "./components/Bodega"
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <ValleDeUco />
      <NuestrosVinos />
      <Bodega />
    </div>
  );
}

export default App;