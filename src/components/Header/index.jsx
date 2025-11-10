import React from 'react';
import "./Header.css"
import Search from '../Search';
import { Link } from 'react-router-dom';
import { PiShoppingCartSimple } from "react-icons/pi";



export default function Header({ inputSearch, setInputSearch }) {

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

                    <Search inputSearch={inputSearch} setInputSearch={setInputSearch} />

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
