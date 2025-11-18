import React from 'react';
import "./Header.css"
import Search from '../Search';
import { useSelector } from 'react-redux';


import { Link } from 'react-router-dom';
import { PiShoppingCartSimple } from "react-icons/pi";



export default function Header() {
    const { items, totalPrice } = useSelector(state => state.cart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0)


    return (
        <header
            className="header"
        >
            <div className="container">
                <div className="header-inner">

                    <Link className="header-logo" to="/">
                        <img
                            onClick={() => window.location.href = "/"}
                            style={{ cursor: 'pointer' }}
                            className="logo"
                            src="/img/logo.png"
                            alt="logo" />
                    </Link>

                    <Search />

                    <div className="button-wrapper">
                        <Link className="button button-cart" to="/cart">
                            <span className="button-price">{totalPrice} $</span>
                            <div className="button-delimiter"></div>
                            <PiShoppingCartSimple className="cart-ico" />
                            <span className="button-item">{totalCount}</span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
