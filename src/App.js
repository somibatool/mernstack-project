import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Herosection from './component/herosection';
import Destination from './component/Destination'; 
import Services from './component/Services';       
import Blogs from './component/Blogs';             
import Contact from './component/Contact';         

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Herosection />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;

