import React from 'react';
import Header from './components/Header';
import ValleDeUco from './components/ValleDeUco';
import "./App.css";
import NuestrosVinos from './components/NuestrosVinos';

function App() {
  return (
    <div className="App">
      <Header />
      <ValleDeUco />
      <NuestrosVinos />
    </div>
  );
}

export default App;