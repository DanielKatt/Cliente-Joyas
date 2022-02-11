import React, {useContext} from 'react';
import logo from "../../img/logo.png"
import {Link} from "react-router-dom"
import { Context  } from "../../Context/DataPr"

export const Header = () => {

  const value = useContext(Context)
  const[menu, setMenu] = value.menu
  const[Cart] = value.Cart

  const toogleMenu = () =>{
    setMenu(!menu)
  }

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
        <div className="cart" on onClick={toogleMenu}>
        <box-icon type='solid' name='cart-alt'></box-icon>
          <span className='item__total'>{Cart.length} </span>
        </div>
      </header>
  </div>;
};
