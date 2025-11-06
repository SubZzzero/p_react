import React from 'react';
import "./Header.css"
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { PiShoppingCartSimple } from "react-icons/pi";

export default function Header() {
    return (
        <header
            className="header"
        >
            <div className="container">
                <div className="header-inner">

                    <Link className="header-logo" to="/">
                        <img className="logo" src="/img/logo.png" alt="logo" />
                    </Link>

                    <div className="search-wrapper">
                        <FaSearch className="search-icon" />
                        <input
                            className="search-pizza-input"
                            type="text"
                            placeholder="Search pizza..."
                        />
                    </div>


                    <div className="button-wrapper">
                        <Link className="button button-cart" to="/cart">
                            <span className="button-price">0 $</span>
                            <div className="button-delimiter"></div>
                            <PiShoppingCartSimple className="cart-ico" />
                            <span className="button-item">0</span>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}
