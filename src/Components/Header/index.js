import React from 'react';
import logo from "../../img/logo.png"

export const Header = () => {
  return <div>
      <header>
        <a href="#">
          <div className='logo'>
              <img src={logo} alt="Logo" width="90px" />
          </div>
        </a>
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
        </ul>
        <div className="cart">
        <box-icon type='solid' name='cart-alt'></box-icon>
          <span className='item__total'>0</span>
        </div>
      </header>
  </div>;
};
