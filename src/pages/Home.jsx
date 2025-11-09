import React, { useEffect, useState } from 'react';
import CategoriesList from '../components/CategoriesList';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import "../components/CategoriesList/CategoriesList.css";


const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

export default function Home() {
    const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items?"

    const [items, setItems] = useState([]); //categories items
    const [isLoading, setIsLoading] = useState(true); //skeleton
    const [sortBy, setSortBy] = useState({ label: "popularity(DESC)", sort: "rating", order: "desc" }) //sorting popup

    const [activeCategory, setActiveCategory] = useState(0);


    useEffect(() => {
        setIsLoading(true);

        const category = categories[activeCategory];

        const apiUrl =
            category === "All"
                ? `${URL}sortby=${sortBy.sort}&order=${sortBy.order}`
                : `${URL}filter=${category}&sortby=${sortBy.sort}&order=${sortBy.order}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setItems(data);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [activeCategory, sortBy]);


    return (
        <div className="categories">
            <div className='container'>
                <div className="categories-inner">

                    <CategoriesList
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={setActiveCategory}
                    />

                    <Sort sortBy={sortBy} setSortBy={setSortBy} />
                </div>

                <div className="categories-headers">
                    <h3>{categories[activeCategory]}</h3>
                </div>

                <div className='pizza-block-wrapper'>
                    {isLoading
                        ? [...new Array(10)].map((_, index) => <Skeleton key={index} />)
                        : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
                    }
                </div>
            </div>
        </div>
    );
}
