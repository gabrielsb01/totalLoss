import {
  SEND_CLAIM_REQUEST, SEND_CLAIM_SUCCESS, SEND_CLAIM_ERROR,
  SET_TOKEN_AS_VALID, SET_TOKEN_AS_INVALID, INITIAL_REQUESTING, RESET_FORM,
  SET_DATA_CONFIG
} from '@core/config/constants/actionType.constant'

const initialState: any = {
  error: false,
  requesting: false,
  successful: false,
  initialRequesting: true,
  validating: true,
}

export default function (state = initialState, action: any) {
  switch (action.type) {
    case SEND_CLAIM_REQUEST:
      return {
        ...state,
        error: false,
        requesting: true,
        successful: false
      }

    case SET_DATA_CONFIG:
      return {
        ...state
      }

    case RESET_FORM :
      return {
        ...state,
        error: false,
        requesting: true,
        successful: false
      }

    case SEND_CLAIM_SUCCESS:
      return {
        ...state,
        error: false,
        requesting: false,
        successful: true
      }

    case SEND_CLAIM_ERROR:
      return {
        ...state,
        error: true,
        requesting: false,
        successful: false
      }

    case SET_TOKEN_AS_VALID:
      return {
        ...state
      }

    case SET_TOKEN_AS_INVALID:
      return {
        ...state
      }

    case INITIAL_REQUESTING:
      return {
        ...state,
        initialRequesting: action.payload
      }

    default:
      return state
  }
}
