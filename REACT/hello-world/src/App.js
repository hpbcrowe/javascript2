import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import BienVenido from './components/BienVenido';
import React from 'react';

function App() {
  return (
   <header className="App-header">
     <p>Vishwas Took the Logo out, I put it back.</p>
     <img src={logo} className="App-logo" alt="logo"/>
     <p>I think it looks better with the logo.</p>
     <p>I was able to complete the stretch challenges.</p>
    <div className="App">
     
     <Hello /> <BienVenido/> 
     <Welcome />
    </div>
    </header>

    
 

    
  );
}

export default App;
