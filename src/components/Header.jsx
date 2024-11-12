import React from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = ({ cartItems }) => {
  return (
    <header className="header">
      <h1>Food Web</h1>
      <nav>
        <Link to="/cart">
          Cart ({cartItems.length})
        </Link>
      </nav>
    </header>
  );
};

export default Header;
