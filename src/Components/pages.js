import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import {Beggin} from "./beggin"
import {ProductsList} from "./Products/index"

export const Pages = () => {
  return(
    <section>
      <Routes>
        <Route path='/' element={ <Beggin/>} />
        <Route path='/products' element={ <ProductsList/> } />
      </Routes>
    </section>
  )
};
