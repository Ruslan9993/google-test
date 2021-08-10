import axios from "axios";
import { setDetails } from "../redux/actions/booksActions";
import { setDetailsLoader } from '../redux/actions/searchActions';

export const getBookDetails = (match) => {
  return async (dispatch) => {
    try {
      dispatch(setDetailsLoader(true))
      const result = await axios.get(
        `https://www.googleapis.com/books/v1/volumes/${match}`
      );

      console.log(result.data)
      dispatch(setDetails(result.data));
      dispatch(setDetailsLoader(false))

    } catch (err) {
      console.log("this is", err);
    }
  };
};
