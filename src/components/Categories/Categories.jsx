import React, { useState } from 'react';
import "./Categories.css"
import Sort from '../Sort/Sort';
import PizzaBlock from '../PizzaBlock/PizzaBlock';
import pizzas from '../../data/pizzas.json';

console.log(pizzas)
console.log(pizzas)
export default function Categories(props) {

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
                {pizzas.map(obj => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </div>

    );
}
