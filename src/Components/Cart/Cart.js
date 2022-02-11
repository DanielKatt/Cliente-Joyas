import React, {useContext} from 'react'
import { Context } from "../../Context/DataPr"


export const Cart = () => {

   const value = useContext(Context)
    const[menu, setMenu] = value.menu

    const tooglefalse = () => {
        setMenu(false);
    }

    const show1 = menu ? "Carts show" : "Carts";
    const show2 = menu ? "Cart show" : "Cart" 

  return (
    <div className={show1}>
        <div className={show2}>

            <div className="CartClose" onClick={tooglefalse}>
                <box-icon name="x"></box-icon>
            </div>
            <h2>Sus productos</h2>
            <div className='Cart_Center'>
                <div className="Cart_item">
                    <div>
                        <h3>tittle</h3>
                        <p className='price'>$231</p>
                    </div>
                </div>
                <div className="remove_item">
                </div>
                <div className="Cart_footer">
                    <h3>Total: $2311</h3>
                </div>
            </div>
        </div>
    </div>
  )
}
