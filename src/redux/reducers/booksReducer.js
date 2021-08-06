import { SET_BOOKS } from '../actions/booksActions';

const initialState = {
  books: [],
};



export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case SET_BOOKS:
        return { ...state, books: [...state.books, ...payload]}
    default:
      return state;
  }
};
