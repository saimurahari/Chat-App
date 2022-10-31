import Login from './components/login';
import Signup from './components/signup';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Signup />}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
