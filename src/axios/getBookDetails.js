import axios from 'axios';
import { setDetails } from '../redux/actions/booksActions';

export const getBookDetails = (match) => {
  return async dispatch => {

    const result = await axios.get(`https://www.googleapis.com/books/v1/volumes/${match}`);

    dispatch(setDetails(result.data));
    console.log('this',result.data)
    console.log('I love sucking big dicks!')
  }
}