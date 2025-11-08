import React, { useRef, useState, useEffect } from 'react';
import { FiChevronDown } from "react-icons/fi";
import "./Sort.css";

export default function Sort({ sortBy, setSortBy }) {
    const options = [
        { label: "popularity", sort: "rating" },
        { label: "price", sort: "price" },
        { label: "alphabet", sort: "name" }
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
        setSortBy(options[index].sort);
        setOpen(false);
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
                                className={sortBy === item.sort ? "active" : ""}
                                onClick={() => onSelect(index)}
                            >
                                {item.label}
                                {console.log(index)}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
