import './App.css';
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

// import Header from "./components/layout/Header/Header"
import HeaderFooter from './components/layout/HeaderFooter/HeaderFooter'

import HomePage from "./pages/Home/HomePage"
import Coctails from "./pages/Coctails/CoctailsPage"
import Contactanos from "./pages/Contactanos/ContactanosPage"
import Menu from "./pages/Menu/MenuPage"
import MenuPrincipal from "./pages/MenuPrincipal/MenuPrincipalPage"
import MenuSemanal from './pages/MenuSemanal/MenuSemanalPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderFooter/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/contactanos" element={<Contactanos/>}/>
          <Route path="/coctails" element={<Coctails/>}/>
          <Route path="/menu" element={<Menu/>}/>
          <Route path="/menuprincipal" element={<MenuPrincipal/>}/>
          <Route path="/menusemanal" element={<MenuSemanal/>}/>
        </Routes>
        <HeaderFooter/> 
      </BrowserRouter>
    </div>
  );
}

export default App;
