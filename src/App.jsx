import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/*" element={<Navigate to={`${process.env.PUBLIC_URL}/start`} />} />
        <Route path={`${process.env.PUBLIC_URL}`}>
          <Route path="start" element={<Start />} />
          <Route path="interview" element={<Interview />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
