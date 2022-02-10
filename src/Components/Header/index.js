import React from 'react';
import logo from "../../img/logo.png"
import {Link} from "react-router-dom"


export const Header = () => {
  return <div>
      <header>
        <Link to="/">
          <div className='logo'>
              <img src={logo} alt="Logo" width="90px" />
          </div>
        </Link>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/products">Productos</Link>
          </li>
        </ul>
        <div className="cart">
        <box-icon type='solid' name='cart-alt'></box-icon>
          <span className='item__total'>0</span>
        </div>
      </header>
  </div>;
};
