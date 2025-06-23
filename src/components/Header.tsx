import React from 'react';
import Logo from '../assets/imgs/Logo.tsx';
import IconTranslate from '../assets/icons/IconTranslate.tsx';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const handleLanguageChange = async (language: string) => {
    await i18n.changeLanguage(language);
  };

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.classList.toggle('active');
    const target = event.currentTarget.id;
    const menuContainer = document.querySelector(`#${target} ~ ul`);
    menuContainer?.classList.toggle('show');
  };

  React.useEffect(() => {
    window.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest('.menu-container') &&
        !target.closest('#menu-mobile-btn') &&
        !target.closest('#menu-lang-btn')
      ) {
        console.log('click');

        const menuBtn = document.getElementById('menu-mobile-btn');
        const langBtn = document.getElementById('menu-lang-btn');
        menuBtn?.classList.remove('active');
        langBtn?.classList.remove('active');
        const menuContainer = document.querySelector('.menu-container.show');
        const languageContainer = document.querySelector('.language-container.show');
        menuContainer?.classList.remove('show');
        languageContainer?.classList.remove('show');
      }
    });
    return () => {
      window.removeEventListener('click', () => {});
    };
  })

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
              <span className="menu-lang-legend">{t('headerTranslate')}</span>
            </button>
            <ul className="language-container">
              <li>
                <button onClick={() => handleLanguageChange('pt')}>
                  {t('pt')}
                </button>
              </li>
              <li>
                <button onClick={() => handleLanguageChange('en')}>
                  {t('en')}
                </button>
              </li>
            </ul>
          </li>
          <li>
            <a href="#about">{t('headerAbout')}</a>
          </li>
          <li>
            <a href="#projects">{t('headerProjects')}</a>
          </li>
          <li>
            <a href="#contact">{t('headerContact')}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
