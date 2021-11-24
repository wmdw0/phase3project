import React from "react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SearchIcon from '@mui/icons-material/Search';
function Search({ search, onSearchChange }) {
    return (
        <nav>
            <SearchOutlinedIcon className="search-button"/>
            <input 
            type="text"
            name="search"
            placeholder="Search..."
            autoComplete="off"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            />
            
            {/*  */}
            {/* <SearchOutlinedIcon/> */}
        </nav>
    );
}

export default Search;