import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import "./Search.css"

import React from 'react'

function Search({ inputSearch, setInputSearch }) {
    return (
        <div>
            <div className="search-wrapper">
                <FaSearch className="search-icon" />
                <input
                    onChange={event => setInputSearch(event.target.value)}
                    value={inputSearch}
                    className="search-pizza-input"
                    type="text"
                    placeholder="Search pizza..."
                />
                {inputSearch && (
                    <MdOutlineClear
                        className="search-clear-icon"
                        onClick={() => setInputSearch("")}
                    />
                )}

            </div>
        </div>
    )
}

export default Search;