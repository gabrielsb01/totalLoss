import {
    GET_LOCATIONS_SUCCESS,
    GET_LOCATIONS_REQUEST,
    GET_LOCATIONS_ERROR
} from '@core/config/constants/actionType.constant'

const initialState = {
    token: '',
    request: true,
    success: false,
    error: false,
    locations: [],
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        case GET_LOCATIONS_REQUEST: 
            return {
                ...state,
                token: action.token,
                request: true,
                success: false,
                error: false
            }

        case GET_LOCATIONS_SUCCESS: 
            return {
                ...state,
                request: false,
                success: true,
                error: false,
                locations: action.payload
            }
        
        case GET_LOCATIONS_ERROR: 
            return {
                request: false,
                success: false,
                error: true,
            }
        default:
        return state
    }
}
