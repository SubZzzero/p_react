import React, { useEffect, useState, useContext } from 'react';
import CategoriesList from '../components/CategoriesList';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory, setSort } from '../redux/slices/filterSlice';
import { SearchContext } from '../App';
import "../components/CategoriesList/CategoriesList.css";

export default function Home() {
    const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items?";
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [paginationPage, setPaginationPage] = useState(1);
    const { inputSearch } = useContext(SearchContext);

    const dispatch = useDispatch();
    const { list: categories, activeCategory, sort } = useSelector(state => state.filters);


    useEffect(() => {
        setIsLoading(true);
        const category = categories[activeCategory];
        const search = inputSearch ? `search=${inputSearch}` : ``;

        const apiUrl =
            category === "All"
                ? `${URL}page=${paginationPage}&limit=10&sortby=${sort.sort}&order=${sort.order}&${search}`
                : `${URL}filter=${category}&sortby=${sort.sort}&order=${sort.order}&${search}`;

        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setItems(Array.isArray(data) ? data : []);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [categories, activeCategory, sort, inputSearch, paginationPage]);

    const pizzaBlocks = items.map(obj => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="categories">
            <div className="container">
                <div className="categories-inner">
                    <CategoriesList
                        categories={categories}
                        activeCategory={activeCategory}
                        setActiveCategory={index => dispatch(setActiveCategory(index))}
                    />
                    <Sort sortBy={sort} setSortBy={obj => dispatch(setSort(obj))} />
                </div>

                <div className="categories-headers">
                    <h3>{categories[activeCategory]}</h3>
                </div>

                <div className="pizza-block-wrapper">
                    {isLoading ? skeletons : pizzaBlocks}
                </div>

                {activeCategory === 0 && (
                    <Pagination onChangePage={numberPage => setPaginationPage(numberPage)} />
                )}
            </div>
        </div>
    );
}
