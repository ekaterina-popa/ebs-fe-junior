import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ background: 'gray', padding: '20px' }}>
      <nav >
        <NavLink exact to="/" style={{ textDecoration: "none", paddingRight: "10px" }}>
          Products
        </NavLink>
        <NavLink exact to="/cart" style={{ textDecoration: "none", paddingRight: "10px" }}>
          Cart
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
