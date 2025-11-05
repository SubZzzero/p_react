import React, { useEffect, useState } from 'react';
import "./Categories.css"
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';


export default function Categories() {
    const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items"
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setItems(data);
            });
    }, []);



    const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="categories">
            <div className="categories-inner">
                <ul className="categories-list">
                    {categories.map((item, index) => (
                        <li key={index}
                            className={`categories-item ${activeCategory === index ? "active" : ""}`}
                            onClick={() => setActiveCategory(index)} >
                            {item}
                        </li>
                    ))}
                </ul>
                <Sort />
            </div>
            <div className="categories-headers">
                <h3>{categories[activeCategory]}</h3>
            </div>
            <div className='pizza-block-wrapper'>
                {items.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>

    );
}
