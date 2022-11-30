import './App.css';
import React from 'react';
import Header from "./components/layout/Header/Header"
import NavBar from "./components/layout/NavBar/Navbar"
import Reservar from './components/layout/Reservar/Reservar';
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
  
    <div className="App">
      <Header/>
      <NavBar/>
      <Reservar/>

      <Footer/>
      
    </div>
  );
}

export default App;
