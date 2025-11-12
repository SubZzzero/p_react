import { FaSearch } from "react-icons/fa";
import { MdOutlineClear } from "react-icons/md";
import { SearchContext } from "../../App";
import React, { useContext } from 'react';
import "./Search.css"



function Search() {

    const { inputSearch, setInputSearch } = useContext(SearchContext);
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