import React, { useRef, useState, useEffect } from 'react';
import { FiChevronDown } from "react-icons/fi";
import "./Sort.css";

export default function Sort({ sortBy, setSortBy }) {
    const options = [
        { label: "popularity(DESC)", sort: "rating", order: "desc" },
        { label: "popularity(ASC)", sort: "rating", order: "asc" },

        { label: "price(DESC)", sort: "price", order: "desc" },
        { label: "alphabet", sort: "name", order: "asc" }
    ];

    // options.map((items) => {
    //     return (console.log(items.label))
    // })

    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

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

    const onSelect = (index) => {
        setActive(index);
        setSortBy(options[index]);
        setOpen(false);
        console.log(index)
    };

    return (
        <div className="sort" ref={sortRef}>
            <div className="sort-label" onClick={() => setOpen(!open)}>
                <FiChevronDown
                    size={16}
                    className={open ? "icon rotated" : "icon"}
                />
                <b>Sort by:</b>
                <span>{options[active].label}</span>
            </div>

            {open && (
                <div className="sort-popup">
                    <ul>
                        {options.map((item, index) => (
                            <li
                                key={index}
                                className={sortBy.sort === item.sort && sortBy.order === item.order ? "active" : ""}
                                onClick={() => onSelect(index)}

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
