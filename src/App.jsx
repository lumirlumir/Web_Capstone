import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Start from './pages/Start';
import Interview from './pages/Interview';
import Result from './pages/Result';

import Nav from './components/test/Nav';

import './styles/Font.scss';
import './styles/Reset.scss';

import './App.scss';

/**
 *
 * @returns App
 */
function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Nav />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Interview" element={<Interview />} />
        <Route path="/Result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
