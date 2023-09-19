import React from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../Burgers/BurgersIcon/menu.png'
import '../Burgers/more.css'
import settingsIcon from '../Burgers/BurgersIcon/settings.png'
import clockIcon from '../Burgers/BurgersIcon/clock.png'
import installIcon from '../Burgers/BurgersIcon/install.png'
import sunIcon from '../Burgers/BurgersIcon/sun.png'
import caution from '../Burgers/BurgersIcon/caution.png'

function More({ isActive, setActive }) {
  const openHam = () => {
    setActive(!isActive);
  };

  const closeMenu = () => {
    setActive(false);
  };

  return (
    <>
      <div
        className={`hamburger ${isActive ? "hamburger-active" : ""}`}
        onClick={openHam}
      >
        <div className="hamb">
          <img src={menuIcon} alt="" />
          <p className=''>Еще</p>
        </div>

      </div>

      <div>
        <div className={`header-links-container ${isActive ? "change" : ""}`}>
          <div className="header-links">
            <Link className='header-link' href="/" onClick={closeMenu}>
              <img src={settingsIcon} alt="" />
              <span>Сохраненное</span>
            </Link>
            <Link className='header-link' href="/" onClick={closeMenu}>
              <img src={clockIcon} alt="" />
              <span>Сохраненное</span>
            </Link>
            <Link className='header-link' href="/" onClick={closeMenu}>
              <img src={installIcon} alt="" />
              <span>Сохраненное</span>
            </Link>
            <Link className='header-link' href="/" onClick={closeMenu}>
              <img src={sunIcon} alt="" />
              Exclusive Clubs
            </Link>
            <Link className='header-link' href="/" onClick={closeMenu}>
              <img src={caution} alt="" />
              Contact Us
            </Link>

            <div className="header-link-two">
              <Link className='header-link'>Переключение между аккаунта...</Link>
              <Link className='header-link'>Выйти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default More;
