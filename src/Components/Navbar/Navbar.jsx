import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logo.png';
import searchIcon from '../../assets/search-b.png';
import toggleIcon from '../../assets/toggle-icon.png';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="Logo" className="logo" />
          </Link>
          <h1 className="placement-portal">Placement Portal</h1>
        </div>
        <div className={`nav-links-container ${showLinks ? 'show' : ''}`}>
          <ul className="nav-links">
            <li><Link to="/" className="nav-link bigger-font">Home</Link></li>
            <li><Link to="/faq" className="nav-link bigger-font">FAQ</Link></li>
            <li><Link to="/notifications" className="nav-link bigger-font">Notifications</Link></li>
          </ul>
          <div className="search-box">
            <input type="text" placeholder="Search" className="search-input" />
            <img src={searchIcon} alt="Search" className="search-b" />
          </div>
        </div>
        <img src={toggleIcon} alt="Toggle" className="toggle-icon" onClick={toggleLinks} onTouchStart={toggleLinks} />
      </div>
    </div>
  );
};

export default Navbar;
