import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Register from './pages/signup';
import Login from './pages/login';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/register" element={<Register />}/>
        <Route path = '/login' element={<Login />}/>
        <Route path = '/home' element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}