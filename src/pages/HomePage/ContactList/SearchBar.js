import React from 'react';
import {SearchBarContainer, SearchBarInput} from "./styles";
import SearchIcon from "../../../components/Icons/SearchIcon";

function SearchBar({handleSearchValue}){

    return(
        <SearchBarContainer>
            <SearchIcon/>
            <SearchBarInput placeholder={"search name or phone"} onChange={handleSearchValue} />
        </SearchBarContainer>

    )
}

export default SearchBar
