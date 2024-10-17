import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import { Home } from './pages/Home';
import { Labirinto } from './pages/Labirinto';
import { JogoDaMemoria } from './pages/JogoDaMemoria';
import { Final } from './pages/Final';

const App: React.FC  = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/final" element={<Final />} />
        <Route path="/labirinto" element={<Labirinto/>} />
        <Route path="/jogo-da-memoria" element={<JogoDaMemoria/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
