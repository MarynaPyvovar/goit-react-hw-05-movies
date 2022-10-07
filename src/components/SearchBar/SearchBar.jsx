import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SearchForm, SearchFormInput, SearchFormButton } from "./SearchBarStyled";

export const Searchbar = ({onSubmit}) => {
    const [searchInput, setSearchInput] = useState('')

    const handleChange = (e) => {
        setSearchInput(e.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (searchInput.trim() === '') {
            return toast("Enter your search query :)");
        }
        onSubmit(searchInput.trim())
    }

    return <SearchForm onSubmit={handleSubmit}>
        <SearchFormInput
            onChange={handleChange}
            type="text"
            name='searchInput'
            value={searchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        />
        <SearchFormButton type="submit">
            Search
        </SearchFormButton>
    </SearchForm>
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}