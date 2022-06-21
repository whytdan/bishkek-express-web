import React from 'react';
import Logo from '../../assets/icons/logo.svg';
import MenuIcon from '../../assets/icons/menu.png';

const Nav = () => {
  return (
    <nav>
      <div className="nav_container">
        <div className="nav_logo">
          <img src={Logo} alt="logo" />
        </div>

        <div className="nav-bar-list">
          <ul className="list">
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about_us_section">About us</a>
            </li>
            <li>
              <a href="#info_section">Info</a>
            </li>
            <li>
              <a href="#contact_section">Contact</a>
            </li>
            <li>
              <a href="#get_in_touch_section">Work with us</a>
            </li>
            <li>
              <a href="#announcement_section">Announcement</a>
            </li>
          </ul>
        </div>

        <img className="nav_menu_icon" src={MenuIcon} alt="menu-icon" />
        <input id="menu-toggle" type="checkbox" />

        <div className="mobile-inner-nav">
          <ul>
            <li>
              <a href="#hero">Home</a>
            </li>
            <li>
              <a href="#about_us_section">About us</a>
            </li>
            <li>
              <a href="#info_section">Info</a>
            </li>
            <li>
              <a href="#contact_section">Contact</a>
            </li>
            <li>
              <a href="#get_in_touch_section">Work with us</a>
            </li>
            <li>
              <a href="#announcement_section">Announcement</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
