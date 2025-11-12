import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory } from "../../redux/slices/filterSlice";
import "./CategoriesList.css";

export default function CategoriesList() {
    const dispatch = useDispatch();
    const { categories, activeCategory } = useSelector(state => state.filters);

    return (
        <ul className="categories-list">
            {categories.map((item, index) => (
                <li
                    key={item}
                    className={`categories-item ${activeCategory === index ? "active" : ""}`}
                    onClick={() => dispatch(setActiveCategory(index))}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}
