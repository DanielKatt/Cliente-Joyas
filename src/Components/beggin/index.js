import React from 'react';
import Portada from "../../img/logo.png"
import { Link } from 'react-router-dom';

export const Beggin = () => {
  return (
      <div className="Beggin">

          <div className="row">
            <div className="col-1">
            <h1>Joyas Hilmar</h1>
            <h1>Productos de Joyeria</h1>
            <p>Joyas a tu alcance</p>
            <Link to="/Products">
              <button type='button' className='buttonn'>Empezar</button>
            </Link>
            </div>
            <div className="col-2">
               <img src={Portada} alt="" className='col-3'/>
            </div>
          </div>
      </div>  
  )
};
