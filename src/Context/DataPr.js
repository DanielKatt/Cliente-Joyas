import React, { useState ,createContext , useEffect} from "react"
import Data from "../Data.js"

export const Context = createContext()

export const DataPr = (props) =>{
    const [Products, setProducts] = useState([])

    useEffect(()=>{
        const Products = Data
        setProducts(Products)  //Set producto tomara la variable de Products consumiendo la Data.js//
    },[])
     const value = {
        Products : [Products]
    }
    return(
        <Context.Provider value = {value}>
            {props.children}
        </Context.Provider>
    )
} 
