import React from 'react';
import './App.css';
import WeatherCard from './comps/WeatherCard/component';

function App() {
  return (
    <div className="App">
      <WeatherCard temp='90'/>
    </div>
  );
}

export default App;
