import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

import CartItem from "../components/CartItem/index"
import "../components/CartBlock/CartBlock.css";

export default function Cart() {

    const { items, totalPrice } = useSelector((state) => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    return (
        <div className="cart-block">
            <div className="container">
                <div className="cart-block-inner">

                    <div className="cart-block-upper">
                        <h1>Cart</h1>
                        <div className="cart-header-right">
                            <p className="cart-total-pizzas">
                                Total pizzas: {totalCount}
                            </p>
                            <button className="clear-cart-btn">
                                <IoMdTrash />
                            </button>
                        </div>
                    </div>


                    {items.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}


                    <div className="cart-total">
                        <p>Total price: <span>${totalPrice}</span></p>

                        <div className="cart-total-buttons">
                            <Link to="/">
                                <button className="go-back-btn">
                                    <IoIosArrowBack /> Go back
                                </button>
                            </Link>

                            <button className="checkout-btn">
                                Checkout
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
