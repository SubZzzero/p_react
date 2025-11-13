import React, { useContext, useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { SearchContext } from "../../App";

import "./Search.css"

function Search() {

    const focusInput = useRef(null);
    const { setInputSearch } = useContext(SearchContext);
    const [localValue, setLocalValue] = useState("");

    const debouncedSetSearch = useDebouncedCallback(
        (value) => {
            setInputSearch(value);
        },
        250
    );

    const onChangeInput = (event) => {
        const val = event.target.value;
        setLocalValue(val);
        debouncedSetSearch(val);
    };

    const clearInputFocusInput = () => {
        setLocalValue("");
        setInputSearch("");
        focusInput.current.focus();
        debouncedSetSearch.cancel();
    };

    return (
        <div>
            <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                    ref={focusInput}
                    onChange={onChangeInput}
                    value={localValue}
                    className="search-pizza-input"
                    type="text"
                    placeholder="Search pizza..."
                />
                {localValue && (
                    <MdOutlineClear
                        className="search-clear-icon"
                        onClick={clearInputFocusInput}
                    />
                )}
            </div>
        </div>
    );
}

export default Search;
