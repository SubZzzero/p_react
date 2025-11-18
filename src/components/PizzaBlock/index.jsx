import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem } from "../../redux/slices/cartSlice";
import "./PizzaBlock.css";

export default function PizzaBlock({ name, imageUrl, type, size, price, id, rating }) {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);

    const cartItem = useSelector((state) =>
        state.cart.items.find((obj) => obj.id === id)
    )
    const count = cartItem ? cartItem.count : 0;

    const dispatch = useDispatch()

    const onClickAdd = (() => {
        const items = {
            id,
            name,
            imageUrl,
            price,
            types: type[activeType],
            sizes: size[activeSize]
        }
        dispatch(addItem(items))
    })


    function toCapitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }

    return (
        <div className="pizza-block">
            <div className="pizza-block-up-wrapper">
                <h4 className="pizza-block-title">{name}
                </h4>
                <span className="pizza-block-rating">{rating}</span>
            </div>
            <img
                className="pizza-block-image"
                src={imageUrl}
                alt={`pizza ${name} ${id}`}
            />

            <div className="pizza-block-selector">
                <ul className="pizza-block-list">
                    {type.map((type, index) => (
                        <li
                            key={index}
                            className={`pizza-block-item ${activeType === index ? 'active' : ''}`}
                            onClick={() => setActiveType(index)}
                        >
                            {toCapitalize(type)}
                        </li>
                    ))}
                </ul>
                <ul className="pizza-block-list">
                    {size.map((size, index) => (
                        <li
                            key={index}
                            className={`pizza-block-item ${activeSize === index ? 'active' : ''}`}
                            onClick={() => setActiveSize(index)}
                        >
                            {`${size} cm`}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pizza-block-bottom">
                <div className="pizza-block-price">from ${price}</div>
                <button onClick={onClickAdd} className="button">
                    <span>Add</span>
                    {count > 0 &&
                        <span className="pizza-block-count">{count}</span>
                    }

                </button>

            </div>
        </div>
    );
}
