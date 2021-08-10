import {
  SET_BOOKS,
  ZERO_BOOKS,
  SET_DETAILS,
  HAS_MORE,
} from "../actions/booksActions";

const initialState = {
  books: [],
  details: {},
  hasMore: true,
};

export const booksReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_BOOKS:
      return { ...state, books: [...state.books, ...payload] };
    case ZERO_BOOKS:
      return { ...state, books: [] };
    case SET_DETAILS:
      return { ...state, details: payload };
    case HAS_MORE:
      return { ...state, hasMore: payload };
    default:
      return state;
  }
};
