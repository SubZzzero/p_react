import React, { useState } from "react";
import { FiPlus } from "react-icons/fi"; // плюс
import "./PizzaBlock.css";

export default function PizzaBlock() {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(1);
    const [pizzaCount, setPizzaCount] = useState(0)

    const types = ["Thin", "Traditional"];
    const sizes = ["26 cm", "30 cm", "40 cm"];

    return (
        <div className="pizza-block">
            <h4 className="pizza-block-title">Cheeseburger Pizza</h4>
            <img
                className="pizza-block-image"
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
                alt="Pizza"
            />

            <div className="pizza-block-selector">
                <ul className="pizza-block-list">
                    {types.map((type, index) => (
                        <li
                            key={index}
                            className={`pizza-block-item ${activeType === index ? 'active' : ''}`}
                            onClick={() => setActiveType(index)}
                        >
                            {type}
                        </li>
                    ))}
                </ul>
                <ul className="pizza-block-list">
                    {sizes.map((size, index) => (
                        <li
                            key={index}
                            className={`pizza-block-item ${activeSize === index ? 'active' : ''}`}
                            onClick={() => setActiveSize(index)}
                        >
                            {size}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="pizza-block-bottom">
                <div className="pizza-block-price">from $5.50</div>
                <div className="button" onClick={() => setPizzaCount(prev => prev + 1)}>
                    <span>Add</span>
                    {pizzaCount > 0 && (
                        <span className="pizza-count">{pizzaCount}</span>
                    )}
                </div>

            </div>
        </div>
    );
}
