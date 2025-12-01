import React from 'react'
import "./CartEmpty.css"
import { Link } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { setActiveCategory, setCurrentPage } from "../../redux/slices/filterSlice";

function CartEmpty() {
    const dispatch = useDispatch();
    return (
        <>

            <div className="cart-empty">
                <div className="cart-empty-inner">
                    <h2 className='cart-empty-title'>You cart is empty...</h2>
                    <p className='cart-empty-subtitle'>You haven’t added anything yet.</p>
                    <img className="cart-empty-img" src="/img/cart-empty.png"
                        alt="empty" />

                    <Link to="/" onClick={() => {
                        dispatch(setActiveCategory(0))
                        dispatch(setCurrentPage(1))
                    }}>
                        <button className='button'>Return to Home</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CartEmpty;