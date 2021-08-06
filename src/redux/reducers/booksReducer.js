import { SET_BOOKS, ZERO_BOOKS } from "../actions/booksActions";

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      return { ...state, books: [...state.books, ...payload] };
    case ZERO_BOOKS:
      return { ...state, books: [] };
    default:
      return state;
  }
};
