/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';
import { useSearchStr } from '../lib/useSearchStr.js';
import CustomRadio from './CustomRadio.jsx';
import styled from 'styled-components';

// 1) mount
// 2) rerrender
// 3) unmount

const SearchForm = ({ onSearch }) => {

    const [searchStr, setSearchStr] = useSearchStr("");
    const [searchOption, setSearchOption] = useState('shows');


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
                <SearchInput type="text" placeholder='Search for something...' id="" value={searchStr} onChange={onSearchInputChange} />

                <RadiosWrapper>

                    <CustomRadio label="Shows" name="search-option" value="shows" checked={searchOption === 'shows'} onChange={onRadioChange} />

                    <CustomRadio label="Actors" name="search-option" value="actors" onChange={onRadioChange} />
                </RadiosWrapper>

                <SearchButtonWrapper>

                    <button type="submit">Search</button>
                </SearchButtonWrapper>
            </form>
        </div>
    )
}

export default SearchForm;

const SearchInput = styled.input`
  display: block;
  font-family: 'Roboto', sans-serif;
  width: 200px;
  margin: auto;
  outline: none;
  padding: 13px 15px;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 0px 10px 0px rgba(219, 219, 219, 0.5);
  font-size: 14px;
  border-radius: 12px;
  color: #8d8d8d;
  &::placeholder {
    font-weight: 300;
    color: #8d8d8d;
  }
`;

export const RadiosWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
  label {
    margin: 0 15px;
  }
`;

const SearchButtonWrapper = styled.div`
  text-align: center;
  margin-bottom: 35px;
  button {
    color: #fff;
    background-color: ${({ theme }) => theme.mainColors.blue};
    margin: auto;
    padding: 10px 50px;
    font-size: 15px;
    border: none;
    outline: none;
    border-radius: 12px;
    &:hover {
      cursor: pointer;
    }
  }
`;


