import React, { useRef, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { useDispatch } from "react-redux";
import { setActiveCategory, setSearch } from "../../redux/slices/filterSlice";

import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";


import "./Search.css"

function Search() {
    const dispatch = useDispatch();
    const focusInput = useRef<HTMLInputElement | null>(null);

    const [localValue, setLocalValue] = useState<string>("");

    const debouncedSetSearch = useDebouncedCallback(
        (value: number) => {
            dispatch(setSearch(value));
        },
        400
    );
    //FIX
    const onChangeInput = (event: any) => {
        const val = event.target.value;
        setLocalValue(val);
        debouncedSetSearch(val);
        dispatch(setActiveCategory(0));
    };

    const clearInputFocusInput = () => {
        setLocalValue("");
        dispatch(setSearch(""));
        focusInput.current?.focus();
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
