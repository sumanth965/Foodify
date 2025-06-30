import React, { useState } from "react";
import { FaSearch } from 'react-icons/fa';

export default function Search({ data }) {
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    const handleSearch = (event) => {
        const value = event.target.value;
        setQuery(value);
        const filtered = data.filter(item => item.toLowerCase().includes(value.toLowerCase()));
        setFilteredData(filtered);
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleSearch}
            />
            <button type="submit">
                <FaSearch />
            </button>
            {filteredData.length > 0 && (
                <div className="search-results">
                    {filteredData.map((item, index) => (
                        <div key={index} className="search-item">
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
