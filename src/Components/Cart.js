import React from "react";
// import "./cart.css"
import "./cartnew.css"
import Scrollbars from "react-custom-scrollbars-2";

import { Products } from "./Products";
import { useState, createContext } from "react";
import ContextCart from "./ContextCart";

export const cartContext = createContext();

const Cart = () => {
    const [item, setItem] = useState(Products)
    return (
        <>
            <cartContext>
                <ContextCart></ContextCart>
            </cartContext>
        </>
    )
}

export default Cart;