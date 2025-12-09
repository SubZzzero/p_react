import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { IoMdTrash, IoIosArrowBack } from "react-icons/io";

import { clearItems, selectCart } from "../redux/slices/cartSlice";

import CartEmpty from "../components/CartEmpty/index";
import CartItem from "./CartItem"
import "../components/PagesCss/CartBlock.css";
import { AppDispatch } from "../redux/store";


export default function Cart() {
    const dispatch = useDispatch<AppDispatch>();

    const { items, totalPrice } = useSelector(selectCart);
    const totalCount = items.reduce((sum, item) => sum + item.count, 0);

    if (items.length === 0) {
        return (
            <CartEmpty />
        )
    }

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
                            <button onClick={() => dispatch(clearItems(),)} className="clear-cart-btn">
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
        </div >
    );
}