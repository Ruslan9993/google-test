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
    default:
      return state;
  }
};
