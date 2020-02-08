import {
    GET_PROVIDERS_REQUEST,
    GET_PROVIDERS_SUCCES,
    GET_PROVIDERS_ERROR,
    SET_PROVIDERS_ERROR,
    SET_PROVIDERS_REQUEST
  } from '@core/config/constants/actionType.constant';
  
  const initialState: any = {
    request: false,
    success: false,
    error: false,
    providers: false,
    message: false
  }
  
  export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_PROVIDERS_SUCCES: 
            return {
                request: false,
                success: true,
                error: false,
                providers: action.payload,
                message: false
            }

        case SET_PROVIDERS_REQUEST: 
            return {
              ...state,
              request: true,
              error: false,
              message: false
            }

        case SET_PROVIDERS_ERROR:
            return {
                ...state,
                request: false,
                success: false,
                error: true,
                message: action.message
            }
  
        default:
            return state
    }
  }
  