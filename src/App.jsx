import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import TestNav from './layouts/TestNav';

import URL from './constants/constants';

import Start from './pages/Start';
import Interview from './pages/Interview';
import Result from './pages/Result';

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
      <TestNav />
      <Routes>
        <Route path="/*" element={<Navigate to={`${URL.public}/`} />} />
        <Route path={URL.public}>
          <Route path="" element={<Start />} />
          <Route path="interview" element={<Interview />} />
          <Route path="result" element={<Result />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
