import React from 'react';
import Logo from '../assets/imgs/Logo.tsx';
import IconTranslate from '../assets/icons/IconTranslate.tsx';

const Header = () => {
  return (
    <header className='header-container'>
      <nav className='header-content max-container'>
        <Logo />
        <ul>
          <li>
            <button>
              <IconTranslate />
            </button>
          </li>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#project">Projetos</a></li>
          <li><a href="#Contact">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
