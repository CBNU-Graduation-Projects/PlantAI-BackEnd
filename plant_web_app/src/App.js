import React from "react";
import {Route, Routes, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
       <nav>
      <Link to="/">Home</Link> | 
      <button><Link to="/login"> 로그인 </Link></button>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      
    </div>
  );
}

export default App;
