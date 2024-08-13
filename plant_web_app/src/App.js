import React from "react";
import {Route, Routes, Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import Diagonose from './pages/Diagonose';
import Login from './pages/Login';
import Nav from './pages/Nav';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Result from './pages/Result';
import Footer from './pages/Footer';


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/diagonose" element={<Diagonose />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/result" element={<Result />} />


        <Route path="*" element={<NotFound />} />|
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
