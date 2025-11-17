import React, { useEffect, useState, useContext } from 'react';
import "../components/CategoriesList/CategoriesList.css";

import axios from 'axios';
import qs from "qs";

import { setCurrentPage, setFilters } from '../redux/slices/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { SearchContext } from '../App';
import { useNavigate } from 'react-router-dom';
import { options } from '../components/Sort';

import CategoriesList from '../components/CategoriesList';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';




export default function Home() {
    const URL = "https://690b168a6ad3beba00f368a7.mockapi.io/items?";

    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { inputSearch } = useContext(SearchContext);

    const dispatch = useDispatch();
    const { categories, activeCategory, sort, currentPage } = useSelector(state => state.filters);

    const onChangePage = (pageNumber) => {
        dispatch(setCurrentPage(pageNumber))
    }
    const [searchUrl, setSearchUrl] = useState(false)

    useEffect(() => {
        if (window.location.search) {
            const params = qs.parse(window.location.search.substring(1))
            const sortingParams = options.find(items => items.sort === params.sortProperty || options[0]);

            dispatch(setFilters({
                activeCategory: Number(params.activeCategory),
                currentPage: Number(params.currentPage),
                sort: sortingParams
            }))
            setSearchUrl(true);
        }
    }, [])

    //reset pagination
    useEffect(() => {
        if (!searchUrl) {
            dispatch(setCurrentPage(1));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory, sort, inputSearch])

    useEffect(() => {
        setIsLoading(true);
        const category = categories[activeCategory];
        const search = inputSearch ? `&search=${inputSearch}` : ``;

        const apiUrl =
            category === "All"
                ? `${URL}page=${currentPage}&limit=10&sortBy=${sort.sort}&order=${sort.order}${search}`
                : `${URL}filter=${category}&sortBy=${sort.sort}&order=${sort.order}`;

        axios.get(apiUrl)
            .then(response => {
                setItems(Array.isArray(response.data) ? response.data : []);
                setIsLoading(false);
            })
            .catch(() => {
                setItems([]);
                setIsLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory, sort, inputSearch, currentPage]);

    useEffect(() => {
        const queryString = qs.stringify({
            sortProperty: sort.sort,
            currentPage,
            activeCategory
        })
        navigate(`?${queryString}`)
    }, [sort, currentPage, activeCategory, navigate])

    const pizzaBlocks = items.map(obj => <PizzaBlock key={obj.id} {...obj} />);
    const skeletons = [...new Array(10)].map((_, index) => <Skeleton key={index} />);
    const LIMIT = 10;  //limit for pagination hard

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

                {pizzaBlocks.length >= LIMIT && (
                    <Pagination currentPage={currentPage} onChangePage={onChangePage} />
                )}
            </div>
        </div>
    );
}
