import React from 'react';
import './App.css';
import WeatherCard from './comps/WeatherCard/component';

function App() {

  const data = async() => {
    let res = ''
    const apiReq = await fetch("api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=55fcdeab2e9aea8e1dab232f9c78a90c")
      .then(res => res.json())
    return res;
  };
  
  data().then(res => {
    console.log("Name: " + res.name)
  })

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
