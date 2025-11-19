import React from 'react'
import "./CartEmpty.css"
import { Link } from 'react-router-dom'


function CartEmpty() {
    return (
        <>

            <div className="cart-empty">
                <div className="cart-empty-inner">
                    <h2 className='cart-empty-title'>You cart is empty...</h2>
                    <p className='cart-empty-subtitle'>You haven’t added anything yet.</p>
                    <img className="cart-empty-img" src="/img/cart-empty.png"
                        alt="empty" />

                    <Link to="/" >
                        <button className='button'>Return to Home</button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default CartEmpty;