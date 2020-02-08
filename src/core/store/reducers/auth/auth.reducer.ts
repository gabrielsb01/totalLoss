import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGIN_LOADING,
  LOGIN_TRY_AGAIN,
  CLEAR_AUTH,
  LOGOFF
} from '@core/config/constants/actionType.constant';

const initialState: any = {
  requesting: null,
  successful: null,
  denied: false,
  token: null
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case LOGIN_LOADING:
      return {
        ...state,
        requesting: action.payload
      }

    case LOGIN_SUCCESS:
      return {
        ...state,
        successful: true,
        token: action.payload,
        denied: false
      }

    case LOGIN_TRY_AGAIN: 
      return {
        ...state, 
        denied: false
      }

    case LOGIN_ERROR:
      return {
        ...state,
        successful: false,
        denied: true,
        payload: null
      }

    case CLEAR_AUTH: 
      return {
        ...state,
        requesting: false,
        successful: false,
        denied: false,
      }
    
    case LOGOFF: 
      return {
        ...initialState
      }

    default:
      return state
  }
}
