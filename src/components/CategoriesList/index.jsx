import React from "react";
import "./CategoriesList.css"

export default function CategoriesList({ categories, activeCategory, setActiveCategory }) {
    return (
        <ul className="categories-list">
            {categories.map((item, index) => (
                <li
                    key={index}
                    className={`categories-item ${activeCategory === index ? "active" : ""}`}
                    onClick={() => setActiveCategory(index)}
                >
                    {item}
                </li>
            ))}
        </ul>
    );
}