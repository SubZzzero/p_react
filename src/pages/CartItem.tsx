import React from "react";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../redux/slices/cartSlice";
import { toCapitalize } from "../components/PizzaBlock";

type CartItemProperties = {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}

export default function CartItem({ id, name, price, imageUrl, type, size, count }: CartItemProperties) {
    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />

            <div className="cart-item-info">
                <h3>{name}</h3>
                <p>${price}</p>
                <div className="cart-item-wrapper">
                    <p>{toCapitalize(type)}</p>
                    <p>{size}cm</p>
                </div>
            </div>

            <div className="cart-item-count">
                <button onClick={() => dispatch(decreaseItem({ id, type, size }))}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increaseItem({ id, type, size }))}>+</button>
            </div>

            <button onClick={() => dispatch(removeItem({ id, type, size }))} className="remove-item-btn">Remove</button>
        </div>
    );
}