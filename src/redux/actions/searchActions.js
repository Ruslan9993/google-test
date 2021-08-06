export const CHANGE_VALUE = 'CHANGE_VALUE'
export const SET_QUERY = 'SET_QUERY';
export const CHANGE_SORTING = 'CHANGE_SORTING';
export const CHANGE_SUBJECT = 'CHANGE_SUBJECT';

export const changeValue = payload => {
  return {
    type: CHANGE_VALUE,
    payload
  }
}


export const setQuery = payload => {
  return {
    type: SET_QUERY,
    payload
  }
}
export const changeSorting = payload => {
  return {
    type: CHANGE_SORTING,
    payload
  }
}

export const changeSubject = payload => {
  return {
    type: CHANGE_SUBJECT,
    payload
  }
}