import React from "react";
import Search from "../atoms/search.tsx";

interface FilterProps {
    collapse: boolean;
}

const SearchFilterBoard: React.FC<FilterProps> = ({collapse}) => {
    return (
        <div className="search-filter-board">
            <Search collapse={collapse} />
        </div>
    )
}

export default SearchFilterBoard;