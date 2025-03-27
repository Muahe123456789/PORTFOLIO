import React, { useEffect, useRef } from 'react';
import './styles.css';

function Navbar() {
  const menuBtnRef = useRef(null);
  const navLinksRef = useRef(null);

  useEffect(() => {
    const menuBtn = menuBtnRef.current;
    const navLinks = navLinksRef.current;
    const menuBtnIcon = menuBtn.querySelector('i');

    const handleClick = () => {
      navLinks.classList.toggle('open');
      menuBtnIcon.setAttribute('class', navLinks.classList.contains('open') ? 'ri-close-line' : 'ri-menu-line');
    };

    const handleNavLinkClick = () => {
      navLinks.classList.remove('open');
      menuBtnIcon.setAttribute('class', 'ri-menu-line');
    };

    menuBtn.addEventListener('click', handleClick);
    navLinks.addEventListener('click', handleNavLinkClick);

    return () => {
      menuBtn.removeEventListener('click', handleClick);
      navLinks.removeEventListener('click', handleNavLinkClick);
    };
  }, []);

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <h1>
            <b>PORTFOLIO</b>
          </h1>
        </div>
        <div className="nav__menu__btn" id="menu-btn" ref={menuBtnRef}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
      <ul className="nav__links" id="nav-links" ref={navLinksRef}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button className="nav__link__btn">Join Now</button>
        </li>
      </ul>
      <div className="nav__btns">
        <button className="btn">Join Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
