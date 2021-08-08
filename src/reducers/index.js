import { combineReducers } from 'redux'
import { mockEndPoints } from '../mock';
import axios from 'axios';
import { RESET_ERROR_MESSAGE, UPDATE_API_LIST, UPDATE_API_STATUS_RUNNING, UPDATE_API_STATUS_STOPPED} from '../constants';

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
    if (type === UPDATE_API_STATUS_RUNNING) {
      const data1 = JSON.parse(JSON.stringify(data))
      data1.current = true;
      try {
        axios(data1.endPoint).then(
          (res) => {
            console.log(data1.id , res.data)
            if(res.status === 200) {
              data1.status = 'ok'
            } else {
              data1.status = 'error'
            }
          }
        )
      } catch(err) {
        console.log(err);
        data1.status = 'error'
      }
        let newState = state.slice();;
        for(let i=0; i<newState.length;i++) {
          if(newState[i].id === data1.id) {
            newState[i] = data1;
          }
        }
        console.log('UPDATE_API_STATUS_RUNNING', newState);
        return newState;
    }
    if (type === UPDATE_API_STATUS_STOPPED) {
      const data1 = JSON.parse(JSON.stringify(data))
      data1.current = false;
      let newState = state.slice();;
        for(let i=0; i<newState.length;i++) {
          if(newState[i].id === data1.id) {
            newState[i] = data1;
          }
        }
        console.log('UPDATE_API_STATUS_Stopped', newState);
        return newState;
    }
    return state
}

const rootReducer = combineReducers({
  errorMessage,
  apiList
});

export default rootReducer;
