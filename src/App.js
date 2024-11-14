import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import './App.css';
import Footer from './Footer';



function App() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  return (
    <Router>
      <div className="app-container">
        <Header cartItems={cartItems} />
        <div className="main-content">
          <Sidebar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage addToCart={addToCart} />} />
              <Route path="/cart" element={<CartPage cartItems={cartItems} />} />
            </Routes>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
    
  );
}

export default App;