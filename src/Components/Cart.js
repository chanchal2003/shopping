import React from "react";
// import "./cart.css"
import "./cartnew.css"
import Scrollbars from "react-custom-scrollbars-2";
import { useReducer } from "react";
import { Products } from "./Products";
import { useState, createContext } from "react";
import ContextCart from "./ContextCart";
import reducer from "./reducer";

export const cartContext = createContext();
const initialState = {
    item:Products,
    totalAmount : 0,
    totalItem : 0,  
}

const Cart = () => {
    const [state,dispatch] = useReducer(reducer,initialState);

    const removeItem = (id) => {
        return dispatch({type:"REMOVE_ITEM",payload:id})
    }

    const incrementItem = (id) => {
        return dispatch({type:"INCREMENT_ITEM",payload:id})
    }

    const decrementItem = (id) => {
        return dispatch({type:"DECREMENT_ITEM",payload:id});
    }
    return (
        <>
            <cartContext.Provider value={ {...state,removeItem,incrementItem,decrementItem}}>
                <ContextCart></ContextCart>
            </cartContext.Provider>
        </>
    )
}

export default Cart;