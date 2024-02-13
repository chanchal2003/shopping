import React from "react";
// import "./cart.css"
import "./cartnew.css"
import Scrollbars from "react-custom-scrollbars-2";

import { Products } from "./Products";
import { useState, createContext } from "react";
import ContextCart from "./ContextCart";

export const cartContext = createContext();

const Cart = () => {

    return (
        <>
            <cartContext.Provider value={Products}>
                <ContextCart></ContextCart>
            </cartContext.Provider>
        </>
    )
}

export default Cart;