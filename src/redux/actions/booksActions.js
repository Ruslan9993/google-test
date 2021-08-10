export const SET_BOOKS = 'SET_BOOKS';
export const ZERO_BOOKS = 'ZERO_BOOKS';
export const SET_DETAILS = 'SET_DETAILS';
export const HAS_MORE = 'HAS_MORE';

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

export const setDetails = payload => {
  return {
    type: SET_DETAILS,
    payload
  }
}

export const hasMore = payload => {
  return {
    type: HAS_MORE,
    payload
  }
}
