import { combineReducers } from 'redux'
import { mockEndPoints } from '../mock';
import { RESET_ERROR_MESSAGE, UPDATE_API_LIST } from '../constants';

// Updates error message to notify about the failed fetches.
const errorMessage = (state = null, action) => {
  const { type, error } = action

  if (type === RESET_ERROR_MESSAGE) {
    return null
  } else if (error) {
    return error
  }

  return state
}

// updates api endpoints from the response.
const apiList = (state = mockEndPoints, action) => {
    const { type, data } = action

    if (type === UPDATE_API_LIST) {
      return data
    }
    return state
}

const rootReducer = combineReducers({
  errorMessage,
  apiList
});

export default rootReducer;
