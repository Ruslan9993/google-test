import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import { getBooks } from "../../axios/getBooks";

import {
  changeValue,
  setQuery,
  changeSorting,
  changeSubject,
} from "../../redux/actions/searchActions";
import { zeroBooks } from "../../redux/actions/booksActions";

import "./SearchBar.css";

export const SearchBar = () => {
  const value = useSelector((state) => state.search.value);
  const query = useSelector((state) => state.search.query);
  const sorting = useSelector((state) => state.search.sorting);
  const subject = useSelector((state) => state.search.subject);
  const startIndex = useSelector((state) => state.search.startIndex);
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();


  const handleChange = (e) => {
    if(query) {
      dispatch(setQuery(''))
    }
    dispatch(changeValue(e.target.value));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(zeroBooks());
    dispatch(setQuery(value));
    if (location !== "/") {
      history.push("/");
    }
  };

  useEffect(() => {
    dispatch(zeroBooks());
  }, [query, dispatch]);

  useEffect(() => {
    dispatch(getBooks(query, startIndex, sorting, subject));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, query, startIndex]);
  return (
    <div className="search-bar">
      <p className='search-bar__title'>Search for books</p>
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <div className="search-bar__input">
          <input
            className="input"
            type="text"
            value={value}
            onChange={handleChange}
          />
          <SearchIcon className="icon" onClick={handleSubmit}>
            Search
          </SearchIcon>
        </div>
        <div className="search-selects">
        <div className="subject-select">
            <label htmlFor="subject">Subject</label>
            <select
              id="subject"
              onChange={(e) => dispatch(changeSubject(e.target.value))}
              className='select'
            >
              <option>All</option>
              <option>Art</option>
              <option>Biography</option>
              <option>Computers</option>
              <option>History</option>
              <option>Medical</option>
              <option>Poetry</option>
            </select>
          </div>
          <div className="sorting-select">
            <label htmlFor="sorting">Sorting</label>
            <select
              id="sorting"
              onChange={(e) => dispatch(changeSorting(e.target.value))}
              className='select'

            >
              <option>Relevance</option>
              <option>Newest</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};
