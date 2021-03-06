import {
  CHANGE_VALUE,
  SET_QUERY,
  CHANGE_SORTING,
  CHANGE_SUBJECT,
  SET_LOADING,
  CHANGE_INDEX,
  SET_DETAILS_LOADER
} from "../actions/searchActions";

const initialState = {
  value: "",
  query: "",
  startIndex: 0,
  sorting: "relevance",
  subject: "all",
  loading: false,
  detailsLoader: false,
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
    case CHANGE_INDEX:
      return { ...state, startIndex: state.startIndex + 30 };
    case SET_DETAILS_LOADER:
      return { ...state, detailsLoader: payload };
    default:
      return state;
  }
};
