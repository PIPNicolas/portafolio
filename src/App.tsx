
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Navbar from './Components/Navbar';
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
 