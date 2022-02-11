import React, { useState ,createContext , useEffect} from "react"
import Data from "../Data.js"

export const Context = createContext()

export const DataPr = (props) =>{
    const [Products, setProducts] = useState([])
    const [menu, setMenu] = useState(false);
    const [Cart, setCart] = useState([])

    useEffect(()=>{
        const Products = Data.items
        setProducts(Products)  //Set producto tomara la variable de Products consumiendo la Data.js//
    },[])

    const addCart = (id) => {
        const check = Cart.every(item => {
            return item.id !== id;
        })
        if(check){
            const data = Products.filter(Product =>{
                 return Product === id
            })
            setCart([...Cart,...data])
        }else{
            alert("Producto ya agregado.")
        }
    }

     const value = {
        Products : [Products],
        menu: [menu, setMenu],
        addCart: addCart,
        Cart: [Cart, setCart]
    }
    return(
        <Context.Provider value = {value}>
            {props.children}
        </Context.Provider>
    )
} 
