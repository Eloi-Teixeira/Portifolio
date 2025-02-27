import React from 'react';
import Logo from '../assets/imgs/Logo.tsx';
import IconTranslate from '../assets/icons/IconTranslate.tsx';

const Header = () => {
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.classList.toggle('active');
    const target = event.currentTarget.id;
    const menuContainer = document.querySelector(`#${target} ~ ul`);
    menuContainer?.classList.toggle('show');
  };

  return (
    <header className="header-container">
      <nav className="header-content max-container">
        <Logo />
        <button id="menu-mobile-btn" onClick={handleMenuClick}>
          <span className="menu-mobile-btn-bar"></span>
        </button>
        <ul className="menu-container">
          <li>
            <button onClick={handleMenuClick} id="menu-lang-btn">
              <IconTranslate />
              <span className="menu-lang-legend">Traduzir</span>
            </button>
            <ul className="language-container">
              <li>
                <input type="radio" name="language" id="portuguese" />
                <label htmlFor="portuguese">Português</label>
              </li>
              <li>
                <input type="radio" name="language" id="english" />
                <label htmlFor="english">English</label>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a href="#contact">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
