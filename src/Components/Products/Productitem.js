import React, {useContext} from 'react'
import { Link } from "react-router-dom"
import { Context } from "../../Context/DataPr"

export const Productitem = ({
    key, 
    id,
    title,
    price,
    image,
    category,
    cantidad
}) => {

  const value = useContext(Context)
  const addCart = value.addCart

  return (
    <div className='Products'>
      <div className="Product">
       <a href='/'>
        <div className='Product__img'>
          <img src={image} alt={title} />
        </div>
       </a>
      <div className='product__footer'>
        <h1> {title} </h1>
        <p> {category} </p>
        <p className='price'>{price}</p>
      </div>
      <div className="button">
        <button className='btn' onClick={() => addCart(id)}> 
            Añadir al carrito
        </button>
        <div>
          <a href="/">Saber más</a>
        </div>
      </div>
      </div>
      </div>
  )
}
