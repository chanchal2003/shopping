import React from "react";
// import "./cart.css"
import "./cartnew.css"

const Cart = () => {
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
            </section>
            {/* <Scrollbars></Scrollbars> */}

            <section>
                <div className="cart-items">
                    <div className="cart-items-container">
                        <div className="items-info">
                            <div className="products-img">
                                <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                            </div>
                        </div>

                        <div className="title">
                            <h2>Samsung 21</h2>
                        </div>

                        <div className="add-minus-quantity">
                        <i class="fa-solid fa-minus"></i>
                        <input type="text" placeholder="2"></input>
                        <i class="fa-solid fa-plus"></i>
                        </div>

                        <div className="price">
                            <h3>3000rs</h3>
                        </div>

                        <div className="remove-item">
                        <i class="fa-solid fa-trash-alt"></i>

                        </div>
                    </div>
                    <div className="cart-items-container">
                        <div className="items-info">
                            <div className="products-img">
                                <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                            </div>
                        </div>

                        <div className="title">
                            <h2>Samsung 21</h2>
                        </div>

                        <div className="add-minus-quantity">
                        <i class="fa-solid fa-minus"></i>
                        <input type="text" placeholder="2"></input>
                        <i class="fa-solid fa-plus"></i>
                        </div>

                        <div className="price">
                            <h3>3000rs</h3>
                        </div>

                        <div className="remove-item">
                        <i class="fa-solid fa-trash-alt"></i>

                        </div>
                    </div>
                    <div className="cart-items-container">
                        <div className="items-info">
                            <div className="products-img">
                                <img src="https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>
                            </div>
                        </div>

                        <div className="title">
                            <h2>Samsung 21</h2>
                        </div>

                        <div className="add-minus-quantity">
                        <i class="fa-solid fa-minus"></i>
                        <input type="text" placeholder="2"></input>
                        <i class="fa-solid fa-plus"></i>
                        </div>

                        <div className="price">
                            <h3>3000rs</h3>
                        </div>

                        <div className="remove-item">
                        <i class="fa-solid fa-trash-alt"></i>

                        </div>
                    </div>
                    
                </div>
            </section>
        </>
    )
}

export default Cart;