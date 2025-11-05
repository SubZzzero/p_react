import React from 'react';
import "./Header.css"
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Header() {
    return (
        <header
            className="header"
        >
            <div className="container">
                <div className="header-inner">

                    <a className="header-logo" href="/">
                        <img className="logo" src="/img/logo.png" alt="logo" />
                    </a>

                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input
                            className="search-pizza-input"
                            type="text"
                            placeholder="Search pizza..."
                        />
                    </div>

                    <div className="button-wrapper">
                        <a className="button button-cart" href="/cart">
                            <span className="button-price">0 $</span>
                            <div className="button-delimiter"></div>
                            <PiShoppingCartSimple className="cart-ico" />
                            <span className="button-item">0</span>
                        </a>
                    </div>

                </div>
            </div>
        </header>
    );
}
