import React, { useState } from "react";
import "./PizzaBlock.css";

export default function PizzaBlock({ name, imageUrl, type, size, price, id }) {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);


    function toCapitalize(text) {
        return text.charAt(0).toUpperCase() + text.slice(1);
    }
    return (
        <div className="pizza-block">
            <h4 className="pizza-block-title">{name}</h4>
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
                <button className="button">
                    <span>Add</span>
                </button>

            </div>
        </div>
    );
}
