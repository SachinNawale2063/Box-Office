/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

// 1) mount
// 2) rerrender
// 3) unmount

const SearchForm = ({ onSearch }) => {

    const [searchOption, setSearchOption] = useState('shows');
    const [searchStr, setSearchStr] = useState("");


    const onSearchInputChange = (event) => {
        setSearchStr(event.target.value);
    };

    const onRadioChange = (event) => {
        setSearchOption(event.target.value);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();

        const option = {
            q: searchStr,
            searchOption
        }

        onSearch(option);
    }


    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" name="" id="" value={searchStr} onChange={onSearchInputChange} />

                <label>
                    Shows
                    <input type="radio" name="search-option" id="" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />
                </label>
                <label>
                    Actors
                    <input type="radio" name="search-option" id="" value="actors" checked={searchOption === 'actors'} onChange={onRadioChange} />
                </label>

                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchForm
