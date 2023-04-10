import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './Componentes/Welcome';
import Cuatro from './Componentes/Cuatro';
import Hola from './Componentes/Hola';
import Hello from './Componentes/Hello';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='/Welcome' element={<Welcome/>}/>
          <Route path='/4' element={<Cuatro/>}/>
          <Route path='/Hola' element={<Hola/>}/>
          <Route path='/Hola/azul/rojo' element={<Hello/>}/>
        </Routes>    
    </BrowserRouter>
  );
}
export default App;
