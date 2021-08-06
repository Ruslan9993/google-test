import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { booksReducer } from './reducers/booksReducer';
import { searchReducer } from './reducers/searchReducer'

const rootReducer = combineReducers({
  books: booksReducer,
  search: searchReducer,

})
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))