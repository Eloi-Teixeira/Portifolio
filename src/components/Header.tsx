import React from 'react';
import Logo from '../assets/imgs/Logo.tsx';
import IconTranslate from '../assets/icons/IconTranslate.tsx';

const Header = () => {

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.currentTarget.id ;
    console.log(target);
    const menuContainer = document.querySelector(`#${target} ~ ul`);
    menuContainer?.classList.toggle('show');
  };

  return (
    <header className="header-container">
      <nav className="header-content max-container">
        <Logo />
        <ul className="menu-desktop-container">
          <li>
            <button onClick={handleMenuClick} id='menu-lang-btn'>
              <IconTranslate />
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
            <a href="#about" className='active'>Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#Contact">Contato</a>
          </li>
        </ul>
        <button id="menu-mobile-btn" onClick={handleMenuClick}>
          <span className="menu-mobile-btn-bar"></span>
        </button>
        <ul className="menu-mobile-container">
          <li>
            <a href="#about" className='active'>Home</a>
          </li>
          <li>
            <a href="#about">Sobre</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#Contact">Contato</a>
          </li>
          <li>
            <button onClick={handleMenuClick} id='menu-lang-btn-mobile'>
              <IconTranslate /> Traduzir
            </button>
            <ul className="language-container language-mobile-container">
              <li>
                <input type="radio" name="language" id="portuguese_mobile" />
                <label htmlFor="portuguese_mobile">Português</label>
              </li>
              <li>
                <input type="radio" name="language" id="english_mobile" />
                <label htmlFor="english_mobile">English</label>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
