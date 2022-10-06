import React, { useState } from "react";
import PropTypes from "prop-types";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from "../SearchBar/SearchBar.module.css";

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

    return <form className={css.searchForm} onSubmit={handleSubmit}>
        <input
            onChange={handleChange}
            className={css.searchFormInput}
            type="text"
            name='searchInput'
            value={searchInput}
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
        />
        <button type="submit" className={css.searchFormButton}>
            Search
        </button>
    </form>
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}