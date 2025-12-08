import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addItem, selectCartItem } from "../../redux/slices/cartSlice";
import "./PizzaBlock.css";
import { RootState } from "../../redux/store";


type PizzaBlockProperties = {
    name: string;
    imageUrl: string
    type: string[];
    size: number[];
    price: number;
    id: string;
    rating: number;
}
export function toCapitalize(text: string) {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

export default function PizzaBlock({ name, imageUrl, type, size, price, id, rating }: PizzaBlockProperties) {
    const [activeType, setActiveType] = useState(0);
    const [activeSize, setActiveSize] = useState(0);


    const cartItem = useSelector((state: RootState) =>
        selectCartItem(
            state,
            id,
            type[activeType],
            size[activeSize]
        )
    );

    const count = cartItem ? cartItem.count : 0;

    const dispatch = useDispatch()

    const onClickAdd = () => {
        const items = {
            id,
            name,
            imageUrl,
            price,
            type: type[activeType],
            size: size[activeSize],
            count: 1
        }
        dispatch(addItem(items))
    };



    return (
        <div className="pizza-block">
            <div className="pizza-block-up-wrapper">

                <Link to={`/pizza/${id}`}>
                    <h4 className="pizza-block-title">{name}
                    </h4>
                </Link>
                <span className="pizza-block-rating">{rating}</span>
            </div>
            <Link to={`/pizza/${id}`}><img
                className="pizza-block-image"
                src={imageUrl}
                alt={`pizza ${name} ${id}`}
            />
            </Link>
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
