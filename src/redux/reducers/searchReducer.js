import {
  CHANGE_VALUE,
  SET_QUERY,
  CHANGE_SORTING,
  CHANGE_SUBJECT,
  SET_LOADING
} from "../actions/searchActions";

const initialState = {
  value: "",
  query: "",
  startIndex: 0,
  sorting: "relevance",
  subject: "all",
  loading: false,
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_VALUE:
      return { ...state, value: payload };
    case SET_QUERY:
      return { ...state, query: payload };
    case CHANGE_SORTING:
      return { ...state, sorting: payload };
    case CHANGE_SUBJECT:
      return { ...state, subject: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};
