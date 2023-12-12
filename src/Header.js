// Header.js
import React from 'react';
import './Header.css'; // Подключаем файл стилей
import icon from './images/logo.svg'
import icon2 from './images/shoppingbasket3_114870.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={icon} alt="Ресторанная иконка" className='logo' />
      <img src={icon2} alt="Корзина" className='basket' />
    </header>
  );
};

export default Header;
