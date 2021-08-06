import axios from 'axios';
import { setBooks } from '../redux/actions/booksActions';

export const getBooks = (query, startIndex, sorting, subject) => {
  return async dispatch => {

    try {

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
    }
    
    catch(err) {
      console.log('Your error is ', err)
    }
  }
}