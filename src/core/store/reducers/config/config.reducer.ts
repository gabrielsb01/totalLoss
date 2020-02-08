import {
    GET_CONFIG_REQUEST,
    GET_CONFIG_SUCCESS,
    GET_CONFIG_ERROR,
    LOGIN_REQUEST,
  } from '@core/config/constants/actionType.constant';
  
  const initialState: any = {
    request: false,
    success: false,
    error: false,
    config: false
  }
  
  export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_CONFIG_REQUEST: 
            return {
                request: true,
                success: false,
                error: false,
                config: false
            }
        case GET_CONFIG_SUCCESS: 
            return {
                request: false,
                success: true,
                error: false,
                config: action.payload
            }

        case GET_CONFIG_ERROR: 
            return {
                request: false,
                success: false,
                error: true,
                config: false
            }
        case LOGIN_REQUEST: 
            return {
                request: false,
                success: false,
                error: false,
                config: false
            }
  
        default:
            return state
    }
  }
  