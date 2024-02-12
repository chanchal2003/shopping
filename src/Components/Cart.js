import React from "react";
// import "./cart.css"
import "./cartnew.css"
import Scrollbars from "react-custom-scrollbars-2";
import Items from "./Items"
import { Products } from "./Products";
import { useState } from "react";

const Cart = () => {
    const [item,setItem] = useState(Products)
    return (
        <>
            <header>
                <div className="continue-shopping">
                    <img src="./images/arrow.png" alt="arrow" className="arrow-icon" />
                    <h3>Continue Shopping</h3>
                </div>
                <div className="cart-icon">
                    <img src="./images/cart.png" alt="cart" srcSet="" />
                    <p>7</p>
                </div>
            </header>


            <section className="main-cart-section">
                <h1>Shopping Cart</h1>
                <p className="total-items">
                    you have<span className="total-items-count">4</span>items
                    in shopping cart
                </p>
            {/* <Scrollbars></Scrollbars> */}

                <div className="cart-items">
                    {/* <Scrollbars> */}
                    {
                        item.map((curItem)=>{
                            return <Items
                            key={curItem.id} {...curItem}
                            ></Items>
                        })
                    }
                    {/* </Scrollbars> */}
                    
                </div>

                <div className="cart-total">
                    <h3>Cart Total : <span>220rs</span></h3>
                </div>
            </section>
        </>
    )
}

export default Cart;