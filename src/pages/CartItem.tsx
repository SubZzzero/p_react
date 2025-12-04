import React from "react";
import { useDispatch } from "react-redux";
import { increaseItem, decreaseItem, removeItem } from "../redux/slices/cartSlice";


type CartItemProperties = {
    id: string;
    name: string
    price: number;
    imageUrl: string;
    types: number[];
    sizes: string[];
    count: number;
}

export default function CartItem({ id, name, price, imageUrl, types, sizes, count }: CartItemProperties) {
    const dispatch = useDispatch()

    return (
        <div className="cart-item">
            <img src={imageUrl} alt={name} />

            <div className="cart-item-info">
                <h3>{name}</h3>
                <p>${price}</p>
                <div className="cart-item-wrapper">
                    <p>{types}</p>
                    <p>{sizes}cm</p>
                </div>
            </div>

            <div className="cart-item-count">
                <button onClick={() => dispatch(decreaseItem(id))}>-</button>
                <span>{count}</span>
                <button onClick={() => dispatch(increaseItem(id))}>+</button>
            </div>

            <button onClick={() => dispatch(removeItem(id))} className="remove-item-btn">Remove</button>
        </div>
    );
}