import React, {useContext} from 'react';
import { Context } from "../../Context/DataPr"
import { Productitem } from "./Productitem"

export const ProductsList = () => {
    //Vamos a consumir los datos del context
  const value = useContext(Context)
  const [Products] = value.Products 

  return(
    <>
    <h1 className='Tittle'>PRODUCTOS</h1> 
    <div className='Products'>
      {
        Products.map(Product => (
          <Productitem 
          key={Product.id} 
          id={Product.id}
          title={Product.title}
          price={Product.price}
          image={Product.image}
          category={Product.category}
          cantidad={Product.cantidad}
          />
        ))
      }
      <Productitem/>
     </div>
    </>
  )
};
