import React, { useState } from "react";
import { Products } from "./Products";


const Items = ({title,description,price,img,quantity}) => {
    
    return (
        <>
            <div className="cart-items-container">
                <div className="items-info">
                    <div className="products-img">
                        <img src={img}></img>
                    </div>
                </div>

                <div className="title">
                    <h2>{title}</h2>
                    <p>{description}</p>
                </div>

                <div className="add-minus-quantity">
                    <i className="fa-solid fa-minus"></i>
                    <input type="text" placeholder="2"></input>
                    <i className="fa-solid fa-plus"></i>
                </div>

                <div className="price">
                    <h3>{price}</h3>
                </div>

                <div className="remove-item">
                    <i className="fa-solid fa-trash-alt"></i>

                </div>
            </div>
        </>
    )
}

export default Items