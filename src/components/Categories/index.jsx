import React, { useEffect, useState } from 'react';
import Sort from '../Sort';
import PizzaBlock from '../PizzaBlock';
import Skeleton from '../PizzaBlock/Skeleton';
import "./Categories.css"



export default function Categories() {
    const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items"
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                // WHEN PIZZA DATA LOAD FAKE PIZZA FALSE
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, []);



    const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className="categories">
            <div className='container'>
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
                    {isLoading
                        // FAKE RENDER PIZZA
                        ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                        // RENDER PIZZA
                        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
                </div>
            </div >
        </div>

    );
}
