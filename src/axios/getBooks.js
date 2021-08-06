import axios from 'axios';
import { setBooks } from '../redux/actions/booksActions';

export const getBooks = (query='lsd', startIndex = 0, sorting = 'relevance', subject = 'all') => {
  return async dispatch => {

    if(query.trim() === '') {
      return;
    }
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
      console.log('fetch')
    }
    
    catch(err) {
      console.log('Your error is ', err)
    }
  }
}