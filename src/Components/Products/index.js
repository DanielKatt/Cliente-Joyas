import React, {useContext} from 'react';
import imagenJoya from "../../img/Joya.jpg"
import { Context } from "../../Context/DataPr"

export const ProductsList = () => {
    //Vamos a consumir los datos del context
  const value = useContext(Context)
  const [Products] = value.Products 

  return(
    <>
    <h1 className='Tittle'>PRODUCTOS</h1> 
    <div className='Products'>
      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      <div className="Product">
      <a href='#'>
      <div className='Product__img'>
        <img src={imagenJoya} alt="producto" />
      </div>
      </a>
      <div className='product__footer'>
        <h1>Tittle</h1>
        <p>Category</p>
        <p className='price'>$350</p>
      </div>
      <div className="button">
        <button className='btn'> 
            Añadir al carrito
        </button>
        <div>
          <a href="#">Saber más</a>
        </div>
      </div>
      </div>

      
    </div>
    </>
  )
};
