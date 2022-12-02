import './App.css';
import React from 'react';
import Header from "./components/layout/Header/Header"
import Reservar from './components/layout/Reservar/Reservar';
import Footer from './components/layout/Footer/Footer'

function App() {
  return (
  
    <div className="App">
      <Header />
      <Reservar />
      <Footer />
      
    </div>
  );
}

export default App;
