import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Chat from './pages/chat';
import Register from './pages/Register';
import Login from './pages/Login';

const App = () => {
  return <BrowserRouter>
    <Routes>
    <Route path="/register" element={<Register/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/" element={<Chat/>} />
    </Routes>
  </BrowserRouter>
}

export default App;