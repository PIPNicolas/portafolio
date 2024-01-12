import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
import { Box } from '@mui/material';
function App() {
  return (
    <>
     
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    </Routes>
    </BrowserRouter>
   
    </>
  );
}

export default App;
 