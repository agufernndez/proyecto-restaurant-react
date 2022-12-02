import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/layout/Header/Header"
import Footer from './components/layout/Footer/Footer'

import Home from "./pages/Home/HomePage"
import Coctails from "./pages/Coctails/CoctailsPage"
import Contactanos from "./pages/Contactanos/ContactanosPage"
import Menu from "./pages/Menu/MenuPage"
import MenuPrincipal from "./pages/MenuPrincipal/MenuPrincipalPage"

function App() {
  return (
  
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Contactanos" element={<Contactanos/>}/>
          <Route path="/Coctails" element={<Coctails/>}/>
          <Route path="/Menu" element={<Menu/>}/>
          <Route path="/MenuPrincipal" element={<MenuPrincipal/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
      
    </div>
  );
}

export default App;
