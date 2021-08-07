export const SET_BOOKS = 'SET_BOOKS';
export const ZERO_BOOKS = 'ZERO_BOOKS';


export const setBooks = payload => {
  return {
    type: SET_BOOKS,
    payload
  }
}

export const zeroBooks = () => {
  return {
    type: ZERO_BOOKS,
  }
}