import React, { useState } from 'react';
import './Header.css';
import icon from './images/logo.svg';
import icon2 from './images/shoppingbasket3_114870.svg';
import CartModal from './CartModal'; // Подключаем компонент модального окна

const Header = () => {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const openCartModal = () => {
    setIsCartModalOpen(true);
  };

  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <header className="header">
      <img src={icon} alt="Ресторанная иконка" className='logo' />
      <img src={icon2} alt="Корзина" className='basket' onClick={openCartModal} />
      {/* Передаем состояние модального окна и функцию закрытия в компонент модального окна */}
      {isCartModalOpen && <CartModal closeModal={closeCartModal} />}
    </header>
  );
};

export default Header;
