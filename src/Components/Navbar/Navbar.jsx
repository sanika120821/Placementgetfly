import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo_light from '../../assets/logo.png';
import logo_dark from '../../assets/logo-w.png';
import search_icon_light from '../../assets/search-w.png';
import search_icon_dark from '../../assets/search-b.png';
import toggle_light from '../../assets/night.png';
import toggle_dark from '../../assets/day.png';

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`navbar ${theme}`}>
      <Link to="/">
        <img src={theme === 'light' ? logo_light : logo_dark} alt="Logo" className="logo" />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/notifications">Notifications</Link></li>
        <li><Link to="/company">Company</Link></li>
      </ul>
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src={theme === 'light' ? search_icon_light : search_icon_dark} alt="Search Icon" />
      </div>
      <img onClick={toggle_mode} src={theme === 'light' ? toggle_light : toggle_dark} alt="Toggle Icon" className="toggle-icon" />
    </div>
  );
};

export default Navbar;
