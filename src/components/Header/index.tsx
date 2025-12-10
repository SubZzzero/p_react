
import "./Header.css"
import Search from '../Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../../redux/slices/cartSlice';

import { Link, useLocation } from 'react-router-dom';
import { PiShoppingCartSimple } from "react-icons/pi";




export default function Header() {
    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0) //need fix
    const location = useLocation();


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

                    {location.pathname !== "/cart" && (
                        <>
                            <Search />

                            <div className="button-wrapper" style={{ opacity: totalCount === 0 ? 0 : 1 }}>
                                <Link className="button button-cart" to="/cart">
                                    <div className="button-price-wrapper">
                                        <span className="button-price">$ {totalPrice}</span>
                                    </div>
                                    <div className="button-delimiter"></div>

                                    <div className="button-item-wrapper">
                                        <PiShoppingCartSimple className="cart-ico" />
                                        <span className="button-item">{totalCount}</span>
                                    </div>
                                </Link>
                            </div>


                        </>

                    )}
                </div>
            </div>
        </header>
    );
}
