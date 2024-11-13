import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Header.css';

const Header = ({ cartItems }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const cartItemCount = cartItems.length;

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle search button click
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Here, you could handle the search logic, e.g., filtering or API call
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="header">
      <h1>Food Web</h1>
      <div className="header-actions">
        {/* Search Bar and Button */}
        <div className="search-container">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-bar"
            placeholder="Search food..."
          />
          <button
            className="search-button"
            onClick={handleSearchSubmit}
          >
            Search
          </button>
        </div>

        {/* Cart Link */}
        <nav>
          <Link to="/cart" className={`cart-link ${cartItemCount > 0 ? 'has-items' : ''}`}>
            {cartItemCount > 0 ? (
              <>Cart ({cartItemCount})</>
            ) : (
              'Your cart is empty'
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
