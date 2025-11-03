import React, { useState } from 'react';
import { FiChevronDown } from "react-icons/fi";
import "./Sort.css";

export default function Sort() {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState(0);

    const options = ["popularity", "price", "alphabet"];

    const onSelect = (index) => {
        setActive(index);
        setOpen(false);
    };

    return (
        <div className="sort">
            <div className="sort-label" onClick={() => setOpen(!open)}>
                <FiChevronDown size={16} />
                <b>Sort by:</b>
                <span>{options[active]}</span>
            </div>

            {open && (
                <div className="sort-popup">
                    <ul>
                        {options.map((item, index) => (
                            <li
                                key={index}
                                className={active === index ? "active" : ""}
                                onClick={() => onSelect(index)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}
