import React from 'react';
import { Link } from 'react-router-dom';
import '../Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li><h4><Link to="/">Home</Link></h4></li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
