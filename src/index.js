import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './style.css';

import Home from './pages/Home';
import Calculatorp from './pages/Calculatorp';
import Quote from './pages/Quote';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="calculator" element={<Calculatorp />} />
      <Route path="quote" element={<Quote />} />
    </Routes>
  </BrowserRouter>,
);
