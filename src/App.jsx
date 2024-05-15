import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Start from '@/pages/Start';

import './App.scss';

/**
 *
 * @returns App
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Navigate to={`${process.env.PUBLIC_URL}/`} />} />
        <Route path={process.env.PUBLIC_URL}>
          <Route path="" element={<Start />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
