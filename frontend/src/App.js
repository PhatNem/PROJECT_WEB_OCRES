import React from 'react';
import './App.css';
// import Instructions from './components/Instructions.js'; digital ocean tutorial
import Getweather from './components/Getweather.js'; // * openweathermap.org test
import Getaddress from './components/Getaddress.js'; // api.addresse.data.gouv.fr test
import Getchart from './components/Getchart.js'; // apache echarts.js test
import GetBarChart from './components/GetBarChart.js'; // apache echarts.js test

import Map from './components/map.js'; // maplibre-gl

import { Route, Routes, Link } from 'react-router-dom';
//import 'react-bootstrap/dist/react-bootstrap.min.js';


function Home() {
  return (
    <div>
      <h3>Bonjour</h3>
    </div>
  );
}

function About() {
  return (
    <div>
      <h3>business info</h3>
    </div>
  );
}

function Viz() {
  return (
    <div className="container">
      <Getaddress />
      <Getweather />
      <GetBarChart />
  </div>
  );
}

function Navbar() {
  return (
    <nav>
      <ul>
      <Link to="/"> <li>Home</li> </Link>
      <Link to="/about"><li>About</li></Link>
      <Link to="/viz"><li>Viz</li></Link>
      <Link to="/map"><li>Map</li></Link>
     </ul>
    </nav>
  )
}

//<h1>Spotigraph</h1>
function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/about" element= {<About />} />
        <Route path="/viz" element= {<Viz />} />
        <Route path="/map" element= {<Map />} />
      </Routes>
    </div>
  );
}

export default App;