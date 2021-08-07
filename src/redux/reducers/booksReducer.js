import { SET_BOOKS, ZERO_BOOKS, SET_DETAILS } from "../actions/booksActions";

const initialState = {
  books: [],
  details: {},

};

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      return { ...state, books: [...state.books, ...payload] };
    case ZERO_BOOKS:
      return { ...state, books: [] };
      case SET_DETAILS:
      return { ...state, details: payload };
    default:
      return state;
  }
};
