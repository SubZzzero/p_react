import "./CartBlock.css";
import { Link } from "react-router-dom";
import { IoMdTrash } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

export default function CartBlock() {
    return (
        <div className='cart-block'>
            <div className="container">
                <div className="cart-block-inner">

                    <div className="cart-block-upper">

                        <h1>Cart</h1>

                        <div className="cart-header-right">
                            <p className="cart-total-pizzas">Total pizzas: 1</p>
                            <button className="clear-cart-btn">
                                <IoMdTrash />
                            </button>
                        </div>
                    </div>


                    <div className="cart-item">
                        <img
                            src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FProducts%2FPitsa%2FPitsy%2FHrusha%2Fpearandbluecheese-pieces.webp&w=1560&q=75"
                            alt="Pizza"
                        />

                        <div className="cart-item-info">
                            <h3>Pepperoni Pizza</h3>
                            <p>$12.99</p>
                        </div>

                        <div className="cart-item-count">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>

                        <button className="remove-item-btn">Remove</button>
                    </div>


                    <div className="cart-total">
                        <p>Total: <span>$12.99</span></p>

                        <div className="cart-total-buttons">
                            <Link to="/" ><button className="go-back-btn">
                                <IoIosArrowBack />
                                Go back
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