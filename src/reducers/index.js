import { combineReducers } from 'redux';
import LibraryReducer fron './LibraryReducer'

export default combineReducers({
  libraries: LibraryReducer
});
