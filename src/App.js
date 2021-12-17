import React from 'react';
import './App.css';
import Forms from './Forms';
import Navbar from './Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <div className='App'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/Forms" element={<Forms />} />
          </Routes>
        </BrowserRouter>
        </div>
    </>
  )
}

export default App;
