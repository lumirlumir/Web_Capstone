import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Start from './pages/Start';
import Interview from './pages/Interview';
import Result from './pages/Result';

import CompTestNav from './components/CompTestNav';

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
      <CompTestNav />
      <Routes>
        <Route path="/*" element={<Navigate to={`${process.env.PUBLIC_URL}/`} />} />
        <Route path={`${process.env.PUBLIC_URL}`}>
          <Route path="" element={<Start />} />
          <Route path="interview" element={<Interview />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
