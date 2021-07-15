import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div style={{ background: 'gray', padding: '20px' }}>
      <nav style={{ listStyle: 'none' }}>
        <li>
          {' '}
          <NavLink exact to="/">
            Products
          </NavLink>
        </li>
        <li>
          {' '}
          <NavLink exact to="/cart">
            Cart
          </NavLink>
        </li>
      </nav>
    </div>
  );
};

export default Header;
