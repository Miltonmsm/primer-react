import React from 'react';
import Miltoncard from './components/Miltoncard/component';
import './App.css';



function App() {
  return (
    <div className="App">
      <Miltoncard temp={-15} condition='Clear' ciudad='Lima' pais='PE' />
      <Miltoncard temp={20} condition='Dust' ciudad='Buenos Aires' pais='AR' />
      <Miltoncard temp={40} condition='Tornado' ciudad='Bogota' pais='COL' />
    </div>

  );
}

export default App;
