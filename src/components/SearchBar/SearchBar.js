import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getBooks } from '../../axios/getBooks';
import { changeValue, setQuery, changeSorting, changeSubject } from '../../redux/actions/searchActions';
import { zeroBooks } from '../../redux/actions/booksActions';

export const SearchBar = () => {

  const value = useSelector(state => state.search.value)
  const query = useSelector(state => state.search.query)
  const sorting = useSelector(state => state.search.sorting)
  const subject = useSelector(state => state.search.subject)
  const startIndex = useSelector(state => state.search.startIndex)
  const dispatch = useDispatch()

  const handleChange = (e) => {
    dispatch(changeValue(e.target.value))
  }

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setQuery(value))

  }

  useEffect(() => {
    dispatch(zeroBooks());
  }, [query, sorting, subject, dispatch]);

  useEffect(() => {
    dispatch(getBooks(query))
  }, [dispatch, query, sorting, subject, startIndex])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          value={value}
          onChange={handleChange}
        />
    <select onChange={(e) => dispatch(changeSubject(e.target.value))}>
          <option>All</option>
          <option>Art</option>
          <option>Biography</option>
          <option>Computers</option>
          <option>History</option>
          <option>Medical</option>
          <option>Poetry</option>
        </select>
        <select onChange={(e) => dispatch(changeSorting(e.target.value))}>
          <option>Relevance</option>
          <option>Newest</option>
        </select>
      </form>
    </div>
  )
}
