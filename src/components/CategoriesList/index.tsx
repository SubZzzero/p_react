
import { useSelector, useDispatch } from "react-redux";
import { setActiveCategory, selectFilters } from "../../redux/slices/filterSlice";
import "./CategoriesList.css";

export default function CategoriesList() {
    const dispatch = useDispatch();
    const { categories, activeCategory } = useSelector(selectFilters);


    return (
        <ul className="categories-list">
            {categories.map((item: string, index: number) => (
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
