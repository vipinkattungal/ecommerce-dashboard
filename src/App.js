
import React from 'react';
import 'tailwindcss/tailwind.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import ProductList from './components/ProductList';
import FavoriteProducts from './components/FavoriteProducts'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/product" element={<ProductList />} />
        <Route path="/favorites" element={<FavoriteProducts />} />

      </Routes>
    </Router>
  );
}


export default App;
