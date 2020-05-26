import React from 'react';
import './App.css';
import WeatherCard from './comps/WeatherCard/component';

function App() {

  const appStyle = {
    margin: `0 auto`,
    width: '900px',
    display: 'flex'
  };

  return (
    <div className="App" style={appStyle}>
      <WeatherCard temp='90' condition="Cloudy" city="Fairfax" Country="US"  />
      <WeatherCard temp='60' condition="Thunder" city="Burke" Country="US"  />
      <WeatherCard temp='10' condition="Sunny" city="South Riding" Country="US" />
    </div>
  );
}

export default App;
