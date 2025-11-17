import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSort } from "../../redux/slices/filterSlice";
import { FiChevronDown } from "react-icons/fi";
import "./Sort.css";



export const options = [
    { label: "Popularity: highest first", sort: "rating", order: "desc" },
    { label: "Popularity: lowest first", sort: "rating", order: "asc" },
    { label: "Price: highest first", sort: "price", order: "desc" },
    { label: "Price: lowest first", sort: "price", order: "asc" },
    { label: "Alphabet", sort: "name", order: "asc" },
];

export default function Sort() {
    const dispatch = useDispatch();
    const sort = useSelector(state => state.filters.sort);

    const [open, setOpen] = useState(false);
    const sortRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    const onSelect = (option) => {
        dispatch(setSort(option));
        setOpen(false);
        console.log(option)
    };

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort-label" onClick={() => setOpen(!open)}>
                <FiChevronDown size={16} className={open ? "icon rotated" : "icon"} />
                <b>Sort by:</b>
                <span>{sort.label}</span>
            </div>

            {open && (
                <div className="sort-popup">
                    <ul>
                        {options.map((item) => (
                            <li
                                key={item.label}
                                className={
                                    sort.sort === item.sort && sort.order === item.order ? "active" : ""
                                }
                                onClick={() => onSelect(item)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
