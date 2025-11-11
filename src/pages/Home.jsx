import React, { useEffect, useState } from 'react';
import CategoriesList from '../components/CategoriesList';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import "../components/CategoriesList/CategoriesList.css";


const categories = ["All", "Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

export default function Home({ inputSearch }) {
    const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items?"

    const [items, setItems] = useState([]); //categories items
    const [isLoading, setIsLoading] = useState(true); //skeleton
    const [sortBy, setSortBy] = useState({ label: "Popularity: highest first", sort: "rating", order: "desc" }) //sorting popup
    const [paginationPage, setPaginationPage] = useState(1)
    const [activeCategory, setActiveCategory] = useState(0);

    useEffect(() => {
        setIsLoading(true);

        const category = categories[activeCategory];
        const search = inputSearch ? `search=${inputSearch}` : ``;

        const apiUrl =
            category === "All"
                ? `${URL}page=${paginationPage}&limit=10&sortby=${sortBy.sort}&order=${sortBy.order}&${search}`
                : `${URL}filter=${category}&sortby=${sortBy.sort}&order=${sortBy.order}&${search}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                // setItems(data);
                setItems(Array.isArray(data) ? data : []);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [activeCategory, sortBy, inputSearch, paginationPage]);

    const pizzaBlocks = items
        // .filter(obj => obj.name.toLowerCase().includes(inputSearch.toLowerCase()))
        .map(obj => <PizzaBlock key={obj.id} {...obj} />);

    const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

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
                        ? skeletons
                        : pizzaBlocks
                    }
                </div>
                <Pagination onChangePage={numberPage => setPaginationPage(numberPage)} />
            </div>
        </div >
    );
}
