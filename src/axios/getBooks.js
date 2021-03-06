import axios from 'axios';
import { hasMore, setBooks } from '../redux/actions/booksActions';
import { setLoading, changeValue } from '../redux/actions/searchActions';

export const getBooks = (query, startIndex, sorting, subject) => {
  return async dispatch => {

    if(query.trim() === '') {
      return;
    }
    try {
      dispatch(setLoading(true))
      dispatch(hasMore(true))
      const result = await axios({
        method: 'GET',
        url: 'https://www.googleapis.com/books/v1/volumes',
        params: {
          q: query,
          startIndex: startIndex,
          api_key: process.env.API_KEY,
          maxResults: 30,
          sorting: sorting,
          subject: subject,
        },
      })
      dispatch(setBooks(result.data.items))
      dispatch(changeValue(''))
      dispatch(setLoading(false))
      console.log('fetch')
    }
    
    catch(err) {
      console.log('Your error is ', err)
      dispatch(hasMore(false))
    }
  }
}