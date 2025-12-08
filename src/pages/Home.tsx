import { useEffect, useRef } from 'react';
import "../components/CategoriesList/CategoriesList.css";

import qs from "qs";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { options } from '../components/Sort';

import { fetchPizzas, selectPizzas } from '../redux/slices/pizzasSlice';
import { setCurrentPage, setFilters, selectFilters } from '../redux/slices/filterSlice';

import CategoriesList from '../components/CategoriesList';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { AppDispatch } from '../redux/store';

export default function Home() {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { items, isLoading } = useSelector(selectPizzas);
    const { categories, activeCategory, sort, currentPage, search } = useSelector(selectFilters);


    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1));
            const sortingParams = options.find(opt => opt.sort === params.sortProperty) || options[0];

            dispatch(setFilters({
                activeCategory: Number(params.activeCategory),
                currentPage: 1,
                sort: sortingParams
            }));
        }
    }, [dispatch]);

    const clearUrl = useRef(false)
    useEffect(() => {
        if (!clearUrl.current) {
            clearUrl.current = true;
            return;
        }
        const queryString = qs.stringify({
            sortProperty: sort.sort,
            currentPage,
            activeCategory
        });

        navigate(`?${queryString}`);
    }, [sort, currentPage, activeCategory, navigate]);

    // const isFirstRender = useRef(true);
    useEffect(() => {
        // if (isFirstRender.current) {
        //     isFirstRender.current = false;
        //     return;
        // }
        dispatch(fetchPizzas({
            categories,
            activeCategory,
            sort,
            currentPage,
            search
        }));
    }, [activeCategory, categories, sort, currentPage, search, dispatch]);

    //FIX
    const pizzaBlocks = items.map((obj) => (
        <PizzaBlock key={obj.id}
            id={obj.id}
            name={obj.name}
            imageUrl={obj.imageUrl}
            price={obj.price}
            type={obj.type}
            size={obj.size}
            rating={obj.rating} />
    ));
    const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);

    return (
        <div className="categories">
            <div className="container">
                <div className="categories-inner">
                    <CategoriesList />
                    <Sort />
                </div>

                <div className="categories-headers">
                    <h3>{categories[activeCategory]}</h3>
                </div>

                <div className="pizza-block-wrapper">
                    {isLoading ? skeletons : pizzaBlocks}
                </div>

                {pizzaBlocks.length >= 10 && (
                    <Pagination
                        currentPage={currentPage}
                        onChangePage={(page) => dispatch(setCurrentPage(page))}
                    />
                )}
            </div>
        </div>
    );
}
